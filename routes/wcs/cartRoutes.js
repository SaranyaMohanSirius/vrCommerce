import express from 'express';
let router = express.Router();
import cart from '../../controllers/wcs/cartCtlr';

/* router for addToCart */
router.post('/addToCart', function(req, res){
    cart.addToCart(req,res);
});

/* router for shoppingCart */
router.get('/shoppingCart',function(req,res){
	cart.shoppingCart(req,res);
});

/* router for update cart item*/
router.put('/updateShoppingCartItem',function(req,res){
	cart.updateShoppingCartItem(req,res);
});

/* router for delete cart item */
router.delete('/deleteShoppingCartItem',function(req,res){
	cart.deleteShoppingCartItem(req,res);
});

/* router for delete all cart items*/
router.delete('/deleteAllShoppingCartItem',function(req,res){
	cart.deleteAllShoppingCartItem(req,res);
});

export default router;