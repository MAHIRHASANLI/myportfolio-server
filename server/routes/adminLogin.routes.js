const express = require('express');
const AdminLogin = require('../controller/adminLogin');
const adminLogin_router = express.Router()


adminLogin_router.post('/',AdminLogin.Post);

module.exports = adminLogin_router;