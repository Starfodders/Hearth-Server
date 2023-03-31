const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const userController = require('../controllers/userController')

router.route('/signup').post(userController.signup)
router.route('/login').post(userController.login)

module.exports = router