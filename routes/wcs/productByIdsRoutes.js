import express from 'express';
import productByIds from '../../controllers/wcs/productByIdsCtlr';

let router = express.Router();

/* 
 * Router for getting products details for given productIds
 */

router.get('/getProductDetailsByIds', function(req, res){
    productByIds.getProductDetailsByIds(res,req);
});

export default router;
