const express = require('express')
const router = express.Router()
const storiesController = require('../controllers/storiesController')

/* GET home page. */
router.get('/lang/:lang', storiesController.get)
router.get('/family/:family', storiesController.getLocales)
router.get('/:slug/:lang', storiesController.getOne)

module.exports = router
