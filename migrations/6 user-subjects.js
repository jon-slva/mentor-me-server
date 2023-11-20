/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("user_subjects", (table) => {
        table.integer("user_id").unsigned().notNullable();
        table.integer("subject_id").unsigned().notNullable();

        table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
        table.foreign("subject_id").references("id").inTable("subjects").onDelete('CASCADE');

        table.primary(["user_id", "subject_id"]);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("user_subjects");
};
