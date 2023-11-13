const mongoose = require('mongoose');

const HomeModel = new mongoose.model("HomePortfolio", new mongoose.Schema({
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
    profession: {
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

module.exports = HomeModel;