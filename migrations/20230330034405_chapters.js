exports.up = function (knex) {
  return knex.schema
    .createTable("chapters", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("sections").notNullable();
      table.boolean("overall_available");
      table.boolean('available').defaultTo(false)
      table.boolean("completed");
      table.string("images");
    })
    .createTable("sections", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("images");
      table.boolean("completed").defaultTo(false);
      table.boolean("available");
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
      table.boolean("available");
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
    })
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("given_name").defaultTo("Traveller");
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.integer("overall_progress").notNullable().defaultTo(0);
      table.timestamps(true, true);
      table.integer("units_done").defaultTo(0);
      table.integer("times_meditate").defaultTo(0);
      table.float("elapsed_meditate_time").defaultTo(0);
      table
        .integer("chapter")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("chapters")
        .defaultTo(1)
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("section")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("sections")
        .defaultTo(1)
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("unit")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("units")
        .defaultTo(1)
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("current_progress").defaultTo(0);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('users')
    .dropTable("pages")
    .dropTable("units")
    .dropTable("sections")
    .dropTable("chapters");
};
