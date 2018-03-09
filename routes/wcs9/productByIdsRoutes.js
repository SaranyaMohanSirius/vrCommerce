import express from 'express';
import productByIds from '../../controllers/wcs9/productByIdsCtlr';

let router = express.Router();

/* 
 * Router for getting products details for given productIds
 */

router.get('/getProductDetailsByIds', function(req, res){
    productByIds.getProductDetailsByIds(req,res);
});


router.get('/getProductDetailBySingleId', function(req, res){
    productByIds.getProductDetailBySingleId(req,res);
})

export default router;
