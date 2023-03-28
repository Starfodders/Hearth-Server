/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('given_name').defaultTo('Traveller');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.number('progress').notNullable().defaultTo(0);
    table.timestamp('created').notNullable();
    table.number('times_meditate');
    table.number('elapsed_meditate_time');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
