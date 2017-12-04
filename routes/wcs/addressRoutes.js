
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/wcs/constants');
var address = require('../../controllers/wcs/addressCtlr');
var cron = require('node-cron');
var router = express.Router();

/**
*	Gets all the addresses associated with the user
*/
router.get('/getShippingAddresses', function(req, res){
    address.getShippingAddresses(res,req);
});

/**
 *  Add an address to an user in WCS
 */
router.get('/addShippingAddress', function(req, res){
    address.addShippingAddress(res,req);
});

/**
*	Updtes an address in WCS
*/
router.get('/updateShippingAddress', function(req, res){
    address.updateShippingAddress(res,req);
});

/***
*	Deletes an address in WCS
*/
router.get('/deleteShippingAddress', function(req, res){
    address.deleteShippingAddress(res,req);
});

/**
*	Associates an address to the order
*/
router.get('/selectShippingAddress', function(req, res){
    address.selectShippingAddress(res,req);
});

module.exports = router;