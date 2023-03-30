const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const userController = require('../controllers/userController')

router.route('/').get((req, res) => {
    res.send('Here')
})

router.route('/signup').post(userController.signup)

module.exports = router