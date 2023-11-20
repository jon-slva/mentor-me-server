/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => {
    return knex.schema.createTable('reviews', table => {
        table.increments('id').primary();
        table.integer('rating').notNullable().checkIn([1, 2, 3, 4, 5]);
        table.string('content').notNullable();
        table.timestamp('timestamp').defaultTo(knex.fn.now());

        // Foreign key reference to mentees table
        table.integer('mentee_id').unsigned().notNullable().references('id').inTable('mentees').onDelete('NO ACTION');
        table.integer('mentor_id').unsigned().notNullable().references('id').inTable('mentors').onDelete('NO ACTION');

        // Foreign key reference to mentorships table
        table.integer('mentorship_id').unsigned().notNullable().references('id').inTable('mentorships').onDelete('NO ACTION');

        // Additional unique constraint to ensure one review per mentorship
        table.unique(['mentee_id', 'mentorship_id']);
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => {
    return knex.schema.dropTableIfExists('reviews');
};
