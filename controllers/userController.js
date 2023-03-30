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

    knex('users')
    .insert(newUser)
    .then((data) => {
        console.log(data);
        res.status(200)
    })
    .catch((error) => {
        console.log(error);
    })
}