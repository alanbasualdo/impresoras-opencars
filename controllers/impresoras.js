const { response } = require('express')
const Impresora = require('../models/Impresora')

const impPost = async (req, res = response) => {

    const { marca, modelo, sucursal, ciudad, seccion, ip } = req.body

    const existe = await Impresora.findOne({ marca, modelo, sucursal, ciudad, seccion, ip })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const impresora = new Impresora({
        marca, modelo, sucursal, ciudad, seccion, ip
    })

    // Guardar en base de datos
    await impresora.save()

    res.json({
        msg: 'ok',
        impresora
    })

}

const impGet = async (req, res = response) => {

    const query = { estado: true }

    const [total, impresoras] = await Promise.all([
        Impresora.countDocuments(query),
        Impresora.find(query)
    ])

    res.json({
        total,
        impresoras
    })
}

module.exports = {
    impPost,
    impGet
}