const mongoose = require('mongoose');

const ContactMeModel = new mongoose.model("Mycontact", new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    facebook: {
        type: String,
        trim: true,
        required: true
    },
    linkedn: {
        type: String,
        trim: true,
        required: true
    },
    github: {
        type: String,
        trim: true,
        required: true
    },
    instagram: {
        type: String,
        trim: true,
        required: true               
    },
    mydata: {
        type: String,
        trim: true,
        required: true               
    }
}));

module.exports = ContactMeModel;