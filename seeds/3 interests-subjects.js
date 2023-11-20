const interestsData = require("../seed-data/4 interests");
const subjectsData = require("../seed-data/3 subjects");

exports.seed = async function (knex) {
    await knex("subjects").del();
    await knex("interests").del();

    await knex("subjects").insert(subjectsData);
    await knex("interests").insert(interestsData);
};