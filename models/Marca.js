const { Schema, model } = require('mongoose')

const Marca = Schema({
    nombre: {
        type: String
    }
})

Marca.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()
    return data
}

module.exports = model('Marca', Marca)