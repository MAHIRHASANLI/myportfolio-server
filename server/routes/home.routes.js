const express = require('express');
const HomeController = require('../controller/home.controller');
const HomeMiddlewares = require('../middlewares/home.middleware');
const home_router = express.Router();

home_router.get('/', HomeController.GetAll);

home_router.post('/', HomeMiddlewares, HomeController.Post);

home_router.put('/:id', HomeMiddlewares, HomeController.Put);

module.exports = home_router;