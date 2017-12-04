import express from 'express';
import pdp from '../../controllers/wcs/pdpCtlr';

let router = express.Router();
router.get('/getProductDetails', function(req, res){
    pdp.getProductDetails(req,res);
});

export default router;