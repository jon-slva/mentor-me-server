/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("mentorships", (table) => {
        table.increments("id").primary();
        table.integer("mentor_id").unsigned().notNullable().references("id").inTable("mentors").onDelete('NO ACTION');
        table.integer("mentee_id").unsigned().notNullable().references("id").inTable("mentees").onDelete('NO ACTION');
        table.integer("subject_id").unsigned().notNullable().references("id").inTable("subjects").onDelete('NO ACTION');
        table.integer("convo_id").unsigned().notNullable().references("id").inTable("convos").onDelete('NO ACTION');
        table.timestamp("start_date").notNullable();
        table.timestamp("end_date").defaultTo(null);

        // Add any other columns as needed for your mentorships table

        table.unique(["mentor_id", "mentee_id", "subject_id", "convo_id"]); // Unique constraint if needed
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("mentorships");
};