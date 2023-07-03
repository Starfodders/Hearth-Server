
exports.up = function (knex) {
  return knex("chapters")
    .where("id", 3)
    .update({ overall_available: true })
    .then(() => {
      return knex("sections").insert({
        id: 6,
        name: "Advanced Mindfulness",
        images: "mana2",
        available: false,
        title: "Mindfulness",
        units: 4,
        chapter_id: 3,
      });
    })
    .then(() => {
      return knex("units").insert([
        {
          id: 13,
          name: "Basic Mindfulness III",
          images: "mana1",
          title: "Basic Mindfulness",
          available: false,
          section_id: 5,
        },
        {
          id: 14,
          name: "Basic Mindfulness IV",
          images: "mana1",
          title: "Basic Mindfulness",
          available: false,
          section_id: 5,
        },
        {
          id: 15,
          name: "Advanced Mindfulness I",
          images: "mana2",
          title: "Advanced Mindfulness",
          available: false,
          section_id: 6,
        },
        {
          id: 16,
          name: "Advanced Mindfulness II",
          images: "mana2",
          title: "Advanced Mindfulness",
          available: false,
          section_id: 6,
        },
        {
          id: 17,
          name: "Advanced Mindfulness III",
          images: "mana2",
          title: "Advanced Mindfulness",
          available: false,
          section_id: 6,
        },
        {
          id: 18,
          name: "Advanced Mindfulness IV",
          images: "mana2",
          title: "Advanced Mindfulness",
          available: false,
          section_id: 6,
        },
      ]);
    })
    .then(() => {
      return knex("units").where("id", 11).update({ images: "mana1" });
    })
    .then(() => {
      return knex("units").where("id", 12).update({ images: "mana1" });
    });
};

exports.down = function(knex) {
    return knex('units').where('id', 18).del()
      .then(() => {
        return knex('units').where('id', 17).del();
      })
      .then(() => {
        return knex('units').where('id', 16).del();
      })
      .then(() => {
        return knex('units').where('id', 15).del();
      })
      .then(() => {
        return knex('units').where('id', 14).del();
      })
      .then(() => {
        return knex('units').where('id', 13).del();
      })
      .then(() => {
        return knex('units').where('id', 12).update({ images: 'tal2' });
      })
      .then(() => {
        return knex('units').where('id', 11).update({ images: 'tal2' });
      })
      .then(() => {
        return knex('sections').where('id', 6).del();
      })
      .then(() => {
        return knex('chapters').where('id', 3).update({ overall_available: false });
      });
  };

  
  
  
  