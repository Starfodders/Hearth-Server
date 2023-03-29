/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pages', (table) => {
        table.increments('id').primary();
        table.number('page_number').notNullable();
        table.string('title');
        table.string('class');
        table.text('content').notNullable();
        table.text('transcript');
        table.boolean('can_save').notNullable();
        table.boolean('saved').defaultTo(false);
        table.string('images');
        table.string('links');
        table.number('units_id').unsigned().notNullable().references('id').inTable('units').onUpdate('CASCADE').onDelete('CASCADE');
        table.index('units_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pages')
};
