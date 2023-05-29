const bcrypt = require("bcrypt");

// const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('12345', 10);

module.exports = [
    {
        id : 1,
        given_name: 'Michael', 
        email: 'michaeldeng55@gmail.com',
        password: hash,
        chapter: 2,
        newbie: false,
        section: 4,
        unit: 10,
        current_progress: 9
    }
]