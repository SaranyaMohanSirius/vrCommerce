import express from 'express';
import search from '../../controllers/wcs/searchCtlr';

let router = express.Router();

/*
 *  Route for getSearchResults
 */

router.get('/getSearchResults', function(req, res){
    search.getSearchResults(req,res);
});

export default router;