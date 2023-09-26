const express = require('express');
const AboutController = require('../controller/about.controller');
const AboutMiddlewares = require('../middlewares/about.middlewares');
const about_router = express.Router();

about_router.get('/', AboutController.GetAll);

about_router.put('/:id', AboutMiddlewares, AboutController.Put);

module.exports = about_router;