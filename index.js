const app = require('express')();
const srv = require('http').createServer(app);
const bodyParser = require('body-parser');
const request = require('request');

const NEWS_API_KEY = process.env.NEWS_API_KEY || '_';
const apiRoot = 'https://newsapi.org/v2/top-headlines?';

require('now-logs')(NEWS_API_KEY);

app.post('/', function (req, res, next) {
  res.send('You POSTed to the micro-service!');
});

app.get('/', function (req, res, next) {
  const { query } = req;
  const apiArgs = Object.keys(query).reduce(
    (acc, key) => `${acc}${key}=${query[key]}&`,
     ''
  );

  res.setHeader('Content-Type', 'application/json');
  const getUrl = `${apiRoot}${apiArgs}apiKey=${NEWS_API_KEY}`;

  request(getUrl, (error, apiResponse, body) => res.send(body));
});

srv.listen(3000, function () {
  console.log('Listening on 3000');
});
