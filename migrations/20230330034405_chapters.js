exports.up = function (knex) {
  return knex.schema
    .createTable("chapters", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("units");
      table.integer("units__done").defaultTo(0);
      table.boolean("overall_available");
      table.boolean("available").defaultTo(false);
      table.string("images");
    })
    .createTable("sections", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("images");
      table.boolean("completed").defaultTo(false);
      table.string("title");
      table.integer("units").defaultTo(0);
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
      table.string("title");
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
      table.string("title").defaultTo(null);
      table.string("type").defaultTo("text");
      table.text("content").notNullable();
      table.text("transcript", "mediumtext").defaultTo(null);
      table.boolean("audio").defaultTo(false);
      table.text("list", "mediumtext").defaultTo(null);
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
      table.timestamps(true, true);
      table.boolean("newbie").defaultTo(true);
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
    })
    .createTable("finishData", (table) => {
      table.increments("id").primary();
      table.string("content").notNullable();
      table.string("image");
      table.string("caption");
    })
    .createTable("transcripts", (table) => {
      table.integer("id").primary();
      table.text("content", "mediumtext");
      table.string("audio").defaultTo(null);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("finishData")
    .dropTable("transcripts")
    .dropTable("users")
    .dropTable("pages")
    .dropTable("units")
    .dropTable("sections")
    .dropTable("chapters");
};
