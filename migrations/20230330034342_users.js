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
      table.integer('progress').notNullable().defaultTo(0);
      table.timestamp('created').notNullable();
      table.integer('times_meditate');
      table.float('elapsed_meditate_time');
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('users');
  };
  