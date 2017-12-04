import constants from '../../constants/wcs/constants';
import  {getLogger,isJson,constructUrl,constructRequestWithoutToken} from '../../util/wcs/util';
import pdpMapper from '../../json_mappers/wcs/pdpMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger = getLogger();

export default {
	/**
	 * Method for getting product details
	 */
	getProductDetails: function(req,res){
		let productId = req.query.productId;
		let path = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_PRODUCT_DETAILS_APPEND + productId + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
		let pdpURL = constructUrl(constants.WCS_HOSTNAME, path, false);
		logger.info("getProductDetails post form url:" + pdpURL);
    let requestCall = constructRequestWithoutToken(pdpURL,'GET','');
		requestPromise(requestCall).then(function(result){
			return requestFunction(result);
		});
		let requestFunction = function(data){
				return new Promise(function(resolve,reject){
					if(isJson(data)) data = JSON.parse(data);
					let path = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_INV_AVL + productId;
					let invAvlURL = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, false);
					let requestCall = constructRequestWithoutToken(invAvlURL,'GET','');
					logger.info("request call = "+JSON.stringify(requestCall));
						requestPromise(requestCall).then(function (body) {
								if(isJson(body)) body = JSON.parse(body);
								let result = pdpMapper.mapPdpJSON(data,body);  
								res.send({
										"success": true,
										"result": result
								});
								}).catch(function (error) {
										logger.info(error);
								if(error){
									logger.error('errors in service to getProductDetails in WCS: ', error);
									res.send({ "success": false, "error": error }); 
								}
								});
						});
		}
	} 
}
