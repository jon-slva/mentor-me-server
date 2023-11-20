const mentorsData = require("../seed-data/2 mentors");
const menteesData = require("../seed-data/2 mentees");

exports.seed = async function (knex) {
    await knex("mentors").del();
    await knex("mentees").del();

    await knex("mentors").insert(mentorsData);
    await knex("mentees").insert(menteesData);
};