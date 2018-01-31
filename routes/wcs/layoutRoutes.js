import express from 'express';
import layout from '../../controllers/wcs/layoutCtlr';

let router = express.Router();
/**
 * router for retrieving the layout specifications
 */
router.get('/layout', function(req, res){
    layout.getLayoutDetails(req,res);
});

export default router;