/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("convos", (table) => {
        table.increments("id").primary(); // Unique identifier for each conversation
        table.integer("mentor_id").unsigned().notNullable(); // Foreign key referencing mentors table
        table.integer("mentee_id").unsigned().notNullable(); // Foreign key referencing mentees table
        table.timestamp("created_at").defaultTo(knex.fn.now()); // Timestamp for when the conversation was created
        table.boolean("enable_video_chat").defaultTo(false);

        // Define unique constraint to ensure only one conversation between a unique pair of mentor and mentee
        table.unique(["mentor_id", "mentee_id"]);

        // Define foreign key constraints
        table.foreign("mentor_id").references("id").inTable("mentors").onDelete('NO ACTION');
        table.foreign("mentee_id").references("id").inTable("mentees").onDelete('NO ACTION');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("convos");
};
