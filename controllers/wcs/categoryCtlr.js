import constants from '../../constants/wcs/constants';
import util from '../../util/wcs/util';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
        constructRequestWithoutToken,
       } from '../../util/wcs/util';
import categoryMapper from '../../json_mappers/wcs/categoryMapper';
import requestPromise from 'request-promise';

let logger= util.getLogger();

export default {

  /*Controller for getting Top Cateogries in WCS*/

   getTopCategories: function(res){
	   
   			
   			let concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_CATEGORY_TOP +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
   			let messageData = {};
			let getTopCategoriesUrl = constructUrl(constants.WCS_HOSTNAME, concatURL, false);
			logger.info("getTopCategoriesUrl: " +getTopCategoriesUrl);
        	let method ='GET';
          	let requestCall = constructRequestWithoutToken(getTopCategoriesUrl,method,messageData);
 			logger.info(JSON.stringify(requestCall));
 			requestPromise(requestCall).then(function (messageData) {
	          let result = categoryMapper.mapTopCategoryJSON(messageData);
	                  res.send({
	                    "success": true ,
	                    "result": result                                           
	                });   
	          }).catch(function (error) {
	              if(error){
	                logger.error('errors in service to getTopCategories in WCS: ', error);
	                res.send({ "success": false, "error": error }); 
	              }else{
	                logger.error('errors in service to getTopCategories in WCS: ', error);
	                res.send({ "success": false, "error": error});
	              }
	          });
	},
		/*Controller for getting Sub Cateogries for given ParentId in WCS*/

		getSubCategories: function(res,req){

			let parentId = req.query.identifier;
			let concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_SUB_CATEGORY + parentId;
   			let messageData = {};
			let getSubCategoriesUrl = constructUrl(constants.WCS_HOSTNAME, concatURL, false);
			logger.info("getSubCategoriesUrl: " +getSubCategoriesUrl);
        	let method ='GET';
          	let requestCall = constructRequestWithoutToken(getSubCategoriesUrl,method,messageData);
 			logger.info(JSON.stringify(requestCall));
 			requestPromise(requestCall).then(function (messageData) {
	          let result = categoryMapper.mapSubCategoryJSON(messageData);
	                  res.send({
	                    "success": true ,
	                    "result": result                                           
	                });   
	          }).catch(function (error) {
	              if(error){
	                logger.error('errors in service to getSubCategories in WCS: ', error);
	                res.send({ "success": false, "error": error }); 
	              }else{
	                logger.error('errors in service to getSubCategories in WCS: ', error);
	                res.send({ "success": false, "error": error});
	              }
	          });

	},
	getProductsListForCategory: function(req,res,categoryId){

     		let pageSize = req.query.pagesize;
   			let currentPageNumber = req.query.current;
    		let concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_CATEGORY_DETAILS_APPEND + categoryId + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
			let messageData = {
			      'pageSize': pageSize,
			      'currentPageNumber': currentPageNumber
			    };			
			let getProductsListForCategoryUrl = constructUrl(constants.WCS_HOSTNAME, concatURL, false);
			logger.info("getProductsListForCategoryUrl: " +getProductsListForCategoryUrl);
        	let method ='GET';
          	let requestCall = constructRequestWithoutToken(getProductsListForCategoryUrl,method,messageData);
 			logger.info(JSON.stringify(requestCall));
 			requestPromise(requestCall).then(function (body) {
 				let messageData = {
			      'pageSize': pageSize,
			      'currentPageNumber': currentPageNumber
			    };
	          let result = categoryMapper.mapProductsListForCategoryJSON(body,req,messageData);
	                  res.send({
	                    "success": true ,
	                    "result": result                                           
	                });   
	          }).catch(function (error) {
	              if(error){
	                logger.error('errors in service to getProductsListForCategory in WCS: ', error);
	                res.send({ "success": false, "error": error }); 
	              }else{
	                logger.error('errors in service to getProductsListForCategory in WCS: ', error);
	                res.send({ "success": false, "error": error});
	              }
	          });
	        }
};
