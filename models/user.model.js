const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Email: String,
    Prenom: String,
    Nom: String,
    Age: String
}, {timestamps: true})//trace fel bd ayyy modification y7ot wa9teh date




module.exports = mongoose.model('users', UserSchema)
