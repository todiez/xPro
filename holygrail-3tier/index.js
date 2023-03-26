const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World with nodemon')
})

app.listen(port, () => console.log('listening on port ' + port));