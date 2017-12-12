import express from 'express';
let router = express.Router();
import address from '../../controllers/elasticPath/addressCtlr';
import constants from '../../constants/elasticPath/constants';

/**
 *  Add an address to a Checkout
 */
router.post('/addShippingAddress', function(req, res) {
	address.addShippingAddress(req,res);
});


/**
*	Gets the shipping address associated with an order
*/
router.get('/getShippingAddresses', function(req, res) {
	address.getShippingAddresses(req,res);
});

/***
*	Deletes a shipping address
*/
router.delete('/deleteShippingAddress',function(req,res){
	address.deleteShippingAddress(req,res);
});

/**
*	Updtes a shipping address
*/
router.put('/updateShippingAddress', function(req, res) {
	address.updateShippingAddress(req,res);
});

/**
*	Selects a shipping address for an order
*/
router.post('/selectShippingAddress',function(req,res){
	address.selectShippingAddress(req,res);
});

/**
*	Gets the billing address associated with an order
*/
router.get('/getBillingAddresses',function(req,res){
	address.getBillingAddresses(req,res);
});

/**
*	Selects a billing address for an order
*/
router.post('/selectBillingAddress',function(req,res){
	address.selectBillingAddress(req,res);
});

export default router;
