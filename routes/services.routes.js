const express = require('express');
const ServicesController = require('../controller/services.controller');
const ServicesMiddlewares = require('../middlewares/services.middlewares');
const services_router = express.Router();


services_router.get('/', ServicesController.GetAll);

services_router.post('/',  ServicesMiddlewares, ServicesController.Post);

services_router.put('/:id', ServicesMiddlewares, ServicesController.Put);

services_router.delete('/:id', ServicesController.Delet);

module.exports = services_router;