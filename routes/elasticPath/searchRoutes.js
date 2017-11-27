
var express = require('express');
var bodyParser = require('body-parser');
var constants = require('../../constants/elasticPath/constants');
var search = require('../../controllers/elasticPath/searchCtlr');
var cron = require('node-cron');
var router = express.Router();


router.get('/getSearchResults', function(req, res){
    search.getSearchResults(constants.EP_ACCESS_TOKEN,res,req);
});

module.exports = router;





