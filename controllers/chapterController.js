const knex = require("knex")(require("../knexfile"));

exports.getChapters = async (req, res) => {
  await knex("chapters")
    .select("*")
    .then((chapterList) => {
      knex("users")
        .where({ id: req.params.userID })
        .first()
        .then((userAccess) => {
          chapterList.forEach((chapter) => {
            if (chapter.id <= userAccess.chapter) {
              chapter.available = 1;
            }
          })      
          res.status(200).json(chapterList);
        });
    })
    .catch((error) => {
      res.status(400).json({ message: "Error Retrieving Chapter Data" });
    });
};


exports.getSections = async (req, res) => {
  await knex("sections")
    .select("*")
    .where({ chapter_id: req.params.chapterID })
    .then((sectionList) => {
      knex("users")
        .where({ id: req.params.userID })
        .first()
        .then((userAccess) => {
          sectionList.forEach((section) => {
            if (section.id <= userAccess.section) {
              section.available = 1;
            }
          });
          res.status(200).json(sectionList);
        });
    })
    .catch((error) => {
      res.status(404).json({ message: "No section found with that id" });
    });
};

exports.getUnits = async (req, res) => {

  await knex("units")
    .select("*")
    .where({ section_id: req.params.sectionID })
    .then((unitList) => {
      knex("users")
        .where({ id: req.params.userID })
        .first()
        .then((userAccess) => {
          unitList.forEach((unit) => {
            if (unit.id <= userAccess.unit) {
              unit.available = 1;
            }
          });
          res.status(200).json(unitList);
        });
    })
    .catch((error) => {
      res.status(404).json({ message: "No unit found with that id" });
    });
};
