
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var search = require('../../controllers/elasticPath/searchCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();


router.get('/getSearchResults', function(req, res){
    search.getSearchResults(constants.EP_ACCESS_TOKEN,res,"dress","20");
});

module.exports = router;





