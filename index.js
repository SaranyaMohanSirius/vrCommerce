var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('./modules/constants');
var util = require('./modules/util');
var commerce = require('./modules/commerce');
var lang_cache = require('./modules/cache');
var database = require('./modules/databaseUtil');
var cron = require('node-cron');

var app = express();

app.use(express.static('WebContent'));
app.set('port', (process.env.PORT || 5000));
// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Process application/json
app.use(bodyParser.json());

// Index route
app.get('/', function(req, res) {
	commerce.guestLogin(res);
});

app.get('/getTopCategories', function(req, res) {
	commerce.getTopCategories(constants.EP_ACCESS_TOKEN,res);
});


// Spin up the server
app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})


