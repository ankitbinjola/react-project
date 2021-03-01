// server/index.js

const express = require("express");

//logs http request on the console for debugging
const morgan = require("morgan");

//sercuety by removing headers and adding headers in network
const helmet = require("helmet");

const cors = require("cors");

const middlewares = require("./middleware");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors( 
  {
    origin : 'http:localhost:3000'
  }));
//elsint-disable-next-line no-unused-vars
  app.get('/', (req, res) => {
    res.send({ 
      message : "hello app"
    });
  });
  app.get('/login', (req, res) => {
    res.send('http://localhost:3000');
  });

  //error handler middleware
  app.use(middlewares.notFound);

  //stack trace not for dev
//eslint-disable-next-line no-unused-vars
  app.use(middlewares.errorHandlers);



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});