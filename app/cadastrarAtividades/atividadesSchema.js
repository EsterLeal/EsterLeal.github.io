const mongoose = require('mongoose');

const Schema = mongoose.Schema
const atividadesSchema = new Schema ({
    _id : {type: mongoose.Schema.Types.ObjectId, auto: true},
    nome : {type: String, required: true},
    descricao : {type: String , required: true}, 
    imagem: {type: String}
}) 
const atividadesModel = mongoose.model('atividade', atividadesSchema);
module.exports = atividadesModel;