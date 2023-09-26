const mongoose = require('mongoose');

const AboutModel = new mongoose.model("About", new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    profession: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
}));

module.exports = AboutModel;