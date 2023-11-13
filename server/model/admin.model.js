const mongoose = require("mongoose");


const AdminModel = new mongoose.model('AdminModel', new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true
    },
    isAdmin: {
        type: Boolean
    }
}));


module.exports = AdminModel;