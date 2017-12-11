import requestPromise from 'request-promise';
import constants from '../../constants/elasticPath/constants';
import categoryMapper from '../../json_mappers/elasticPath/categoryMapper';
import {getLogger,
        constructUrl,
        constructRequest,
      constructRequestWithoutToken} from '../../util/elasticPath/util';
import {checkAndGetAuthToken } from '../../controllers/elasticPath/loginCtlr';
let logger=getLogger();


module.exports = {

  /*Controller for getting the Top level categories for header in EP*/ 
  getTopCategories: function(req,res){
    

      let requestFunction = function(token){
                return new Promise(function(resolve,reject){
                let messageData = {};
                let topCategoriesURL = constructUrl(constants.EP_HOSTNAME, constants.EP_TOP_CATEGORIES, false);   
                logger.info('Top categories EP url: ', topCategoriesURL);
                let method ='GET';
                let requestCall = constructRequest(topCategoriesURL,method,messageData,token);
            
                requestPromise(requestCall).then(function (data) {
           
                   let result = categoryMapper.mapTopCategoriesJSON(data); 
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
          });
        }        
        /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
        checkAndGetAuthToken(req,res,function(access_token){
             requestFunction(access_token); 
        });

        
  },

  /*Controller for getting the Sub categories for header nav menu in EP*/
  getSubCategories: function(req,res){
    

      let requestFunction = function(token){
                return new Promise(function(resolve,reject){
          
                  let messageData = {};
                  let identifier = req.query.identifier;
                  let concattUrl =  identifier + constants.EP_SUB_CATEGORIES_ZOOM;
                  let subCategoriesURL = constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
                  logger.info('Sub Categories EP url:' , subCategoriesURL);
                  let method ='GET';
                  let requestCall = constructRequest(subCategoriesURL,method,messageData,token);
              
                  requestPromise(requestCall).then(function (data) {
                     let result = categoryMapper.mapSubCategoriesJSON(data,identifier); 
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
             });
     }               

        /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
        checkAndGetAuthToken(req,res,function(access_token){
             requestFunction(access_token); 
        });

  },

  /*Controller for getting the products list for a given category/subcategory in EP*/
  getProductsListForCategory: function(req,res){


      let requestFunction = function(token){
                return new Promise(function(resolve,reject){

                let messageData = {};
                
                let identifier = req.query.identifier;
                let n = identifier.split("/");
                let categoryIdentifier = n[n.length - 1];
                let concatURL =  constants.EP_PRODUCTS_FROM_CATEGORIES_NAV + categoryIdentifier + constants.EP_SEARCH_ZOOM;
                let productListUrl = constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
                logger.info('Categories page Product List EP url:' , productListUrl);
                let method ='GET';
                let requestCall = constructRequest(productListUrl,method,messageData,token);

                requestPromise(requestCall).then(function (data) {
                   let result = categoryMapper.mapProductsListForCategoryJSON(data); 
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
              });
     }

        /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
        checkAndGetAuthToken(req,res,function(access_token){
             requestFunction(access_token); 
        });

  }
};
