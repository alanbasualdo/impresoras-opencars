const { Schema, model } = require('mongoose')

const Sucursal = Schema({
    nombre: {
        type: String
    }
})

Sucursal.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()
    return data
}

module.exports = model('Sucursal', Sucursal)