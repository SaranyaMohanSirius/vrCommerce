import express from 'express';
let router = express.Router();
import pdp from '../../controllers/elasticPath/pdpCtlr';

/**
 * Get Product Details
 */
router.get('/getProductDetails', function(req, res){
    pdp.getProductDetails(res,req);
});

export default router;