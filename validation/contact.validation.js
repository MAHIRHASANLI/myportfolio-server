const Joi = require('joi');

const ContactSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    phone: Joi.string().min(5).max(100).required(),
    facebook: Joi.string().uri().required(),
    linkedn: Joi.string().uri().required(),
    github: Joi.string().uri().required(),
    instagram: Joi.string().uri().required(),
    mydata: Joi.string().optional().required()
});


module.exports = ContactSchema;