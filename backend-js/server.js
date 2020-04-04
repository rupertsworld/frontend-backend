// Express just allows us to set up a server really quickly
// it's responsible for the app.post() function. Easy!
const express = require('express');

// This allows us to accept requests from our frontend
// which is on a different server.
const cors = require('cors');

// Extends Express and allows it to understand JSON
// that we will send from the frontend
const bodyParser = require('body-parser');

// Either use the default port, or 3000 if that's not set
const port = process.env.PORT || 3000;

// Our server will only accept requests from our frontend
// which (if running locally) has this URL:PORT
const corsOptions = { origin: 'http://localhost:1234' };

// Set up our app object & tell it to accept JSON
const app = express();
app.use(bodyParser.json());

// When the browser asks the server if it's okay to send
// a cross-origin request, this code says "yup"
app.options('*', cors(corsOptions));

// When the app receives a POST request (a request that's sending
// data), at the url '/hello' it will trigger this function
app.post('/hello', cors(corsOptions), function (request, response) {
  // Extract the name from the { name: 'your name' } obj that's sent
  const name = request.body.name;

  // Send a JSON response, that contains the message (you could call
  // this 'message' anything, so long as the frontend knows what
  // it's labelled as)
  response.json({ message: 'Hello, ' + name });
});

// Now we've specified the routes above, trigger the server to start
app.listen(port, () => console.log('Server listening on port', port));