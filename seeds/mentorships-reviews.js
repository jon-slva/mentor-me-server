const mentorshipsData = require("../seed-data/8 mentorships");
const reviewsData = require("../seed-data/9 reviews");

exports.seed = async function (knex) {
    await knex("mentorships").del();
    await knex("reviews").del();

    await knex("mentorships").insert(mentorshipsData);
    await knex("reviews").insert(reviewsData);
};