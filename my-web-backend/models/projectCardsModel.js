const mongoose = require('mongoose');

const projectCardsSchema = new mongoose.Schema({
  index: {
    type: Number,
  },
  title: {
    type: String,
    required: [true, 'project card must have title'],
    unique: true,
  },
  thumbnail: {
    type: String,
    required: [true, 'project card must have thumbnail'],
  },
  description: {
    type: String,
    required: [true, 'project card must have description'],
  },
});

const ProjectCards = mongoose.model('ProjectCards', projectCardsSchema);

module.exports = ProjectCards;
