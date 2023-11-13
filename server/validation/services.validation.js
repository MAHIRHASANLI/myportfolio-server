const Joi = require('joi');

const ServicesSchema = Joi.object().keys({
    services: Joi.string().min(3).max(30).required(),
    icons: Joi.string().min(3).max(30).required()
});

module.exports = ServicesSchema;