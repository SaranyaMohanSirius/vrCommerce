
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/elasticPath/constants');
var cart = require('../../controllers/elasticPath/cartCtlr');
var cron = require('node-cron');
var router = express.Router();

/**
 *  Add a Product to a Cart
 */
router.post('/addToCart', function(req, res) {
	cart.addToCart(req,res);
});
/**
 * Get Shopping Cart Details.
 */
router.get('/shoppingCart', function(req, res) {
	cart.getShoppingCart(req,res);
});
/**
 * Update Item Shopping Cart .
 */
router.put('/updateShoppingCartItem', function(req, res) {
	cart.updateShoppingCartItem(req,res);
});

/**
 * Delete Item from  Shopping Cart .
 */
router.delete('/deleteShoppingCartItem', function(req, res) {
	cart.deleteShoppingCartItem(req,res);
});

/**
 * DeleteAll Item from  Shopping Cart .
 */
router.delete('/deleteAllShoppingCartItem', function(req, res) {
	cart.deleteAllShoppingCartItem(req,res);
});


module.exports = router;
