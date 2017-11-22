var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var categoryMapper = require('../../json_mappers/elasticPath/categoryMapper');
var request = require('request');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

var logger= util.getLogger();


module.exports = {

  /*Controller for getting the Top level categories for header in EP*/ 
  getTopCategories: function(token,res){
    
  messageData = {};

  logger.info('Top categories EP url: ', util.constructUrl(constants.EP_HOSTNAME, constants.EP_TOP_CATEGORIES, false));
  
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
      
          var result = categoryMapper.mapTopCategoriesJSON(body);
          res.send({
                      "success": true ,
                      "result": result,
            });

        } else {
            logger.error('errors in service to get Top categories in EP: ', body.errors);
            res.send({ "success": false, "error": body.errors });
        }
      } else {
            logger.error('errors in service to get Top categories in EP: ', error);
            res.send({ "success": false, "error": error });
      }
    }); 
  },

  /*Controller for getting the Sub categories for header nav menu in EP*/
  getSubCategories: function(token,res,identifier){
    
  messageData = {};
  var concattUrl =  identifier + constants.EP_SUB_CATEGORIES_ZOOM;

  logger.info('Sub Categories EP url:' , util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false));
  
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
      
            var result = categoryMapper.mapSubCategoriesJSON(body,identifier);
            res.send({
                      "success": true ,
                      "result": result,
            });

        } else {
            logger.error('errors in service to get Sub categories in EP: ', body.errors);
            res.send({ "success": false, "error": body.errors });
        }
      } else {
            logger.error('errors in service to get Sub categories in EP: ', error);
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

    logger.info('Categories page Product List EP url:' , productListUrl);

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

                  var result = categoryMapper.mapProductsListForCategoryJSON(body);
                  res.send({
                    "success": true ,
                    "result": result,                                            
                  });                            
              }
              else{
                logger.error('errors in service to get products list for category in EP: ', body.errors);
                res.send({ "success": false, "error": body.errors });
              }
        }else{
                logger.error('errors in service to get products list for category in EP: ', body.errors);
                res.send({ "success": false, "error": error });                        
        }
    });
  }
};
