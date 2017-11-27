var express = require('express');
var category = require('../../controllers/wcs/categoryCtlr');

var router = express.Router();




router.get('/getTopCategories', function(req, res){
	
    category.getTopCategories(res);
});
router.get('/getSubCategories', function(req, res){
	
    category.getSubCategories(res,req);
});
router.get('/getProductsListForCategory', function(req, res) {
	category.getProductsListForCategory(req,res,req.query.identifier);
});


module.exports = router;

