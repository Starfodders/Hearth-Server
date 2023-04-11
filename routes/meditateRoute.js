const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const meditateController = require('../controllers/meditateController')

router.route('/audio').get(meditateController.getAudio)


module.exports = router