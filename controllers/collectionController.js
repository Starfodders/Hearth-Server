const knex = require("knex")(require("../knexfile"));

exports.getSaved = async (req, res) => {
    await knex('saved')
    .where({user_id: req.params.id})
    .select('user_id as user_id', 'pages.*')            //select specifics from each table
    .join('users', 'saved.user_id', '=', 'users.id')        //join criteria based on user id
    .join('pages', 'saved.pages_id', '=', 'pages.id')          //join criteria based on page id
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err + ' Error retrieving user collections');
    })
}