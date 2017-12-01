import express from 'express';
import promotions from '../../controllers/wcs/promotionsCtlr';

let router = express.Router();
/**
 *  Get promotions from cart
 */
router.get('/getPromotionsAtCart', function(req, res){
    promotions.getPromotionsAtCart(req,res);
});
/**
 *  Apply promotion
 */
router.post('/apply', function(req, res){
    promotions.apply(req,res);
});
/**
 *  Delete promotion
 */
router.delete('/delete', function(req, res){
    promotions.delete(req,res);
});

export default router;