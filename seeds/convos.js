const convosData = require("../seed-data/7 convos");

exports.seed = async function (knex) {
    await knex("convos").del();

    await knex("convos").insert(convosData);
};