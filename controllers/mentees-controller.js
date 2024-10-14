const express = require('express');
const knex = require('knex')(require('../knexfile'));


const search = async (req, res) => {
    res.send('search')

    //     try {
    //         const searchQuery = req.query.s;
    //         console.log(req.query)

    //         // This returns all interests and subjects with the searchQuery
    //         const interestsWithSubjects = await knex('interests')
    //             .join('subjects', 'interests.parent_subject_id', '=', 'subjects.id')
    //             .where(function () {
    //                 this.where('interests.name', 'like', `%${searchQuery}%`)
    //                     .orWhere('subjects.name', 'like', `%${searchQuery}%`);
    //             })
    //             .select('interests.*', 'subjects.name as subject_name');

    //         // users whose subjects and interests correspond with the search query
    //         const mentorsData = await knex('users')
    //             .leftJoin('user_interests', 'users.id', '=', 'user_interests.user_id')
    //             .leftJoin('interests', 'user_interests.interests_id', '=', 'interests.id')
    //             .leftJoin('user_subjects', 'users.id', '=', 'user_subjects.user_id')
    //             .leftJoin('subjects', 'user_subjects.subject_id', '=', 'subjects.id')
    //             .leftJoin('mentors', 'users.id', '=', 'mentors.user_id')
    //             .whereNotNull('mentors.id')
    //             .andWhere(function () {
    //                 this.where('interests.name', 'like', `%${searchQuery}%`)
    //                     .orWhere('subjects.name', 'like', `%${searchQuery}%`);
    //             })
    //             .groupBy('users.id') // Group by user ID to aggregate subjects and interests
    //             .select(
    //                 'users.*',
    //                 'mentors.id as mentor_id',
    //                 knex.raw('JSON_ARRAYAGG(JSON_OBJECT("id", subjects.id, "name", subjects.name)) as subjects'),
    //                 knex.raw('JSON_ARRAYAGG(JSON_OBJECT("id", interests.id, "name", interests.name)) as interests')
    //             );

    //         function removeDuplicatesFromMentors(mentors) {
    //             return mentorsData.map((mentor) => {
    //                 const uniqueSubjects = Array.from(new Set(mentor.subjects.map((subject) => JSON.stringify(subject))));
    //                 const uniqueInterests = Array.from(new Set(mentor.interests.map((interest) => JSON.stringify(interest))));

    //                 mentor.subjects = uniqueSubjects.map((subject) => JSON.parse(subject));
    //                 mentor.interests = uniqueInterests.map((interest) => JSON.parse(interest));

    //                 return mentor;
    //             });
    //         }

    //         const mentors = removeDuplicatesFromMentors(mentorsData);

    //         const response = { mentors, interestsWithSubjects, searchQuery };

    //         return res.status(200).send(response);
    //     } catch (err) {
    //         return res.status(500).send(`Error retrieving search results: ${err}`);
    //     }
};


const getMentee = async (req, res) => {
    res.send('hello')
    //     const { menteeId } = req.params;  // <-- Corrected from mentorId to menteeId

    //     try {
    //         const menteeData = await knex('mentors')
    //             .where('mentors.id', menteeId)  // <-- Corrected from mentorId to menteeId
    //             .leftJoin('users', 'mentors.user_id', '=', 'users.id')
    //             .leftJoin('user_interests', 'users.id', '=', 'user_interests.user_id')
    //             .leftJoin('interests', 'user_interests.interests_id', '=', 'interests.id')
    //             .leftJoin('user_subjects', 'users.id', '=', 'user_subjects.user_id')
    //             .leftJoin('subjects', 'user_subjects.subject_id', '=', 'subjects.id')
    //             .select(
    //                 'users.*',
    //                 'mentors.id as mentor_id',
    //                 knex.raw('JSON_ARRAYAGG(JSON_OBJECT("id", subjects.id, "name", subjects.name)) as subjects'),
    //                 knex.raw('JSON_ARRAYAGG(JSON_OBJECT("id", interests.id, "name", interests.name)) as interests')
    //             )
    //             .groupBy('users.id');

    //         function removeDuplicatesFromMentees(mentees) {
    //             return mentees.map((mentee) => {
    //                 const uniqueSubjects = Array.from(new Set(mentee.subjects.map((subject) => JSON.stringify(subject))));
    //                 const uniqueInterests = Array.from(new Set(mentee.interests.map((interest) => JSON.stringify(interest))));

    //                 mentee.subjects = uniqueSubjects.map((subject) => JSON.parse(subject));
    //                 mentee.interests = uniqueInterests.map((interest) => JSON.parse(interest));

    //                 return mentee;
    //             });
    //         }

    //         const mentees = removeDuplicatesFromMentees(menteeData);

    //         return res.status(200).json({ mentees });
    //     } catch (error) {
    //         console.error('Error fetching mentee data:', error);
    //         return res.status(500).json({ error: 'Internal Server Error' });
    //     }
};





// Usage example:
// const mentorId = 1; // Replace with the actual mentor_id you want to retrieve
// const mentorData = await getMentorData(mentorId);
// console.log(mentorData);



module.exports = {
    search,
    getMentee,
};