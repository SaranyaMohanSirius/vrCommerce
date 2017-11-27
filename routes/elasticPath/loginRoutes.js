
var express = require('express');
var bodyParser = require('body-parser');
var login = require('../../controllers/elasticPath/loginCtlr');
var cron = require('node-cron');
var router = express.Router();


router.get('/accessToken', function(req, res){
    // Template we can handle any request 
});
router.get('/', function(req, res){
     login.guestLogin(res);
});

module.exports = router;





