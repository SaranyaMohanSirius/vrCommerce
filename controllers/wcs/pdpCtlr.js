import constants from '../../constants/wcs/constants';
import  {getLogger,isJson,constructUrl,constructRequestWithoutToken,constructRequestWithToken,getTokens} from '../../util/wcs/util';
import pdpMapper from '../../json_mappers/wcs/pdpMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger = getLogger();

export default {

	/*
	 * Method for getting product details
	 * Request Method: GET
	 * Request Params: productId
	 */

	getProductDetails: function(req,res){
		let productId = req.query.productId;
		let resourceName = req.query.resourceName;
		let result;
		let path = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_PRODUCT_DETAILS_APPEND + productId + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
		let pdpURL = constructUrl(constants.WCS_HOSTNAME, path, false);
		logger.info("getProductDetails post form url:" + pdpURL);
   		let requestCall = constructRequestWithoutToken(pdpURL,'GET','');
		requestPromise(requestCall).then(function(result){
			return requestFunction(result);
		}).catch(function (error) {
			if(error.statusCode === 404 || error.statusCode === 500){
				logger.error('error in service to getPromotionsAtCart in WCS: ', error);
				res.send({ "success": false, "error": error.response.body });
			}else{
				logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
				res.send({ "success": false, "error": error.response.body.errors[0] }); 
			}
        });;
		let requestFunction = function(data){
				return new Promise(function(resolve,reject){
					if(isJson(data)) data = JSON.parse(data);
					let path = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_INV_AVL + productId;
					let invAvlURL = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, false);
					let requestCall = constructRequestWithoutToken(invAvlURL,'GET','');
					logger.info("request call = "+JSON.stringify(requestCall));
					if(data.catalogEntryView[0].catalogEntryTypeCode == "ProductBean"){
						if(resourceName == "pdp"){
							result = pdpMapper.mapPdpJSON(data,true);
						}
						else if(resourceName == "qv" || resourceName == "cart"){
							result = pdpMapper.mapQuickViewJSON(data,true);
						}
						res.send({
							"success": true,
							"result": result
					});
					}
					else{
						requestPromise(requestCall).then(function (body) {
							if(isJson(body)) body = JSON.parse(body);
							if(resourceName == "pdp"){
								result = pdpMapper.mapPdpJSON(data,body);
							}
							else if(resourceName == "qv" || resourceName == "cart"){
								result = pdpMapper.mapQuickViewJSON(data,body);
							}
							res.send({
									"success": true,
									"result": result
							});
							}).catch(function (error) {
								if(error.statusCode === 404 || error.statusCode === 500){
									logger.error('error in service to getPromotionsAtCart in WCS: ', error);
									res.send({ "success": false, "error": error.response.body });
								}else{
									logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
									res.send({ "success": false, "error": error.response.body.errors[0] }); 
								}
					});
					}
				});
		}
	} ,
	getRecentlyViewedProducts: function(req,res){
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_ESPOT_RECENTLY_VIEWED_PRODUCTD;
        let getRecentlyViewedProductsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("Get recently viewed products URL" +getRecentlyViewedProductsUrl);
        let requestCall = constructRequestWithToken(getRecentlyViewedProductsUrl,'GET','',getTokens(req))
        requestPromise(requestCall).then(function (body) {
            let result = pdpMapper.mapRecentlyViewedProductsJSON(JSON.parse(body));  
            res.send({
                "success": true,
                "result": result
            });
            }).catch(function (error) {
                if(error.statusCode === 404 || error.statusCode === 401){
                    logger.error('errors in service to getRecentlyViewedProducts in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body });
                }else{
                    logger.error('errors in service to getRecentlyViewedProducts in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body.errors[0] }); 
                }
            });

	} 
}
