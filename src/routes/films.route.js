const express = require('express')
const router = express.Router()
const { validateData } = require('../middleware/validateData.mid')
const { filmId } = require('../models/filmId.scheme')
const { listOne } = require('../controllers/films.controller')

router.get('/users/:id', validateData(filmId, 'params'), listOne)

module.exports = router