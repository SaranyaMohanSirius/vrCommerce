
import express from 'express';
let router = express.Router();
import search from '../../controllers/elasticPath/searchCtlr';
import constants from '../../constants/elasticPath/constants';

/**
 * get Search Results
 */
router.get('/getSearchResults', function(req, res){
    search.getSearchResults(constants.EP_ACCESS_TOKEN,res,req);
});

export default router;





