import express from 'express';
import seo from '../../controllers/wcs/seoCtlr';

let router = express.Router();
/**
 * router for retrieving the SEO keyword
 */
router.get('/seoKeyword', function(req, res){
    seo.getSEOKeyword(req,res);
});

export default router;