var constants = require('../../constants/wcs/constants');
var util = require('../../util/wcs/util');
var categoryMapper = require('../../json_mappers/wcs/categoryMapper');
var request = require('request');

var logger= util.getLogger();

module.exports = {

  /*Controller for getting Top Cateogries in WCS*/

   getTopCategories: function(res){
	   
   			
   			var concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_CATEGORY_TOP +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
			logger.info('Top categories WCS url: ', util.constructRequestWithoutToken(constants.WCS_HOSTNAME, concatURL, false));
 
			var messageData = {};
			request({
			      url: util.constructRequestWithoutToken(constants.WCS_HOSTNAME, concatURL, false),
			      method: 'GET',
			      json: messageData,
			      headers: {
			        'Content-Type': 'application/json',
			      },
			}, function(error, response, body) {
			        if (!error) {
			            if (!body.errors) {
			            	  var result = categoryMapper.mapTopCategoryJSON(body);
							  res.send({
			                    "success": true ,
			                    "result": result,                                            
			                });                            

						}
			            else {
			            	logger.error('errors in service to get Top categories in WCS: ', body.errors);
            				res.send({ "success": false, "error": body.errors });
			            }
			        } else {
			            logger.error('errors in service to get Top categories in WCS: ', error);
            			res.send({ "success": false, "error": error });
			        }
			 });
	},
		/*Controller for getting Sub Cateogries for given ParentId in WCS*/

		getSubCategories: function(res,req){
			var parentId = req.query.identifier;
			var concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_SUB_CATEGORY + parentId;
			logger.info('Sub categories WCS url: ', util.constructRequestWithoutToken(constants.WCS_HOSTNAME, concatURL, false));
 
			var messageData = {};
			request({
			      url: util.constructRequestWithoutToken(constants.WCS_HOSTNAME, concatURL, false),
			      method: 'GET',
			      json: messageData,
			      headers: {
			        'Content-Type': 'application/json',
			      },
			}, function(error, response, body) {
			        if (!error) {
			            if (!body.errors) {
			            	  var result = categoryMapper.mapSubCategoryJSON(body);
							  res.send({
			                    "success": true ,
			                    "result": result,                                            
			                });                            

						}
			            else {
			            	logger.error('errors in service to get Top categories in WCS: ', body.errors);
            				res.send({ "success": false, "error": body.errors });
			            }
			        } else {
			            logger.error('errors in service to get Top categories in WCS: ', error);
            			res.send({ "success": false, "error": error });
			        }
			 });

			
	},
	getProductsListForCategory: function(req,res,categoryId){
     
    var pageSize = req.query.pagesize;
    var currentPageNumber = req.query.current;
    var concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_CATEGORY_DETAILS_APPEND + categoryId + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    logger.info("getProductsListForCategory post form url:" + util.constructRequestWithoutToken(constants.WCS_HOSTNAME, concatURL, false));  

    var messageData = {
      'pageSize': pageSize,
      'currentPageNumber': currentPageNumber
    };
    request({
      url: util.constructRequestWithoutToken(constants.WCS_HOSTNAME, concatURL, false),
      method: 'GET',
      json: messageData,
      headers: {
        'Content-Type': 'application/json',
      },
    }, function(error, response, body) {
          if (!error) {
            logger.info(body);
            if (!body.errors) {
              logger.info("before mapper");
          var result = categoryMapper.mapProductsListForCategoryJSON(body,req,messageData);
                  res.send({
                    "success": true ,
                    "result": result,                                            
                  });                            

      }
            else {
              logger.error('errors in service to get categories in EP: ', body.errors);
              res.send({ "success": false, "error": body.errors });
            }
          } else {
            logger.error('errors in commerce: ', error);
            res.send({ "success": false, "error": error });
          }
    });
   
 
  } 

};
