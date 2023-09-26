const express = require('express');
const MessageController = require('../controller/message.controller');
const MessageMiddleware = require('../middlewares/message.midleware');
const message_router = express.Router();

message_router.get('/', MessageController.GetAll);

message_router.post('/', MessageMiddleware, MessageController.Post);

message_router.put('/:id', MessageMiddleware, MessageController.Put);

message_router.delete('/:id',  MessageController.Delet);

module.exports = message_router;