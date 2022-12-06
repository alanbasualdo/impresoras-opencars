const { Router } = require('express')
const { citiesPost, citiesGet, getCityById } = require('../controllers/ciudades')

const router = Router()

router.get('/', citiesGet)

router.get('/:id', getCityById)

router.post('/', citiesPost)

module.exports = router