const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const userController = require('../seed_data/controllers/userController')

router.route('/').get((_req, res) => {
    res.send('Here')
})

router.route('/signup').post(userController.signup)
router.route('/login').post(userController.login)

module.exports = router