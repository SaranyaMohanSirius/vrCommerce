
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var category = require('../../controllers/elasticPath/categoryCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();

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



module.exports = router;





