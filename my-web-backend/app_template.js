const express = require('express');
const myRouter = require('./routes/myRouter');
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from middleware');
  next();
});

//routes
app.use('/api/v1.0/myRout', myRouter);

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
