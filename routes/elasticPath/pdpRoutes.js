
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/elasticPath/constants');
var pdp = require('../../controllers/elasticPath/pdpCtlr');
var cron = require('node-cron');
var router = express.Router();


router.get('/getProductDetails', function(req, res){
    pdp.getProductDetails(constants.EP_ACCESS_TOKEN,res,req.query.productId);
});

module.exports = router;