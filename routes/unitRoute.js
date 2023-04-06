const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const unitController = require('../controllers/unitController')

router.route('/:id').get(unitController.getUnit)
router.route('/:id/:pageNum').get(unitController.getTranscript)

router.route('/:userID/:pageID').post(unitController.savePage)


module.exports = router