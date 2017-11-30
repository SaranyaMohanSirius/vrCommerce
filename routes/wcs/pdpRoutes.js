
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/wcs/constants');
var pdp = require('../../controllers/wcs/pdpCtlr');
var cron = require('node-cron');
var router = express.Router();


router.get('/getProductDetails', function(req, res){
    pdp.getProductDetails(res,req.query.productId);
});

module.exports = router;