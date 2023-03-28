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
        table.boolean('can_save').notNullable();
        table.boolean('saved').defaultTo(false);
        table.string('images');
        table.string('links');
        table.number('chapter_id').unsigned().notNullable().references('id').inTable('chapters').onUpdate('CASCADE').onDelete('CASCADE');
        table.index('chapter_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.createTable('pages', (table) => {
    })
};
