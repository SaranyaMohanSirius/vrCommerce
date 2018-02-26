import express from 'express';
import pdp from '../../controllers/wcs9/pdpCtlr';

let router = express.Router();

/* 
 * Router for getProductDetails
 */

router.get('/getProductDetails', function(req, res){
    pdp.getProductDetails(req,res);
});

/**
 * Router for getting recently viewed products
 */
router.get('/getRecentlyViewedProducts', function(req, res){
    pdp.getRecentlyViewedProducts(req,res);
})

export default router;