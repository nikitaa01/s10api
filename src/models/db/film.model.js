const { Schema, model} = require('mongoose')

const filmScheme = new Schema({
    titulo: String,
})
    
module.exports.filmModel = model('film', filmScheme)