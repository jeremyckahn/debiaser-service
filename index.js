const app = require('express')();
const srv = require('http').createServer(app);
const bodyParser = require('body-parser');

const { NEWS_API_KEY } = process.env;

require('now-logs')(NEWS_API_KEY);

app.post('/', function (req, res, next) {
  res.send('You POSTed to the micro-service!');
});

srv.listen(3000, function () {
  console.log('Listening on 3000');
});
