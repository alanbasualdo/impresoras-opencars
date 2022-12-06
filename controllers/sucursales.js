const { response } = require('express')
const Sucursal = require('../models/Sucursal')

const sucPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Sucursal.findOne({ nombre })

    if (existe) {
        return res.status(400).json({
            msg: `${nombre} ya existe en la base de datos.`
        })
    }

    const sucursal = new Sucursal({ nombre })

    // Guardar en base de datos
    await sucursal.save()

    res.json({
        msg: 'Sucursal creada con éxito!',
        sucursal
    })

}

const sucGet = async (req, res = response) => {

    const query = { estado: true }

    const [total, sucursales] = await Promise.all([
        Sucursal.countDocuments(query),
        Sucursal.find(query)
    ])

    res.json({
        total,
        sucursales
    })
}

module.exports = {
    sucPost,
    sucGet
}