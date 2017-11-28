
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/elasticPath/constants');
var address = require('../../controllers/elasticPath/addressCtlr');
var cron = require('node-cron');
var router = express.Router();

/**
 *  Add an address to a Checkout
 */
router.post('/addShippingAddress', function(req, res) {
	address.addShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});


/**
*	Gets the shipping address associated with an order
*/
router.get('/getShippingAddresses', function(req, res) {
	address.getShippingAddresses(constants.EP_ACCESS_TOKEN,req,res);
});

/***
*	Deletes a shipping address
*/
router.delete('/deleteShippingAddress',function(req,res){
	address.deleteShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});

/**
*	Updtes a shipping address
*/
router.put('/updateShippingAddress', function(req, res) {
	address.updateShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});

/**
*	Selects a shipping address for an order
*/
router.post('/selectShippingAddress',function(req,res){
	address.selectShippingAddress(constants.EP_ACCESS_TOKEN,req,res);
});

module.exports = router;
