const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const chapterController = require('../controllers/chapterController')

router.route('/:userID').get(chapterController.getChapters)

//CHANGE ROUTE 
router.route('/sections/:userID/:chapterID').get(chapterController.getSections)
router.route('/units/:userID/:sectionID/').get(chapterController.getUnits)


module.exports = router