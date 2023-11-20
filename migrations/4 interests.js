/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("interests", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.integer("parent_subject_id").unsigned().notNullable();

        table.foreign('parent_subject_id').references('id').inTable('subjects').onDelete('CASCADE');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("interests");
};
