const mongoose = require('mongoose');

const Schema = mongoose.Schema
const cadastroSchema = new Schema ({
    _id : {type: mongoose.Schema.Types.ObjectId, auto: true},
    nome : {type: String, required: true},
    email : {type: String , required: true}, 
    senha : {type: String, required: true},
    confirmarSenha : {type: String, required: true}
}) 
const cadastroModel = mongoose.model('cadastro', cadastroSchema);
module.exports = cadastroModel;
