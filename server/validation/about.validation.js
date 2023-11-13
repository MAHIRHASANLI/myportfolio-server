const Joi = require('joi');

const AboutSchema = Joi.object().keys({
    name: Joi.string().min(5).max(30).required(),
    profession: Joi.string().min(5).max(400).required(),
    image: Joi.string().required()
}); 

module.exports = AboutSchema;