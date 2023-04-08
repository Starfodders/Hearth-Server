const express = require('express')
const router = express.Router()
const knex = require('knex')(require('../knexfile'));
const unitController = require('../controllers/unitController')

router.route('/:id').get(unitController.getUnit)
router.route('/transcript/:id/:pageNum').get(unitController.getTranscript)
router.route('/finish/:id').get(unitController.getCloser)

router.route('/:userID/:pageID').post(unitController.savePage)
router.route('/:userID/:pageID').delete(unitController.delSavedPage)


module.exports = router