/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('password').notNullable();
        table.string('alias').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('zip').notNullable();
        table.string('country').notNullable();
        table.decimal("lat", 8, 4).notNullable();
        table.decimal("long", 8, 4).notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.boolean('can_text').defaultTo(false);
        table.string("pic").defaultTo("/images/default-profile-img.jpeg");
        table.string('social_ig').nullable();
        table.string('social_facebook').nullable();
        table.string('social_soundcloud').nullable();
        table.string('social_youtube').nullable();
        table.string('social_linkedin').nullable();
        table.string('portfolioLink1').nullable();
        table.string('portfolioLink2').nullable();
        table.string('portfolioLink3').nullable();
        table.text('bio').notNullable();
        table.timestamp("joined_on").defaultTo(knex.fn.now());
        table
            .timestamp("updated_at")
            .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('users');
};