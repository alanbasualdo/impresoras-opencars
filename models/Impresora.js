const { Schema, model } = require('mongoose')

const Impresora = Schema({
    marca: {
        /* type: Schema.Types.ObjectId,
        ref: 'Marca', */
        type: String
    },
    modelo: {
        type: String
    },
    sucursal: {
        /* type: Schema.Types.ObjectId,
        ref: 'Sucursal', */
        type: String
    },
    ciudad: {
        /* type: Schema.Types.ObjectId,
        ref: 'Ciudad', */
        type: String
    },
    seccion: {
        type: String
    },
    ip: {
        type: String
    }
})

Impresora.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()
    return data
}

module.exports = model('Impresora', Impresora)