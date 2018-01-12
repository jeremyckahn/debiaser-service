const app = require('express')();
const srv = require('http').createServer(app);
const bodyParser = require('body-parser');

app.post('/', function (req, res, next) {
  res.send('You POSTed to the micro-service!');
});

srv.listen(3000, function () {
  console.log('Listening on 3000');
});
