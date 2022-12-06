const { Router } = require('express')
const { maPost } = require('../controllers/marcas')

const router = Router()

router.get('/', (req, res) => {
    res.json({
        msg: 'Marcas'
    })
})

router.post('/', maPost)

module.exports = router