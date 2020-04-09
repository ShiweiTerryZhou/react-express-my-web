const express = require('express');
//import controller
const blogCardsController = require('../controller/blogCardsController');
//instantiate router
const Router = express.Router();
//define param middleware
Router.param('index', (req, res, next, val) => {
    //TODO
    next();
});
//define your routes
Router.route('/')
    .get(blogCardsController.get_function)
    .post(blogCardsController.post_function);
Router.route('/:index')
    .get(blogCardsController.get_index_function)
    .patch(blogCardsController.patch_index_function)
    .delete(blogCardsController.delete_index_function);
//export router
module.exports = Router;