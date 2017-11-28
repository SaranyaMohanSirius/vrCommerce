
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/wcs/constants');
var wcsShipModeCtrl = require('../../controllers/wcs/shipModeCtlr');
var cron = require('node-cron');
var router = express.Router();


router.get('/getShippingMethods', function(req, res){
    wcsShipModeCtrl.getShipModes(res,req);
});

router.get('/updateShippingMethods', function(req, res){
    wcsShipModeCtrl.updateShipModes(res,req);
});


module.exports = router;