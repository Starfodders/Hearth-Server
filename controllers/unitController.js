const knex = require("knex")(require("../knexfile"));

exports.getUnit = async (req, res) => {
    await knex('pages').where({unit_id: req.params.id})
    .then((data => {
        res.status(200).json(data)
    }))
    .catch((err) => {
        res.status(404).json({message: `No pages found for units with id ${req.params.id}` + err})
    })
}

exports.getTranscript = async (req, res) => {
    //when given a specific unit ID and page num from front end, send back the transcript data
    const transcriptLocation = `unit${req.params.unitID}`; 
    const transcriptData = require(`../transcript__data/${transcriptLocation}.json`);
    const transcriptSpecific = transcriptData.find(jsonData => jsonData.id === req.params.pageNum); 
        
    // console.log(transcriptSpecific);
    if (!transcriptSpecific) {
        res.status(404).json({message: `No transcript found at unit Id : ${unitID} or page number : ${pageNum}`})
    }
    res.status(200).json(transcriptSpecific);
}