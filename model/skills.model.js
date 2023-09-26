const mongoose = require('mongoose');

const SkillsModel = new mongoose.model("Skills", new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    about: {
        type: String,
        trim: true,
        required: true
    }, 
    category: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    }
}));

module.exports = SkillsModel;