var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var categoryMapper = require('../../json_mappers/elasticPath/categoryMapper');
var request = require('request');
var requestPromise = require('request-promise');


var logger= util.getLogger();


module.exports = {

  /*Controller for getting the Top level categories for header in EP*/ 
  getTopCategories: function(token,res){
    
      var messageData = {};

      var topCategoriesURL = util.constructUrl(constants.EP_HOSTNAME, constants.EP_TOP_CATEGORIES, false);   
      logger.info('Top categories EP url: ', topCategoriesURL);
      var method ='GET';
      var requestCall = util.constructRequest(topCategoriesURL,method,messageData,token);

      requestPromise(requestCall).then(function (data) {
         var result = categoryMapper.mapTopCategoriesJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to get Top categories in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to get Top categories in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });
  },

  /*Controller for getting the Sub categories for header nav menu in EP*/
  getSubCategories: function(token,res,identifier){
    
      var messageData = {};
      var concattUrl =  identifier + constants.EP_SUB_CATEGORIES_ZOOM;
      var subCategoriesURL = util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
      logger.info('Sub Categories EP url:' , subCategoriesURL);
      var method ='GET';
      var requestCall = util.constructRequest(subCategoriesURL,method,messageData,token);
  
      requestPromise(requestCall).then(function (data) {
         var result = categoryMapper.mapSubCategoriesJSON(data,identifier); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to get Sub categories in EP:', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to get Sub categories in EP:', error);
              res.send({ "success": false, "error": error});
            }
      });

  },

  /*Controller for getting the products list for a given category/subcategory in EP*/
  getProductsListForCategory: function(token,res,identifier){

      var messageData = {};
      var n = identifier.split("/");
      var categoryIdentifier = n[n.length - 1];
      var concatURL =  constants.EP_PRODUCTS_FROM_CATEGORIES_NAV + categoryIdentifier + constants.EP_SEARCH_ZOOM;
      var productListUrl = util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
      logger.info('Categories page Product List EP url:' , productListUrl);
      var method ='GET';
      var requestCall = util.constructRequest(productListUrl,method,messageData,token);

      requestPromise(requestCall).then(function (data) {
         var result = categoryMapper.mapProductsListForCategoryJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to get products list for category in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to get products list for category in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });
  }
};
