const knex = require("knex")(require("../knexfile"));
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
    //first checks if email exists
    const getUserCreds = await knex('users').where({email: email});
    if (getUserCreds.length === 0) {
        return res.status(404).json({message: 'User not found'})
    }
    //now check found user's password against input
    const user = getUserCreds[0]
    if (password !== user.password) {
      return res.status(400).json({message: 'Incorrect password'})
    }
    //if all matches, get their given name send back token + name as a claim
    const getName = await knex('users').where({email: email})
    if (getName) {
      const givenName = getName[0].given_name
      const userId = getName[0].id
      let token = jwt.sign({name : givenName, id: userId}, 'secretKey')
      return res.status(200).json({token: token})

    } else {
      let token = jwt.sign({name: "Guest"}, 'secretKey')
      return res.status(200).json({token: token})

    }
  }
  catch(error) {
    console.log(error);
  }
};
