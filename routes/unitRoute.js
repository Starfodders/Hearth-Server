const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const unitController = require('../controllers/unitController')

router.route('/:id').get(unitController.getUnit)
router.route('/:unitID/:pageNum').get(unitController.getTranscript)

module.exports = router