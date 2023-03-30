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
    const checkUser = await knex("users").where({ email: email });

    if (checkUser.length > 0) {
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
    console.log(err + 'hello');
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Please fill in all fields");
  }
};
