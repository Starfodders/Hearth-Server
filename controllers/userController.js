const knex = require("knex")(require("../knexfile"));

exports.signup = (req, res) => {
    const {given_name, email, password} = req.body

    if (!given_name.length || !email.length || !password.length) {
        return res.status(400).send('Please fill in all fields')
    }
    
    const newUser = {
        given_name,
        email,
        password
    }

    //inserts new user into DB, then returns the new user data to client for log in
    knex('users')
    .insert(newUser)
    .then((data) => {
        knex('users')
        .where({'users.id': data[0]})
        .then((data => {
            res.status(200).json(data)
        }))
    })
    .catch((error) => {
        res.status(500).send(error + 'Error while creating new user')
    })
}