/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('sub_sections', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('images');
      table.boolean('completed');
      table.number('section_id').unsigned().notNullable().references('id').inTable('sections').onUpdate('CASCADE').onDelete('CASCADE')
      table.index('section_id')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('sub_sections')
  };
  