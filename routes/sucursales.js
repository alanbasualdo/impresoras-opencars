const { Router } = require('express')
const { sucPost, sucGet } = require('../controllers/sucursales')

const router = Router()

router.get('/', sucGet)

router.post('/', sucPost)

module.exports = router