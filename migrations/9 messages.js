/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("messages", (table) => {
        table.increments("id").primary();
        table.integer("convo_id").unsigned().notNullable();
        table.integer("mentor_id").unsigned().defaultTo(null); // Use sender_id to represent either mentor or mentee ID
        table.integer("mentee_id").unsigned().defaultTo(null); // Use sender_id to represent either mentor or mentee ID
        table.text("content").notNullable();
        table.timestamp("sent_at").defaultTo(knex.fn.now());

        // Define foreign key constraints
        table.foreign("convo_id").references("id").inTable("convos").onDelete('NO ACTION');
        table.foreign("mentor_id").references("id").inTable("mentors").onDelete('NO ACTION');
        table.foreign("mentee_id").references("id").inTable("mentees").onDelete('NO ACTION');

        // Auto-incrementing ID for sorting by insertion order
        table.unique(["convo_id", "id"]); // Ensures uniqueness within a conversation
    });
};

// When you retrieve messages for a specific conversation, you can use an ORDER BY clause on the id column to get them in the order they were inserted.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("messages");
};