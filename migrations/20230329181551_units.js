/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('units', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('images');
      table.boolean('completed')
      table.number('subsection_id').unsigned().notNullable().references('id').inTable('sub_sections').onUpdate('CASCADE').onDelete('CASCADE')
      table.index('subsection_id')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('units')
  };
  