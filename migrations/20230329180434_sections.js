/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sections', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('images');
    table.boolean('completed').defaultTo(false);
    table.number('chapters_id').unsigned().notNullable().references('id').inTable('chapters').onUpdate('CASCADE').onDelete('CASCADE')
    table.index('chapters_id')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('sections')
};
