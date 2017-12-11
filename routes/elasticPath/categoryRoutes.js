import express from 'express';
let router = express.Router();
import category from '../../controllers/elasticPath/categoryCtlr';

/*App needs to pass EP access token*/
router.get('/getTopCategories', function(req, res) {
	category.getTopCategories(req,res);
});

/*App needs to pass EP access token & category Identifier*/
router.get('/getSubCategories', function(req, res) {
	category.getSubCategories(req,res);
});

/*App needs to pass EP access token & category Identifier*/
router.get('/getProductsListForCategory', function(req, res) {
	category.getProductsListForCategory(req,res);
});

export default router;





