var constants = require('./constants');
var util = require('./util');
var request = require('request');
var database = require('./databaseUtil');
var q = require('q');
var gampee = require("gampee");
var rp = require('request-promise');
var Promise = require('promise');
var JM = require('json-mapper');
 
var _ = require("underscore");
 
var globalcount = 0;
module.exports = {
 
  guestLogin: function(res) {
 
    messageData = {};
    console.log("url:" + util.constructUrl(constants.EP_HOSTNAME, constants.EP_GUEST_LOGIN, false));
   
    request({
      url: util.constructUrl(constants.EP_HOSTNAME, constants.EP_GUEST_LOGIN, false),
      method: 'POST',
      json: messageData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'none'
      },
    }, function(error, response, body) {
      if (!error) {
        if (!body.errors) {
          console.log("access_token: " + body.access_token);
          res.send({
                "success": true,
                "authorization_code": body.access_token
              });
               
             
         
        } else {
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
 
  },
  getTopCategories: function(token,res){
       
    messageData = {
       
    };
    console.log("url:" + util.constructUrl(constants.EP_HOSTNAME, constants.EP_TOP_CATEGORIES, false));
   
    request({
      url: util.constructUrl(constants.EP_HOSTNAME, constants.EP_TOP_CATEGORIES, false),
      method: 'GET',
        json: messageData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'bearer ' + token
      },
    }, function(error, response, body) {
      if (!error) {
        if (!body.errors) {
         
            var converter = JM.makeConverter({
               
                element: ['_element', JM.map({
                    name: 'display-name',
                    identifier: 'name',
                    id: 'self.uri'
                })]
            });
 
            var result = converter(body);
 
              res.send({
                      "success": true ,
                      "result": result,
                           
              });
             
 
           
             
         
        } else {
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
 
  },
 
  getSearchResults: function(token,res,keyword,pageSize){
       
    messageData = {
        "keywords": keyword,
        "page-size": pageSize      
    };
    console.log("url:" + util.constructUrl(constants.EP_HOSTNAME, constants.EP_SEARCH, false));
   
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
                console.log("url:" + searchUrl);
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
                                searchResults: ['_element', JM.map({
                                                         
                                       availability: '_availability.0.state',
                                       listPrice: '_price.0.list-price.0.display',
                                       purchasePrice: '_price.0.purchase-price.0.display',
                                       displayName: '_definitions.0.details.0.displayName',
                                       code: '_code.0.code'

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