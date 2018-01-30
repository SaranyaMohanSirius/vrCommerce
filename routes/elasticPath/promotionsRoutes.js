import express from 'express';
import promotions from '../../controllers/elasticPath/promotionsCtlr';
import constants from '../../constants/elasticPath/constants';

let router = express.Router();


/*
 *  Route for Apply promotion
 */
 
router.post('/apply', function(req, res){
    promotions.apply(req,res);
});

/*
*	Route to get promotion details at cart
*/

router.get('/getPromotionsAtCart',function(req,res){
	promotions.getPromotionsAtCart(req,res);
});

/**
*	Route to get all promotion applied to the cart
*/
// router.get('/getPromotionsAtCart',function(req,res){
// 	promotions.getPromotionsAtCart(constants.EP_ACCESS_TOKEN,req,res);
// });


/**
*	Route to get coupon promotion applied to the cart
*/
router.get('/getPromoCodePromotionsAtCart',function(req,res){
	promotions.getPromoCodePromotionsAtCart(req,res);
});

/**
*	Route to delete promo code
*/
router.delete('/delete',function(req,res){
	promotions.delete(req,res);
})

export default router;