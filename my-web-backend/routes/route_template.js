const express = require('express');
//import controller
const myController = require('../controller/myController');
//instantiate router
const Router = express.Router();
//define param middleware
Router.param('index', (req, res, next, val) => {
  //TODO
  next();
});
//define your routes
Router.route('/')
  .get(myController.get_function)
  .post(myController.post_function);
Router.route('/:index')
  .get(myController.get_index_function)
  .patch(myController.patch_index_function)
  .delete(myController.delete_index_function);
//export router
module.exports = Router;

//TO IMPORT IN APP
/*
const myRouter = require('routes/myRouter');
...
app.use('/API/somePath',myRouter)

*/
