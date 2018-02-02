import express from 'express';
import layout from '../../controllers/wcs/layoutCtlr';

let router = express.Router();
/**
 * router for retrieving the layout specifications
 */
router.get('/layout', function(req, res){
    layout.getLayoutDetails(req,res);
});

/**
 * router for retrieving the Espots
 */
router.post('/espot', function(req, res){
    layout.getEspotDetails(req,res);
});

export default router;