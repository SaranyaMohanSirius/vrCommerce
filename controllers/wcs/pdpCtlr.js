import constants from '../../constants/wcs/constants';
import util from '../../util/wcs/util';
import pdpMapper from '../../json_mappers/wcs/pdpMapper';
import request from 'request';
import requestPromise from 'request-promise';

let logger = util.getLogger();

module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in WCS*/
   getProductDetails: function(res,productId){
	   
    let productDetailURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_PRODUCT_DETAILS_APPEND + productId + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    logger.info("getProductDetails post form url:" + util.constructUrl(constants.WCS_HOSTNAME, productDetailURL, false));	
	let method ='GET';
	let messageData = {};
	let requestCall = util.constructRequestWithoutToken(util.constructUrl(constants.WCS_HOSTNAME, productDetailURL, false),method,messageData);
	logger.info("requestCAll " + requestCall);
	requestPromise(requestCall).then(function (data) {
		let body1 = data;
		let invAvlURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_INV_AVL + productId;
		logger.info("getInvAvl post form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, invAvlURL, false));	
		let secondRequestCall = util.constructRequestWithoutToken(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, invAvlURL, false),"GET",messageData);
		logger.info("requestCAll " + secondRequestCall);
		requestPromise(secondRequestCall).then(function (data) {
			  let result = pdpMapper.mapPdpJSON(body1,data);
			  res.send({
				"success": true ,
				"result": result,
				});   	
		}).catch(function (error) {
                if(error.response.body){
                  logger.error('errors in service to get product details in EP: ', error.response.body);
                  res.send({ "success": false, "error": error.response.body }); 
                }else{
									logger.error('errors in service to get product details in WCS: ', error);									
                  res.send({ "success": false, "error": error});
                }
        });
	}).catch(function (error) {
			if(error.response.body){
			  logger.error('errors in service to get product detailsin EP: ', error.response.body);
			  res.send({ "success": false, "error": error.response.body }); 
			}else{
			  logger.error('errors in service to get product details in EP: ', error);
			  res.send({ "success": false, "error": error});
			}
	});
 
  } 

};
