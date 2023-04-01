const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const chapterController = require('../controllers/chapterController')

router.route('/').get(chapterController.getChapters)
router.route('/:id').get(chapterController.getSections)

module.exports = router