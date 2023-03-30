const knex = require("knex")(require("../../knexfile"));
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { given_name, email, password } = req.body;

  if (!given_name.length || !email.length || !password.length) {
    return res
      .status(400)
      .json({ message: "Missing information from input fields" });
  }

  const newUser = {
    given_name,
    email,
    password,
  };

  try {
    const checkUserExist = await knex("users").where({ email: email });

    if (checkUserExist.length > 0) {
      res.status(404).json({ message: `User Already Exists At ${email}` });
    } else {
      knex("users")
        .insert(newUser)
        .then((data) => {
          knex("users")
            .where({ "users.id": data[0] })
            .then((data) => {
              res.status(201).json(data);
            });
        })
        .catch((error) => {
          res.status(500).send(error + "Error while creating new user");
        });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({message: "Missing data from input fields"});
  }

  try {
    const getUserCreds = await knex('users').where({email: email});
    if (getUserCreds.length === 0) {
        return res.status(404).json({message: 'User not found'})
    }
    const user = getUserCreds[0]
    return res.status(200).json(user)
  }
  catch(error) {
    console.log(error);
  }
};
