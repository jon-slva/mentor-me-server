/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("mentors", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().notNullable().unique();
        table.timestamp("start_date").defaultTo(knex.fn.now()).notNullable();

        // table.foreign('user_id').references('id').inTable('users').onDelete('NO ACTION');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("mentors");
};
