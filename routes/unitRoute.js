const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const unitController = require('../controllers/unitController')

router.route('/:id').get(unitController.getUnit)
router.route('/:id/:pageNum').get(unitController.getTranscript)

//PROBLEM IS HERE, THE PATH IS CONFUSING WHATEVER I PASS INITIALLY AS UNITID AS THE FIRST ID PARAM

module.exports = router