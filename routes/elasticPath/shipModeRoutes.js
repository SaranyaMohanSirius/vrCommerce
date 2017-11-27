
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var shipMode = require('../../controllers/elasticPath/shipModeCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();


router.get('/getShippingMethods', function(req, res){
    shipMode.getShippingMethods(constants.EP_ACCESS_TOKEN,res,req);
});

module.exports = router;





