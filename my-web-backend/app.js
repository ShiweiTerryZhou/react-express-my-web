const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const projectCardsRouter = require('./routes/projectCardsRouter');
const blogCardsRouter = require('./routes/blogCardsRouter');
const app = express();

//configuration
dotenv.config({ path: './config.env' });
console.log(process.env.DATABASE);

//middleware
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log('Request received');
  //console.log(req);
  next();
});

//connect to DATABASE
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    userCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    //console.log(con.connections);
    console.log('DB connection successful!');
  });

//routes
app.use('/api/v1.0/projectcards', projectCardsRouter);
app.use('/api/v1.0/blogcards', blogCardsRouter);

//start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//REST API
//1, API seperated into logical resources
//2, resource-based URLS
//3, Use HTTP methods
//4, send data as JSON
//5, stateless
