const mongoose = require('mongoose');

const objSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: [true, 'project card must have title'],
        unique: true,
    }
});

const myModel = mongoose.model('myModel', objSchema);

module.exports = myModel;