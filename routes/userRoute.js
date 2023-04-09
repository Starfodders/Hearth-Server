const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const userController = require('../controllers/userController')

router.route('/signup').post(userController.signup)
router.route('/login').post(userController.login)

router.route('/update/:userID/:unitID').patch(userController.update)

module.exports = router