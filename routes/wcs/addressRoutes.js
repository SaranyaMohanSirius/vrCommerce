
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/wcs/constants');
var address = require('../../controllers/wcs/addressCtlr');
var cron = require('node-cron');
var router = express.Router();


router.get('/getShippingAddresses', function(req, res){
    address.getShippingAddresses(res,req);
});

module.exports = router;