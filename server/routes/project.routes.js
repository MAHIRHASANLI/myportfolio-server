const express = require('express');
const ProjectController = require('../controller/project.controller');
const ProjectMiddleware = require('../middlewares/project.middlewares');
const myproject_router = express.Router();

myproject_router.get('/', ProjectController.GetAll);

myproject_router.post('/', ProjectMiddleware, ProjectController.Post);

myproject_router.put('/:id', ProjectMiddleware, ProjectController.Put);

myproject_router.delete('/:id', ProjectController.Delet);

module.exports = myproject_router;