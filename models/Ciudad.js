const { Schema, model } = require('mongoose')

const Ciudad = Schema({
    nombre: {
        type: String,
        required: true
    },
    sucursales: [{
        type: Schema.Types.ObjectId,
        ref: 'Sucursal',
        required: true
    }]
})

Ciudad.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()
    return data
}

module.exports = model('Ciudad', Ciudad)