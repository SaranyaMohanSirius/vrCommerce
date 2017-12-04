var express = require('express');
var search = require('../../controllers/wcs/searchCtlr');
var router = express.Router();

router.get('/getSearchResults', function(req, res){
    search.getSearchResults(req,res);
});

module.exports = router;