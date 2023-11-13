const mongoose = require('mongoose');

const MyMessageModel = new mongoose.model('mymessage', new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    surname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    }
}));

module.exports = MyMessageModel;