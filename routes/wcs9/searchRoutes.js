import express from 'express';
import search from '../../controllers/wcs9/searchCtlr';

let router = express.Router();

/*
 *  Route for getSearchResults
 */

router.get('/getSearchResults', function(req, res){
    search.getSearchResults(req,res);
});


router.get('/keywordSuggestionsByTerm', function(req, res){
    search.keywordSuggestionsByTerm(req,res);
})
export default router;