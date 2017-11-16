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

  getTopCategories: function(token,res){
    
  messageData = {};
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
  } 

};