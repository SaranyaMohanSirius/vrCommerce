import express from 'express';
import promotions from '../../controllers/wcs/promotionsCtlr';

let router = express.Router();

/*
 *  Route for Get promotions from cart
 */

router.get('/getPromotionsAtCart', function(req, res){
    promotions.getPromotionsAtCart(req,res);
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

router.delete('/delete', function(req, res){
    promotions.delete(req,res);
});

export default router;