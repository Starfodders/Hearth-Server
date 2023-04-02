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

