const knex = require("knex")(require("../knexfile"));

exports.getSaved = async (req, res) => {
    res.send('ok')
}