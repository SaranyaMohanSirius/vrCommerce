import express from 'express';
import cart from '../../controllers/wcs/cartCtlr';

let router = express.Router();

/* 
 * router for addToCart 
 */

router.post('/addToCart', function(req, res){
    cart.addToCart(req,res);
});

/* 
 * router for shoppingCart 
 */

router.get('/shoppingCart',function(req,res){
	cart.shoppingCart(req,res);
});

/* 
 * router for update cart item
 */

router.put('/updateShoppingCartItem',function(req,res){
	cart.updateShoppingCartItem(req,res);
});

/* 
 * router for delete cart item 
 */

router.post('/deleteShoppingCartItem',function(req,res){
	cart.deleteShoppingCartItem(req,res);
});

/* 
 * router for delete all cart items
 */

router.delete('/deleteAllShoppingCartItem',function(req,res){
	cart.deleteAllShoppingCartItem(req,res);
});

/* 
 * router for submitting order
 */

router.post('/submitOrder',function(req,res){
	cart.submitOrder(req,res);
});

/* 
 * router for orderPaymentSummary 
 */

router.get('/orderPaymentSummary',function(req,res){
	cart.orderPaymentSummary(req,res);
});

/* 
 * router for orderReview	 
 */

router.post('/orderReview',function(req,res){
	cart.orderReview(req,res);
});

export default router;