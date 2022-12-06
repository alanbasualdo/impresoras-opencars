const { response } = require('express')
const Ciudad = require('../models/Ciudad')

const citiesPost = async (req, res = response) => {

    const { nombre, sucursales } = req.body

    const existe = await Ciudad.findOne({ nombre })

    if (existe) {
        return res.status(400).json({
            msg: `${nombre} ya existe en la base de datos.`
        })
    }

    const ciudad = new Ciudad({ nombre, sucursales })

    // Guardar en base de datos
    await ciudad.save()

    res.json({
        msg: 'Ciudad creada con éxito!',
        ciudad
    })

}

const citiesGet = async (req, res = response) => {

    const query = { estado: true }

    const [total, ciudades] = await Promise.all([
        Ciudad.countDocuments(query),
        Ciudad.find(query)
        .populate('sucursales', 'nombre')
    ])

    res.json({
        total,
        ciudades
    })
}

const getCityById = async (req, res = response) => {

    const { id } = req.params;
    const ciudad = await Ciudad.findById(id)

    res.json(ciudad);
}

module.exports = {
    citiesPost,
    citiesGet,
    getCityById
}