import constants from '../../constants/wcs9/constants';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
				constructRequestWithoutToken,
				isJson
       } from '../../util/wcs/util';
import categoryMapper from '../../json_mappers/wcs9/categoryMapper';
 import seoController from '../wcs9/seoCtlr';
import requestPromise from 'request-promise';

let logger= getLogger();

export default {

  /*
   * Method for getting Top Cateogries in WCS
   * Request Method: GET
   */

   getTopCategories: function(res){
	   
   			
   			let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CATEGORY_TOP +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
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

	   getCategory: function(res,req){  			
		let identifier = req.query.identifier;
		let concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_CATEGORY + identifier + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
		let messageData = {};
		let getCategoriesUrl = constructUrl(constants.WCS_HOSTNAME, concatURL, false);
		logger.info("getCategoriesUrl: " +getCategoriesUrl);
       	let method ='GET';
	 	let requestCall = constructRequestWithoutToken(getCategoriesUrl,method,messageData);
		logger.info(JSON.stringify(requestCall));
		requestPromise(requestCall).then(function (messageData) {
	      let result = categoryMapper.mapCategoryJSON(messageData);
	              res.send({
	                "success": true ,
	                "result": result                                           
	            });   
	      }).catch(function (error) {
	          if(error){
	            logger.error('errors in service to getCategories in WCS: ', error);
	            res.send({ "success": false, "error": error }); 
	          }else{
	            logger.error('errors in service to getCategories in WCS: ', error);
	            res.send({ "success": false, "error": error});
	          }
	      });
	},

	/*
	 * Method for getting Sub Cateogries for given ParentId in WCS
	 * Request Method : GET
	 * Request Params : identifier
 	 */

	getSubCategories: function(res,req){

		logger.info(" categoryCtrl -> getSubCategories: ");
 	//seoController.getIdByKeyword(req.query.identifier,'CategoryToken').then(function(value){
		let value = req.query.identifier;
			if(value == null)
			{
				value = req.query.identifier;
			}
				let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_SUB_CATEGORY + value;
	   			let messageData = {};
				let getSubCategoriesUrl = constructUrl(constants.WCS_HOSTNAME, concatURL, false);
				logger.info("getSubCategoriesUrl: " +getSubCategoriesUrl);
	        	let method ='GET';
	          	let requestCall = constructRequestWithoutToken(getSubCategoriesUrl,method,messageData);
	 			logger.info(JSON.stringify(requestCall));
	 			requestPromise(requestCall).then(function (messageData) {
	 			  console.log("Before Mapper");
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
							
				//		});

	},

	/* 
	 * Method for getting product list for a given category - category landing page
	 * Request Method : GET
	 * Request Params : pagesize, current
	 */

	getProductsListForCategory: function(req,res,categoryId){
	    	let pageSize = req.query.pagesize;
   			let currentPageNumber = req.query.currentPage;
   			
   			logger.info("getProductsListForCategory -> categoryId::" +categoryId);
   			let value = req.query.identifier;
   		//	seoController.getIdByKeyword(categoryId,'CategoryToken').then(function(value){
    		let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CATEGORY_DETAILS_APPEND + value + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID+ "&pageNumber=" + currentPageNumber + "&pageSize=" + pageSize;
			 if(req.query.orderBy){
   				let orderBy = req.query.orderBy;
    			concatURL = concatURL + "&orderBy=" + orderBy;              
    		}		
    		 if(req.query.facet){
                let facet = req.query.facet;
                logger.info("Multiple facets" + Array.isArray(facet));          
                if(Array.isArray(facet)){
                  
                        var facetIterator = facet[Symbol.iterator]();
                        for (let facetvalue of facetIterator) {
                           concatURL = concatURL + "&facet=" + facetvalue; 
                        }
                }
                else
                    concatURL = concatURL + "&facet=" + facet; 
        	}	
		   	let getProductsListForCategoryUrl = constructUrl(constants.WCS_HOSTNAME, concatURL, false);
		  	logger.info("getProductsListForCategoryUrl: " +getProductsListForCategoryUrl);
        	let method ='GET';
        	let requestCall = constructRequestWithoutToken(getProductsListForCategoryUrl,method,'');
 		  	logger.info(JSON.stringify(requestCall));
 		  	requestPromise(requestCall).then(function (body) {
 				let messageData = {
			      'pageSize': pageSize,
			      'currentPage': currentPageNumber
				};
				if(isJson(body)) body = JSON.parse(body);
	         	let result = categoryMapper.mapProductsListForCategoryJSON(body,messageData);
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
