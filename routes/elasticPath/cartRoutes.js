

import express from 'express';
let router = express.Router();
import cart from '../../controllers/elasticPath/cartCtlr';

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

/**
 * Order Review
 */
router.post('/orderReview', function(req, res) {
	cart.orderReview(req,res);
});

/* 
 * router for submitting order
 */

router.post('/submitOrder',function(req,res){
	cart.submitOrder(req,res);
});

export default router;