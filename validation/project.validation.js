const Joi = require('joi');

const ProjectSchema = Joi.object().keys({
    name: Joi.string().min(5).max(40).required(),
    title: Joi.string().min(5).max(50).required(),
    image: Joi.string().uri().required(),
    webkitURL: Joi.string().uri().required()
}); 

module.exports = ProjectSchema;