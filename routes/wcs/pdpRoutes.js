
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/wcs/constants');
var pdp = require('../../controllers/wcs/pdpCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();


router.get('/getProductDetails', function(req, res){
    pdp.getProductDetails(res,req.query.uri);
});

module.exports = router;