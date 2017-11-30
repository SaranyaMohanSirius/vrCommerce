import constants from '../../constants/elasticPath/constants';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
import searchMapper from '../../json_mappers/elasticPath/searchMapper';
import requestPromise from 'request-promise';
let logger=getLogger();


module.exports = {

  /*Controller for getting the Search results for a given keyword in EP*/
  getSearchResults: function(token,res,req){

	let keyword = req.query.keyword;
	let pageSize = req.query.pageSize;
	
    let messageData = {
        "keywords": keyword,
        "page-size": pageSize      
    };
    let keywordSearchURL =constructUrl(constants.EP_HOSTNAME, constants.EP_SEARCH, false)
    logger.info('getSearchResults post form url', keywordSearchURL);
    let method ='POST';
    let requestCall = constructRequest(keywordSearchURL,method,messageData,token)
    logger.info("requestCAll " + requestCall);
    requestPromise(requestCall).then(function (data) {
         let uri = data.self.uri;
         let concatURL = uri + constants.EP_SEARCH_ZOOM;
         let searchUrl = constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
         let messageData = {};
         logger.info("getSearchResults resource url:" + searchUrl);
         let secondRequestCall = constructRequest(searchUrl,"GET",messageData,token)
         return requestPromise(secondRequestCall).then(function (data) {
          let result = searchMapper.mapSearchResultJSON(data);
            res.send({
                      "success":  true ,
                      "result": result,                                            
                  });   
            }).catch(function (error) {
                if(error.response.body){
                  logger.error('errors in service to getSearchResults in EP: ', error.response.body);
                  res.send({ "success": false, "error": error.response.body }); 
                }else{
                  logger.error('errors in service to getSearchResults in EP: ', error);
                  res.send({ "success": false, "error": error});
                }
            });
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to getSearchResults in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to getSearchResults in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });
  }
};
