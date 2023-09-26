const Joi = require('joi');

const SkillsSchema = Joi.object().keys({
    name: Joi.string().min(3).max(60).required(),
    about: Joi.string().min(3).max(60).required(),
    category: Joi.string().min(3).max(60).required(),
    image: Joi.string().uri().required()
});

module.exports = SkillsSchema;