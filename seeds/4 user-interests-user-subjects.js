const userInterestsData = require("../seed-data/5 user-interests.js");
const userSubjectsData = require("../seed-data/6 user-subjects.js");


exports.seed = async function (knex) {
    await knex("user_subjects").del();
    await knex("user_interests").del();

    await knex("user_subjects").insert(userSubjectsData);
    await knex("user_interests").insert(userInterestsData);
};