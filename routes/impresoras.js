const { Router } = require('express')
const { impPost, impGet } = require('../controllers/impresoras')

const router = Router()

router.get('/', impGet)

router.post('/', impPost)

module.exports = router