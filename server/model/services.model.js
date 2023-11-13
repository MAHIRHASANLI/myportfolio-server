const mongoose = require('mongoose');

const ServicesModel = new mongoose.model('Services', new mongoose.Schema({
    services: {
        type: String,
        trim: true,
        required: true
    },
    icons: {
        type: String,
        trim: true,
        required: true
    }
}));

module.exports = ServicesModel;