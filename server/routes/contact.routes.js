const express = require('express');
const ContactmeController = require('../controller/contact.controller');
const ContactMiddlewares = require('../middlewares/contact.middlewares');
const contact_router = express.Router();

contact_router.get('/', ContactmeController.GetAll);

contact_router.post('/', ContactMiddlewares, ContactmeController.Post);

contact_router.put('/:id', ContactMiddlewares, ContactmeController.Put);

contact_router.delete('/:id', ContactmeController.Delet);

module.exports = contact_router;