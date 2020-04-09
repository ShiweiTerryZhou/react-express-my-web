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
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
  link: {
    type: String,
    required: [true, 'project card must have github link'],
  }
});

const ProjectCards = mongoose.model('ProjectCards', projectCardsSchema);

module.exports = ProjectCards;
