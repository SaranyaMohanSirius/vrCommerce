import express from 'express';
import marketing from '../../controllers/wcs/marketingCtlr';

let router = express.Router();
/**
 * router for getting eSpot Details by name
 */
router.get('/getEspotDetails', function(req, res){
	marketing.espotDetails(req,res);
});

export default router;