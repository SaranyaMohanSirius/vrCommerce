import express from 'express';
let router = express.Router();
import category from '../../controllers/wcs/categoryCtlr';


router.get('/getTopCategories', function(req, res){
	
    category.getTopCategories(res);
});
router.get('/getSubCategories', function(req, res){
	
    category.getSubCategories(res,req);
});
router.get('/getProductsListForCategory', function(req, res) {
	category.getProductsListForCategory(req,res,req.query.identifier);
});


export default router;

