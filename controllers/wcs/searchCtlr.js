import {getLogger,constructUrl,constructRequestWithoutToken,isJson} from '../../util/wcs/util';
import constants from '../../constants/wcs/constants';
import searchMapper from '../../json_mappers/wcs/searchMapper';
import requestPromise from 'request-promise';

let logger= getLogger();

export default {

   /*
    * Method for getting product results based on keyword  
    * Request Method: GET
    * Request Params: keyword, pageSize, currentPage
    */

    getSearchResults: function(req,res){
        let keyword = req.query.keyword;
        let pageSize = req.query.pageSize;
        let currentPage = req.query.currentPage;     
        let messageData = {
            "pageSize": pageSize,
            "currentPage": currentPage      
        };
        let path = constants.WCS_PRODUCT_DETAILS+constants.WCS_STORE_ID+constants.WCS_PRODUCT_SEARCH_BY_KEYWORD+keyword+"?pageSize="+pageSize+"&pageNumber="+currentPage;
        if(req.query.orderBy){
                let orderBy = req.query.orderBy;
                path = path + "&orderBy=" + orderBy; 
        }
        if(req.query.categoryId){
                let categoryId= req.query.categoryId;
                path = path + "&categoryId=" + categoryId;
        }
        if(req.query.facet){
                let facet = req.query.facet;
                logger.info("Multiple facets" + Array.isArray(facet));          
                if(Array.isArray(facet)){
                  
                        var facetIterator = facet[Symbol.iterator]();
                        for (let facetvalue of facetIterator) {
                           path = path + "&facet=" + facetvalue; 
                        }
                }
                else
                    path = path + "&facet=" + facet; 
        }
        let searchURL = constructUrl(constants.WCS_HOSTNAME, path, false);
        logger.info("search url = "+searchURL);
        let requestCall = constructRequestWithoutToken(searchURL,'GET','')
        requestPromise(requestCall).then(function (body) {
            if(isJson(body)) body = JSON.parse(body);
            let result = searchMapper.mapSearchResultJSON(body,messageData);  
            res.send({
                "success": true,
                "result": result
            });
            }).catch(function (error) {
                if(error.statusCode === 404){
                    logger.error('errors in service to getSearchResults in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body });
                }else{
                    logger.error('errors in service to getSearchResults in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body.errors[0] }); 
                }
        });
    },


    keywordSuggestionsByTerm: function(req,res){
  	   
    
        let term = req.query.term;
        let concatURL = constants.WCS_PRODUCT_DETAILS+ constants.WCS_STORE_ID + constants.WCS_KEYWORD_SUGGESTION+term;
        let keywordSuggestionsByTermUrl = constructUrl(constants.WCS_HOSTNAME,concatURL,false);
        logger.info("keywordSuggestionsByTermUrl: "+keywordSuggestionsByTermUrl);
        let method ='GET';
        let messageData = {};
        let requestCall = constructRequestWithoutToken(keywordSuggestionsByTermUrl,method,messageData);
        requestPromise(requestCall).then(function (messageData) {
            res.send({
                "success": true ,
                "result": messageData                                         
            });  
              }).catch(function (error) {
              if(error.statusCode === 404){
                  logger.error('404 error in service to keywordSuggestionsByTerm in WCS: ', error);
                  res.send({ "success": false, "error": error});
              }else{
                  logger.error('errors in service to keywordSuggestionsByTerm in WCS: ', error);
                  res.send({ "success": false, "error": error}); 
              }
          });
              
          }
}
