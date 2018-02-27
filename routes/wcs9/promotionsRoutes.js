import express from 'express';
import promotions from '../../controllers/wcs9/promotionsCtlr';

let router = express.Router();



/*
 *  Route for Get promo codes from cart
 */

router.get('/getPromoCodePromotionsAtCart', function(req, res){
    promotions.getPromoCodePromotionsAtCart(req,res);
});

/*
 *  Route for Apply promotion
 */
 
router.post('/apply', function(req, res){
    promotions.apply(req,res);
});

/*
 *  Route for Delete promotion
 */

router.post('/delete', function(req, res){
    promotions.delete(req,res);
});

export default router;