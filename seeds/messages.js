const messagesData = require("../seed-data/9 messages");

exports.seed = async function (knex) {
    await knex("messages").del();

    await knex("messages").insert(messagesData);
};