const express = require('express');

const projectCardsController = require('../controller/projectCardsController');

const projectCardsRouter = express.Router();

projectCardsRouter
  .route('/')
  .get(projectCardsController.get_projectcards)
  .post(projectCardsController.post_projectcards);
projectCardsRouter
  .route('/:index')
  .get(projectCardsController.get_projectcards_index)
  .patch(projectCardsController.patch_projectcards_index);

module.exports = projectCardsRouter;
