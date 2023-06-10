const knex = require("knex")(require("../knexfile"));

exports.getUnit = async (req, res) => {
  await knex("pages")
    .where({ unit_id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({
        message: `No pages found for units with id ${req.params.id}` + err,
      });
    });
};

exports.getUnitList = async (req, res) => {
  await knex("units")
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({
        message: `No pages found for units with id ${req.params.id}` + err,
      });
    });
};

exports.getTranscript = async (req, res) => {
  //when given a specific unit ID and page num from front end, send back the transcript data
  // const transcriptLocation = `unit${req.params.id}`;
  // const transcriptData = require(`../transcript__data/${transcriptLocation}.json`);
  // const transcriptSpecific = transcriptData.find(
  //   (jsonData) => jsonData.id === req.params.pageNum
  // );
  // console.log(typeof(req.params.pageNum));

  await knex('transcripts').where({id:req.params.pageNum}).first()
  .then((data) => {
    res.status(200).json(data)
  })
  .catch((err) => {
    res.status(404).json({message: 'Unable to find transcript for unit'})
  })

}

exports.getCloser = async (req, res) => {
  await knex("finishData")
    .where({ id: req.params.id }).first()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: 'Unable to retrieve closing slide for unit ' + req.params.id })
    })
};

exports.savePage = async (req, res) => {
  const newSaved = {
    pages_id: req.params.pageID,
    user_id: req.params.userID,
  };
  await knex("saved")
    .insert(newSaved)
    .then((data) => {
      res.status(200).json({ message: "Page Saved Successfully" });
    })
    .catch((error) => {
      res.status(400).json({ message: "Unable to save page" });
    });
};

exports.delSavedPage = async (req, res) => {
  await knex("saved")
    .where({ pages_id: req.params.pageID, user_id: req.params.userID })
    .del()
    .then((data) => {
      res.status(204).json({ message: "Page removed from saved" });
    })
    .catch((error) => {
      res.status(404).json({ message: "Page not found" });
    });
};
