const express = require('express');
const axios = require('axios');
const knex = require('knex')(require('../knexfile'));

// const ollieExample = async (req, res) => {
//     try {
//         const { sort_by, order_by, s } = req.query;
//         if (!s) {
//             // https://knexjs.org/guide/query-builder.html#decrement
//             if (sort_by) {
//                 if (!order_by || order_by === "asc") {
//                     const data = await knex("warehouses").orderBy(sort_by, "asc");
//                     return res.status(200).json(data);
//                 }
//                 const data = await knex("warehouses").orderBy(sort_by, "desc");
//                 return res.status(200).json(data);
//             }
//             const data = await knex.select('*').from('warehouses');
//             return res.status(200).json(data);
//         }
//         if (sort_by) {
//             if (!order_by || order_by === "asc") {
//                 const data = await knex("warehouses").whereILike("warehouse_name", `%${s}%`).orWhereILike("address", `%${s}%`).orWhereILike("contact_name", `%${s}%`).orWhereILike("contact_email", `%${s}%`).orWhereILike("contact_phone", `%${s}%`).orWhereILike("city", `%${s}%`).orWhereILike("country", `%${s}%`).orderBy(sort_by, "asc");
//                 return res.status(200).json(data);
//             }
//             const data = await knex("warehouses").whereILike("warehouse_name", `%${s}%`).orWhereILike("address", `%${s}%`).orWhereILike("contact_name", `%${s}%`).orWhereILike("contact_email", `%${s}%`).orWhereILike("contact_phone", `%${s}%`).orWhereILike("city", `%${s}%`).orWhereILike("country", `%${s}%`).orderBy(sort_by, "desc");
//             return res.status(200).json(data);
//         }
//         const data = await knex.select('*').from('warehouses').whereILike("warehouse_name", `%${s}%`).orWhereILike("address", `%${s}%`).orWhereILike("contact_name", `%${s}%`).orWhereILike("contact_email", `%${s}%`).orWhereILike("contact_phone", `%${s}%`).orWhereILike("city", `%${s}%`).orWhereILike("country", `%${s}%`);
//         return res.status(200).json(data);
//     } catch (err) {
//         return res.status(500).send(`Error retrieving Warehouses: ${err}`);
//     }
// };

const search = async (req, res) => {
    try {
        const searchQuery = req.query.s; // this is needed to capture the search query ?s=

        // This returns all interests and subjects with the searchQuery
        const interestsWithSubjects = await knex('interests')
            .join('subjects', 'interests.parent_subject_id', '=', 'subjects.id')
            .where(function () {
                this.where('interests.name', 'like', `%${searchQuery}%`)
                    .orWhere('subjects.name', 'like', `%${searchQuery}%`);
            })
            .select('interests.*', 'subjects.name as subject_name');

        // users whose subjects and interests correspond with the search query
        const mentors = await knex('users')
            .leftJoin('user_interests', 'users.id', '=', 'user_interests.user_id')
            .leftJoin('interests', 'user_interests.interests_id', '=', 'interests.id')
            .leftJoin('user_subjects', 'users.id', '=', 'user_subjects.user_id')
            .leftJoin('subjects', 'user_subjects.subject_id', '=', 'subjects.id')
            .leftJoin('mentors', 'users.id', '=', 'mentors.user_id')
            .where(function () {
                this.whereNotNull('mentors.id') // Filter out users without mentors
                    .andWhere(function () {
                        this.where('interests.name', 'like', `%${searchQuery}%`)
                            .orWhere('subjects.name', 'like', `%${searchQuery}%`);
                    });
            })
            .select('users.*', 'mentors.id as mentor_id')  // Include mentor_id
            .distinct();

        const response = { mentors, interestsWithSubjects };

        return res.status(200).send(response);
    } catch (err) {
        return res.status(500).send(`Error retrieving search results: ${err}`);
    }
};

const addUser = async (req, res) => {
    const reqBody = req.body;
    const newUser = {
        first_name: reqBody.first_name,
        last_name: reqBody.last_name,
        password: reqBody.password,
        alias: reqBody.alias,
        street: reqBody.street,
        city: reqBody.city,
        state: reqBody.state,
        zip: reqBody.zip,
        country: reqBody.country,
        lat: reqBody.lat,
        long: reqBody.long,
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

    const userInterests = reqBody.user_interests || [];
    const userSubjects = reqBody.user_subjects || [];

    try {
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
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




module.exports = {
    search,
    addUser
};


