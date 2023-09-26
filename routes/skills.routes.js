const express = require('express');
const SkillsMiddlewares = require('../middlewares/skills.middlewares');
const SkillsController = require('../controller/skills.controller');
const skills_router = express.Router();

skills_router.get('/', SkillsController.GetAll);

skills_router.post('/', SkillsMiddlewares, SkillsController.Post);

skills_router.delete('/:id', SkillsController.Delet);


module.exports = skills_router;