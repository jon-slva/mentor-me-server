const express = require('express');
const axios = require('axios');
const knex = require('knex')(require('../knexfile'));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const loginFunc1 = async (req, res) => {
//     const { alias, password } = req.body;
//     const user = await knex('users')
//     .where({ alias: alias, password: password })

//     res.json({
//         token: jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
//             expiresIn: '24h',
//         }),
//     });

// }


async function updatePasswords() {
    try {
        const users = await knex('users');

        for (const user of users) {
            const hashedPassword = bcrypt.hashSync(user.password, 10);
            await knex('users').where({ id: user.id }).update({ password: hashedPassword });
        }

        console.log('Passwords updated successfully');
    } catch (error) {
        console.error('Error updating passwords:', error);
    }
}

updatePasswords();

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
    console.log('Hashed Password:', bcrypt.hashSync(password, 10));


    console.log(isPasswordCorrect)
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







module.exports = {
    loginFunc,
    authorizeUser,
};