const { response } = require('express')
const Marca = require('../models/Marca')

const maPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Marca.findOne({ nombre })

    if (existe) {
        return res.status(400).json({
            msg: `${nombre} ya existe en la base de datos.`
        })
    }

    const marca = new Marca({ nombre })

    // Guardar en base de datos
    await marca.save()

    res.json({
        msg: 'Marca creada con éxito!',
        marca
    })

}

module.exports = {
    maPost
}