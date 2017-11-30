import express from 'express';
let router = express.Router();
import shipMode from '../../controllers/elasticPath/shipModeCtlr';
import constants from '../../constants/elasticPath/constants';

/**
 * Get Shipping Method Routes
 */
router.get('/getShippingMethods', function(req, res){
    shipMode.getShippingMethods(constants.EP_ACCESS_TOKEN,res,req);
});
/**
 * update Shipping Method Routes
 */
router.get('/updateShippingMethod', function(req, res){
    shipMode.updateShippingMethods(constants.EP_ACCESS_TOKEN,res,req);
});

export default router;



