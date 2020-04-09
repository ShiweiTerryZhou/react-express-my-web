const mongoose = require('mongoose');

const blogCardsSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: false,
        unique: true,
    },
    thumbnail: {
        type: String,
        required: [true, "blog must have thumbnail"],
        unique: false,
    }
    ,
    title: {
        type: String,
        required: [true, "blog must have title"],
        unique: false,
    },
    description: {
        type: String,
        required: [true, "blog must have description"],
        unique: false,
    },
    date: {
        type: String,
        required: false,
        unique: false,
    },
    categories: {
        type: String,
        required: false,
        unique: false,
    },
    link: {
        type: String,
        required: true,
        unique: false,
    }
});

const blogCards = mongoose.model('blogCards', blogCardsSchema);

module.exports = blogCards;