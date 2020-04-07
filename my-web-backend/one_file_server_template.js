//import library
const express = require('express');

//instantiate express
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from middleware');
  next();
});

//controller functions
const get_projectcards = (req, res) => {};

const get_projectcards_index = (req, res) => {};

const patch_projectcards_index = (req, res) => {};

const post_projectcards = (req, res) => {};

//route
app
  .route('/api/v1.0/projectcards')
  .get(get_projectcards)
  .post(post_projectcards);
app
  .route('/api/v1.0/projectcards/:index')
  .get(get_projectcards_index)
  .patch(patch_projectcards_index);

//start server
const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//REST API
//1, API seperated into logical resources
//2, resource-based URLS
//3, Use HTTP methods
//4, send data as JSON
//5, stateless
