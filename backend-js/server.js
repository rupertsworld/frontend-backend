const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
// TODO: Do without cors options?
const corsOptions = { origin: 'http://localhost:1234' }
const app = express();

app.use(bodyParser.json())

app.options('*', cors(corsOptions))
app.post('/hello', cors(corsOptions), function (req, res) {
  res.json({ message: 'Hello, ' + req.body.name });
});

app.listen(port, () => console.log('Server listening on port', port));