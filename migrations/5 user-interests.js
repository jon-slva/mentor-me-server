/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("user_interests", (table) => {
        table.integer("user_id").unsigned().notNullable();
        table.integer("interests_id").unsigned().notNullable();

        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('interests_id').references('id').inTable('interests').onDelete('CASCADE');

        table.primary(['user_id', 'interests_id']);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("user_interests");
};
