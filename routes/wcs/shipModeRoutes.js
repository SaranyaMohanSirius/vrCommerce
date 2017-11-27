
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/wcs/constants');
var wcsShipModeCtrl = require('../../controllers/wcs/shipModeCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();


router.get('/getShippingMethods', function(req, res){
    wcsShipModeCtrl.getShipModes(res,req);
});

module.exports = router;