var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var searchMapper = require('../../json_mappers/elasticPath/searchMapper');
var request = require('request');
var requestPromise = require('request-promise');


var logger= util.getLogger();

module.exports = {

  /*Controller for getting the Search results for a given keyword in EP*/
  getSearchResults: function(token,res,req){

	var keyword = req.query.keyword;
	var pageSize = req.query.pageSize;
	
    var messageData = {
        "keywords": keyword,
        "page-size": pageSize      
    };
    var keywordSearchURL =util.constructUrl(constants.EP_HOSTNAME, constants.EP_SEARCH, false)
    logger.info('getSearchResults post form url', keywordSearchURL);
    var method ='POST';
    var requestCall = util.constructRequest(keywordSearchURL,method,messageData,token)
    logger.info("requestCAll " + requestCall);
    requestPromise(requestCall).then(function (data) {
         var uri = data.self.uri;
         var concatURL = uri + constants.EP_SEARCH_ZOOM;
         var searchUrl = util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
         var messageData = {};
         logger.info("getSearchResults resource url:" + searchUrl);
         var secondRequestCall = util.constructRequest(searchUrl,"GET",messageData,token)
         return requestPromise(secondRequestCall).then(function (data) {
          var result = searchMapper.mapSearchResultJSON(data);
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
