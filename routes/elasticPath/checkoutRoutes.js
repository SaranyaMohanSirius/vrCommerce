
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/elasticPath/constants');
var checkout = require('../../controllers/elasticPath/checkoutCtlr');
var cron = require('node-cron');
var router = express.Router();

/**
 *  Add an address to a Checkout
 */
router.post('/addShippingAddress', function(req, res) {
	checkout.addShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});


/**
*	Gets the shipping address associated with an order
*/
router.get('/getShippingAddresses', function(req, res) {
	checkout.getShippingAddresses(constants.EP_ACCESS_TOKEN,req,res);
});

/***
*	Deletes a shipping address
*/
router.delete('/deleteShippingAddress',function(req,res){
	checkout.deleteShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});

/**
*	Updtes a shipping address
*/
router.put('/updateShippingAddress', function(req, res) {
	checkout.updateShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});

module.exports = router;
