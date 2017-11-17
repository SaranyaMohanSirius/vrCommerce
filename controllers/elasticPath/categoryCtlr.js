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

  /*Controller for getting the Top level categories for header in EP*/ 
  getTopCategories: function(token,res){
    
  messageData = {};
  console.log("url:" + util.constructUrl(constants.EP_HOSTNAME, constants.EP_TOP_CATEGORIES, false));
  
  request({
      url: util.constructUrl(constants.EP_HOSTNAME, constants.EP_TOP_CATEGORIES, false),
      method: 'GET',
      json: messageData,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      },
    }, function(error, response, body) {
      if (!error) {
        if (!body.errors) {
      
            var converter = JM.makeConverter({
                
                TopCategories: ['_element', JM.map({
                    name: 'display-name',
                    identifier: 'name',
                    id: 'self.uri',
                    parentCategoryId: JM.helpers.def('-1'),

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

  /*Controller for getting the Sub categories for header nav menu in EP*/
  getSubCategories: function(token,res,identifier){
    
  messageData = {};
  var concattUrl =  identifier + constants.EP_SUB_CATEGORIES_ZOOM;

  console.log("getSubCategories - url:" + util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false));
  
  request({
      url: util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false),
      method: 'GET',
      json: messageData,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      },
    }, function(error, response, body) {
      if (!error) {
        if (!body.errors) {
      
            var converter = JM.makeConverter({
                
                SubCategories: ['_child', JM.map({
                    name: 'display-name',
                    identifier: 'name',
                    id: 'self.uri',
                    parentCategoryId: JM.helpers.def(identifier),
                    
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

  /*Controller for getting the products list for a given category/subcategory in EP*/
  getProductsListForCategory: function(token,res,identifier){

    messageData = {};
  
    var n = identifier.split("/");
    var categoryIdentifier = n[n.length - 1];

    var concatURL =  constants.EP_PRODUCTS_FROM_CATEGORIES_NAV + categoryIdentifier + constants.EP_SEARCH_ZOOM;

    var productListUrl = util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
    console.log('productListUrl'+ productListUrl);

    request({
      url: productListUrl,
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

                      productsList: ['_element', JM.map({
                                               
                             availability: '_availability.0.state',
                             listPrice: '_price.0.list-price.0.display',
                             purchasePrice: '_price.0.purchase-price.0.display',
                             displayName: '_definitions.0.details.0.displayName',
                             code: '_code.0.code',

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




};
