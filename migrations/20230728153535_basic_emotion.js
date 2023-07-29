exports.up = function (knex) {
  return knex("chapters")
    .where("id", 4)
    .update({ overall_available: true, units: 5 })
    .then(() => {
      return knex("sections").insert([
        {
          id: 7,
          name: "Basic Emotional Regulation",
          images: "edo1",
          available: false,
          title: "Emotional Regulation",
          units: 3,
          chapter_id: 4,
        },
        {
          id: 8,
          name: "Advanced Emotional Regulation",
          images: "edo2",
          available: false,
          title: "Emotional Regulation",
          units: 2,
          chapter_id: 4,
        },
      ]);
    })
    .then(() => {
      return knex("units").insert([
        {
          id: 19,
          name: "Basic Emotional Regulation I",
          images: "edo1",
          title: "Basic Emotional Regulation",
          available: false,
          section_id: 7,
        },
        {
          id: 20,
          name: "Basic Emotional Regulation II",
          images: "edo1",
          title: "Basic Emotional Regulation",
          available: false,
          section_id: 7,
        },
        {
          id: 21,
          name: "Basic Emotional Regulation III",
          images: "edo1",
          title: "Basic Emotional Regulation",
          available: false,
          section_id: 7,
        },
        {
          id: 22,
          name: "Advanced Emotional Regulation I",
          images: "edo2",
          title: "Advanced Emotional Regulation",
          available: false,
          section_id: 8,
        },
        {
          id: 23,
          name: "Advanced Emotional Regulation II",
          images: "edo2",
          title: "Advanced Emotional Regulation",
          available: false,
          section_id: 8,
        },
      ]);
    });
};
exports.down = function (knex) {
  return knex("sections")
    .whereIn("id", [7, 8])
    .del()
    .then(() => {
      return knex("units").whereIn("id", [19, 20, 21, 22, 23]).del();
    });
};
