var express = require('express');
var category = require('../../controllers/wcs/categoryCtrl');

var router = express.Router();

var app=express();


router.get('/getTopCategories', function(req, res){
	
    category.getTopCategories(res);
});
router.get('/getSubCategories', function(req, res){
	
    category.getSubCategories(res,req);
});


module.exports = router;