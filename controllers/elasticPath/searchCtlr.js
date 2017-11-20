var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var request = require('request');
var q = require('q');
var gampee = require("gampee");
var rp = require('request-promise');
var Promise = require('promise');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

module.exports = {

  /*Controller for getting the Search results for a given keyword in EP*/
   getSearchResults: function(token,res,keyword,pageSize){
       
    messageData = {
        "keywords": keyword,
        "page-size": pageSize      
    };
    console.log("getSearchResults post form url:" + util.constructUrl(constants.EP_HOSTNAME, constants.EP_SEARCH, false));
   
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
                                var converter = JM.makeConverter({

                                    pagination: {
                                        pageSize: 'pagination.page-size',
                                        currentPageNumber: 'pagination.current',
                                        resultsTotal: 'pagination.results',
                                        resultsCurrentPage: 'pagination.results-on-page',

                                    },    

                                    searchResults: ['_element', JM.map({
                                                             
                                           availability: '_availability.0.state',
                                           listPrice: '_price.0.list-price.0.display',
                                           purchasePrice: '_price.0.purchase-price.0.display',
                                           displayName: '_definition.0.display-name',
                                           code: '_code.0.code',
                                           resourceIdentifier: '_code.0.links.0.uri',
                                           store: JM.helpers.def(constants.EP_STORE),


                                           attributes: ['_definition.0.details', JM.map({
                                              displayable: JM.helpers.def('true'),
                                              usage: JM.helpers.def('Descriptive'),
                                              name: 'display-name',
                                              identifier: 'name',
                                              values: 'value', 

                                          })],

                                         hasSingleSKU: ['_definition.0.links', function(arr){
                                            if(arr.length >= 3)
                                              return false;
                                            else
                                              return true;
                                          }],
                                          catalogEntryTypeCode: ['_definition.0.links', function(arr){
                                            if(arr.length >= 3)
                                              return 'ProductBean';
                                            else
                                              return 'ItemBean';
                                          }]

                                    })],

                                });
 
                                var result = converter(body);
                                res.send({
                                  "success": true ,
                                  "result": result,                                            
                                });                            
                            }
                            else{
                              console.log('errors in service hit to login service');
                              console.log(body.errors);
                              res.send({ "success": false, "error": body.errors });
                            }
                        }else{
                            console.log('commerce error');
                            console.log(error);
                            res.send({ "success": false, "error": error });                        
                        }
                    });
                }  
            else {
              console.log('errors in service hit to login service');
              console.log(body.errors);
              res.send({ "success": false, "error": body.errors });
            }
          } else {
            console.log('commerce error');
            console.log(error);
            res.send({ "success": false, "error": error });
          }
    });
   
 
  } 

};
