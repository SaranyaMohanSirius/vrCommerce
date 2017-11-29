import express from 'express';
//var express = require('express');
import bodyParser from 'body-parser';
//var bodyParser = require('body-parser');
var request = require('request');
var cron = require('node-cron');
var util = require('./util/elasticPath/util');
var logger= util.getLogger();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var app = express();

app.use(express.static('WebContent'));
app.set('port', (process.env.PORT || 5000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Process application/json
app.use(bodyParser.json());

/**
 * App includes all the Routes
 */
require('./routes/index')(app);

// Spin up the server
app.listen(app.get('port'), function() {
  logger.info('running on port', app.get('port'))
})


