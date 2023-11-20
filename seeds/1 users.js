const usersData = require("../seed-data/1 users");

exports.seed = async function (knex) {
    await knex("users").del();

    await knex("users").insert(usersData);
};