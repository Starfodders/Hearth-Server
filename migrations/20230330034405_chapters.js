exports.up = function (knex) {
  return knex.schema
    .createTable("chapters", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("sections").notNullable();
      table.boolean("available");
      table.boolean("completed");
      table.string("images");
    })
    .createTable("sections", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("images");
      table.boolean("completed").defaultTo(false);
      table
        .integer("chapter_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("chapters")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.index("chapter_id");
    })
    .createTable("units", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("images");
      table.boolean("completed");
      table
        .integer("section_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("sections")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.index("section_id");
    })
    .createTable("pages", (table) => {
      table.increments("id").primary();
      table.integer("page_number").notNullable();
      table.string("title").defaultTo(null)
      table.string("type").defaultTo('text');
      table.text("content").notNullable();
      table.text("transcript", "mediumtext").defaultTo(null)
      table.text("list", "mediumtext").defaultTo(null)
      table.boolean("seen").defaultTo(false);
      table.boolean("can_save").notNullable();
      table.boolean("saved").defaultTo(false);
      table.string("images").defaultTo(null);
      table.string("links").defaultTo(null);
      table
        .integer("unit_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("units")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.index("unit_id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("pages")
    .dropTable("units")
    .dropTable("sections")
    .dropTable("chapters");
};
