
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var cart = require('../../controllers/elasticPath/cartCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();

/**
 *  Add a Product to a Cart
 */
router.post('/addToCart', function(req, res) {
	cart.addToCart(constants.EP_ACCESS_TOKEN,req,res);
});
/**
 * Get Shopping Cart Details.
 */
router.get('/shoppingCart', function(req, res) {
	cart.getShoppingCart(constants.EP_ACCESS_TOKEN,req,res);
});


module.exports = router;
