exports.up = function (knex) {
  return knex("chapters")
    .where("id", 6)
    .update({ units: 1, overall_available: true })
    .then(() => {
      return knex("sections").insert([
        {
          id: 11,
          name: "Conclusion",
          images: "all1",
          available: false,
          title: "Conclusion",
          units: 2,
          chapter_id: 6,
        },
      ]);
    })
    .then(() => {
      return knex("units").insert([
        {
          id: 30,
          name: "Conclusion I",
          images: "all1",
          title: "Conclusion",
          available: false,
          section_id: 11,
        },
        {
          id: 31,
          name: "Conclusion II",
          images: "all1",
          title: "Conclusion",
          available: false,
          section_id: 11,
        },
      ]);
    });
};

exports.down = function (knex) {
  return knex("sections")
    .where("id", 11)
    .del()
    .then(() => {
      return knex("units").whereIn("id", [30, 31]).del();
    });
};
