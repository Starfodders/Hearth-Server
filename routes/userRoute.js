const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const userController = require('../controllers/userController')

router.route('/signup').post(userController.signup)
router.route('/login').post(userController.login)

router.route('/checkNew/:userID').get(userController.checkNew)
router.route('/patchNew/:userID').patch(userController.patchNew)

router.route('/progress/:userID').get(userController.getProgress)


router.route('/update/:userID/:unitID').patch(userController.update)

module.exports = router