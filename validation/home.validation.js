const Joi = require('joi');

const HomeSchema = Joi.object({
    name: Joi.string().min(4).max(30).required(),
    surname: Joi.string().min(4).max(30).required(),
    profession: Joi.string().min(5).max(200).required(),
    image: Joi.string().uri().required()
});

module.exports = HomeSchema;
