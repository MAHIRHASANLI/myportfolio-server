const express = require('express');
const AdminController = require('../controller/admin.controller');
const admin_router = express.Router();

admin_router.get('/', AdminController.GetAll);

admin_router.post('/', AdminController.PostAdmin);

// admin_router.post('/', AdminController.Post);

module.exports=admin_router;