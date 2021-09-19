const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    canalDeVendas: {
        type: String,
        required: true
    },
    pipeline: {
        type: String,
        enum: [`Conexão`, `Qualificado`,`Apresentação`, `Negociando`, `Fechamento`],
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('user', userSchema)