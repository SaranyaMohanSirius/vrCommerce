import express from 'express';
import category from '../../controllers/wcs/categoryCtlr';

let router = express.Router();

/*
 * router for getTopCategories
 */

router.get('/getTopCategories', function(req, res){
	
    category.getTopCategories(res);
});

/*
 * router for getSubCategories
 */

router.get('/getSubCategories', function(req, res){
	
    category.getSubCategories(res,req);
});

/*
 * router for getProductsListForCategory
 */

router.get('/getProductsListForCategory', function(req, res) {
	category.getProductsListForCategory(req,res,req.query.identifier);
});

export default router;

