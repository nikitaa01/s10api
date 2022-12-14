const Joi = require('joi')
Joi.objectid = require('joi-objectid')(Joi)

module.exports.filmId = Joi.object({
    id: Joi.objectid().required(),
})