const mongoose = require('mongoose');

const ProjectModel = new mongoose.model('Myproject', new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    webkitURL: {
        type: String,
        trim: true,
        required: true
    }
}));

module.exports = ProjectModel;