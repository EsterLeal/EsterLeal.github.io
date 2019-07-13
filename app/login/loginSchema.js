const mongoose = require('mongoose');

const Schema = mongoose.Schema
const loginSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
})

const loginModel = mongoose.model('login', loginSchema);
module.exports = loginModel;
