var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var searchMapper = require('../../json_mappers/elasticPath/searchMapper');
var request = require('request');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

var logger= util.getLogger();

module.exports = {

  /*Controller for getting the Search results for a given keyword in EP*/
   getSearchResults: function(token,res,req){

	var keyword = req.query.keyword;
	var pageSize = req.query.pageSize;
	
    messageData = {
        "keywords": keyword,
        "page-size": pageSize      
    };

	logger.info('getSearchResults post form url', util.constructUrl(constants.EP_HOSTNAME, constants.EP_SEARCH, false));
  
    request({
      url: util.constructUrl(constants.EP_HOSTNAME, constants.EP_SEARCH, false),
      method: 'POST',
      json: messageData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      },
    }, function(error, response, body) {
          if (!error) {
            if (!body.errors) {
                var uri = body.self.uri;
                var concatURL = uri + constants.EP_SEARCH_ZOOM;
                var searchUrl = util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
                console.log("getSearchResults resource url:" + searchUrl);
                messageData = {};
                request({
                  url: util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false),
                  method: 'GET',
                  json: messageData,
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + token
                  },
                }, function(error, response, body) {
                        if (!error) {
                            if(!body.errors){

                               var result = searchMapper.mapSearchResultJSON(body); 

                                res.send({
                                  "success": true ,
                                  "result": result,                                            
                                });                            
                            }
                            else{
                              logger.error('errors in service to getSearchResults in EP: ', body.errors);								
                              res.send({ "success": false, "error": body.errors });
                            }
                        }else{
                            logger.error('errors in service to getSearchResults in EP: ', error);
                            res.send({ "success": false, "error": error });                        
                        }
                    });
                }  
            else {
              logger.error('errors in service to postSearchresultsFom in EP: ', body.errors);
              res.send({ "success": false, "error": body.errors });
            }
          } else {
            logger.error('errors in service to postSearchresultsFom in EP: ', error);
            res.send({ "success": false, "error": error });
          }
    });
   
 
  } 

};
