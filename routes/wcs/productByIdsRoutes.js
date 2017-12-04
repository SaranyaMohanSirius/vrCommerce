import express from 'express';
let router = express.Router();
import productByIds from '../../controllers/wcs/productByIdsCtlr';

/* router for getting products details for given productIds*/

router.get('/getProductDetailsByIds', function(req, res){
    productByIds.getProductDetailsByIds(res,req);
});

export default router;
