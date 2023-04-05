const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const collectionController = require('../controllers/collectionController')

router.route('/').get(collectionController.getSaved)


module.exports = router