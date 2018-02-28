import express from'express';
import wcsShipModeCtrl from'../../controllers/wcs/shipModeCtlr';

let router = express.Router();

/* 
 * Router for getShippingMethods
 */

router.get('/getShippingMethods', function(req, res){
    wcsShipModeCtrl.getShipModes(res,req);
});

/* 
 * Router for updateShippingMethods
 */

router.put('/updateShippingMethods', function(req, res){
    wcsShipModeCtrl.updateShipModes(res,req);
});


export default router;