const app = require('express')();
const srv = require('http').createServer(app);
const bodyParser = require('body-parser');
const request = require('request');

const NEWS_API_KEY = process.env.NEWS_API_KEY || '_';
const apiRoot = 'https://newsapi.org/v2/';

require('now-logs')(NEWS_API_KEY);

app.get('/:endpoint', function (req, res, next) {
  const {
    query,
    params: { endpoint }
  } = req;

  const apiArgs = Object.keys(query).reduce(
    (acc, key) => `${acc}${key}=${query[key]}&`,
     ''
  );

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const getUrl = `${apiRoot}${endpoint}?${apiArgs}apiKey=${NEWS_API_KEY}`;

  request(getUrl, (error, apiResponse, body) => res.send(body));
});

srv.listen(3000, function () {
  console.log('Listening on 3000');
});
