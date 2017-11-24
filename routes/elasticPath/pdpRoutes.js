
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var pdp = require('../../controllers/elasticPath/pdpCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();


router.get('/getProductDetails', function(req, res){
    pdp.getProductDetails(constants.EP_ACCESS_TOKEN,res,req.query.uri);
});

module.exports = router;