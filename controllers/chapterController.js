const knex = require("knex")(require("../knexfile"));

exports.getChapters = async (req, res) => {
    await knex('chapters').select('*')
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(400).json({message: 'Error Retrieving Chapter Data'})
    })
}

exports.getSections = async (req, res) => {
    
    await knex('sections').select('*').where({chapter_id: req.params.id})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(404).json({message: 'No section found with that id'})
    })
}