import express from 'express';
let router = express.Router();
import cart from '../../controllers/wcs/cartCtlr';

/* router for addToCart */
router.post('/addToCart', function(req, res){
    cart.addToCart(req,res);
});

export default router;