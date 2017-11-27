
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var checkout = require('../../controllers/elasticPath/checkoutCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();

/**
 *  Add an address to a Checkout
 */
router.post('/addShippingAddress', function(req, res) {
	checkout.addShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});

module.exports = router;
