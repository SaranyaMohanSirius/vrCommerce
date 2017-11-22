
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var cart = require('../../controllers/elasticPath/cartCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();

/*App needs to pass EP access token*/
router.post('/addToCart', function(req, res) {
	cart.addToCart(constants.EP_ACCESS_TOKEN,req,res);
});

module.exports = router;
