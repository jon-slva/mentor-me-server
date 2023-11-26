const express = require('express');
const axios = require('axios');
const knex = require('knex')(require('../knexfile'));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();


// async function updatePasswords() {
//     try {
//         const users = await knex('users');

//         for (const user of users) {
//             const hashedPassword = bcrypt.hashSync(user.password, 10);
//             await knex('users').where({ id: user.id }).update({ password: hashedPassword });
//         }

//         console.log('Passwords updated successfully');
//     } catch (error) {
//         console.error('Error updating passwords:', error);
//     }
// }

// updatePasswords();

const loginFunc = async (req, res) => {
    const { alias, password } = req.body;
    if (!alias || !password) {
        return res.status(400).send("Please enter all required fields");
    }

    // find the user
    const user = await knex("users")
        .where({ alias: alias }).first();

    // could not find user email
    if (!user) {
        return res.status(400).send("Invalid email");
    }

    // check passwrod
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    console.log('Stored Password:', user.password);
    // console.log('Hashed Password:', bcrypt.hashSync(password, 10));


    // console.log(isPasswordCorrect)
    // password was incorrect
    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password");
    }

    // generate a token
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });

    res.json({ token });
};

// ## GET /api/users/current
// -   Gets information about the currently logged in user.
// -   If no valid JWT is provided, this route will respond with 401 Unauthorized.
// -   Expected headers: { Authorization: "Bearer JWT_TOKEN_HERE" }
const authorizeUser = async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }

    // parse the bearer token
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];

    try {
        // verify the token (will give us information we stored in properties when the token was created, ex. id property)
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);

        // respond with appropriate user data
        const user = await knex("users").where({ id: decoded.id }).first();

        // disclude the password in the response
        delete user.password;
        res.json(user);
    } catch (error) {
        return res.status(401).send("Invalid auth token");
    }
};


// Signup

const addUser = async (req, res) => {
    const reqBody = req.body;

    const address = `${reqBody.street}, ${reqBody.city}, ${reqBody.country}`;

    // Convert Address to LAT/LONG
    try {
        const encodedAddress = encodeURIComponent(address);

        const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${encodedAddress}&apiKey=${process.env.API_KEY}`);
        console.log(response)

        const lat = response.data.features[0].geometry.coordinates[1].toFixed(4);
        const lon = response.data.features[0].geometry.coordinates[0].toFixed(4);

        // Process the response data
        const newUser = {
            first_name: reqBody.first_name,
            last_name: reqBody.last_name,
            password: bcrypt.hashSync(reqBody.password, 10),
            alias: reqBody.alias,
            street: reqBody.street,
            city: reqBody.city,
            state: reqBody.state,
            zip: reqBody.zip,
            country: reqBody.country,
            lat: lat,
            long: lon,
            email: reqBody.email,
            phone: reqBody.phone,
            can_text: reqBody.can_text,
            pic: reqBody.pic,
            social_ig: reqBody.social_ig,
            social_facebook: reqBody.social_facebook,
            social_soundcloud: reqBody.social_soundcloud,
            social_youtube: reqBody.social_youtube,
            social_linkedin: reqBody.social_linkedin,
            portfolioLink1: reqBody.portfolioLink1,
            portfolioLink2: reqBody.portfolioLink2,
            portfolioLink3: reqBody.portfolioLink3,
            bio: reqBody.bio,
        };

        console.log(newUser)
        const userInterests = reqBody.user_interests || [];
        const userSubjects = reqBody.user_subjects || [];


        await knex.transaction(async (trx) => {
            // Step 1: Insert the user into the users table
            const [userId] = await trx('users').insert(newUser);

            // Step 2: Check if the user is a mentor (based on your stipulation)
            if (reqBody.is_mentor) {
                // Step 3: Insert the mentor entry into the mentors table
                await trx('mentors').insert({
                    user_id: userId,
                    // mentor-specific fields...
                });
            } else {
                await trx('mentees').insert({
                    user_id: userId,
                    // mentee-specific fields...
                });
            }

            // Step 4: Insert user interests into user_interests table
            await Promise.all(
                userInterests.map(async (interest) => {
                    await trx('user_interests').insert({
                        user_id: userId,
                        interests_id: interest.id,
                        // interest_name: interest.name,
                    });
                })
            );

            // Step 5: Insert user subjects into user_subjects table
            await Promise.all(
                userSubjects.map(async (subject) => {
                    await trx('user_subjects').insert({
                        user_id: userId,
                        subject_id: subject.id,
                        // subject_name: subject.name,
                    });
                })
            );

            // If all steps are successful, commit the transaction
            await trx.commit();

            // Send a success response to the client
            res.json({ success: true });
        });
    } catch (error) {
        // If an error occurs, handle it and send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





module.exports = {
    loginFunc,
    authorizeUser,
    addUser,
};