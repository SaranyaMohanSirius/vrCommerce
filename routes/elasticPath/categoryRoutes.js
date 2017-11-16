
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var constants = require('../../constants/elasticPath/constants');
var category = require('../../controllers/elasticPath/categoryCtlr');
var cron = require('node-cron');

var app=express();
var express = require('express');
var router = express.Router();


router.get('/getTopCategories', function(req, res) {
	category.getTopCategories(constants.EP_ACCESS_TOKEN,res);
});

router.get('/getSubCategories', function(req, res) {
	category.getSubCategories(constants.EP_ACCESS_TOKEN,res,"/navigations/britney/ijbecucqifjekta=");
});



module.exports = router;





