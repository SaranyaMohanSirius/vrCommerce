import express from 'express';
let router = express.Router();
import category from '../../controllers/elasticPath/categoryCtlr';
import constants from '../../constants/elasticPath/constants';

/*App needs to pass EP access token*/
router.get('/getTopCategories', function(req, res) {
	category.getTopCategories(constants.EP_ACCESS_TOKEN,res);
});

/*App needs to pass EP access token & category Identifier*/
router.get('/getSubCategories', function(req, res) {
	category.getSubCategories(constants.EP_ACCESS_TOKEN,res,req.query.identifier);
});

/*App needs to pass EP access token & category Identifier*/
router.get('/getProductsListForCategory', function(req, res) {
	category.getProductsListForCategory(constants.EP_ACCESS_TOKEN,res,req.query.identifier);
});

export default router;





