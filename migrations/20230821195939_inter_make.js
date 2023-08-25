exports.up = function (knex) {
  return knex("chapters")
    .where("id", 5)
    .update({ units: 6, overall_available: true })
    .then(() => {
      return knex("sections").insert([
        {
          id: 9,
          name: "Basic Interpersonal Effectiveness",
          images: "igo1",
          available: false,
          title: "Interpersonal Effectiveness",
          units: 3,
          chapter_id: 5,
        },
        {
          id: 10,
          name: "Advanced Interpersonal Effectiveness",
          images: "igo2",
          available: false,
          title: "Interpersonal Effectiveness",
          units: 3,
          chapter_id: 5,
        },
      ]);
    })
    .then(() => {
      return knex("units").insert([
        {
          id: 24,
          name: "Basic IE I",
          images: "igo1",
          title: "Basic IE",
          available: false,
          section_id: 9,
        },
        {
            id: 25,
            name: "Basic IE II",
            images: "igo1",
            title: "Basic IE",
            available: false,
            section_id: 9,
          },
          {
            id: 26,
            name: "Basic IE III",
            images: "igo1",
            title: "Basic IE",
            available: false,
            section_id: 9,
          },
          {
            id: 27,
            name: "Advanced IE I",
            images: "igo2",
            title: "Advanced IE",
            available: false,
            section_id: 10,
          },
          {
            id: 28,
            name: "Advanced IE II",
            images: "igo2",
            title: "Advanced IE",
            available: false,
            section_id: 10,
          },
          {
            id: 29,
            name: "Advanced IE III",
            images: "igo2",
            title: "Advanced IE",
            available: false,
            section_id: 10,
          },
      ]);
    });
};

exports.down = function (knex) {
    return knex("sections")
    .whereIn("id", [9, 10])
    .del()
    .then(() => {
      return knex("units").whereIn("id", [24,25,26,27,28,29]).del();
    });
};
