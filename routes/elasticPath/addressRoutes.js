import express from 'express';
let router = express.Router();
import address from '../../controllers/elasticPath/addressCtlr';
import constants from '../../constants/elasticPath/constants';

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

/**
*	Gets the billing address associated with an order
*/
router.get('/getBillingAddresses',function(req,res){
	address.getBillingAddresses(constants.EP_ACCESS_TOKEN,req,res);
});

/**
*	Selects a billing address for an order
*/
router.post('/selectBillingAddress',function(req,res){
	address.selectBillingAddress(constants.EP_ACCESS_TOKEN,req,res);
});

export default router;
