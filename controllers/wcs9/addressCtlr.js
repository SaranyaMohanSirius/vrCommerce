import constants from '../../constants/wcs9/constants';
import { 
	constructUrl,
	constructRequest,
	constructRequestWithToken,
	getTokens,
	getLogger
} from '../../util/wcs/util';
import addressMapper from '../../json_mappers/wcs9/addressMapper';
import requestPromise from 'request-promise';

let logger= getLogger();

export default {

   /*
    * Method for getting the shipping addresses in WCS  
    * Request Method : GET
    */

   getShippingAddresses: function(res,req){
	
    let getAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("getAddress get form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));	
	let method ='GET';
	let messageData = {};
	let requestCall = constructRequestWithToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true),method,messageData,getTokens(req));
	logger.info("requestCAll " + constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));
	requestPromise(requestCall).then(function (data) {
		let body1 = data;
		let checkoutProfileURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CHECKOUT_PROFILE;
		logger.info("checkout profile get form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));	
		let secondRequestCall = constructRequestWithToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true),"GET",messageData,getTokens(req));
		logger.info("requestCAll " + constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));
		requestPromise(secondRequestCall).then(function (data) {
			  let result = addressMapper.mapGetAddressJSON(body1,data);
			  res.send({
				"success": true ,
				"result": result,
				});   	
		}).catch(function (error) {
			if(error.response.body){
			  logger.error('errors in service to getShippingAddress(checkoutProfile) in WCS: ', error.response.body);
			  res.send({ "success": false, "error": error.response.body }); 
			}else{
			  logger.error('errors in service to getShippingAddress(checkoutProfile) in WCS: ', error);
			  res.send({ "success": false, "error": error});
			}
		});
	}).catch(function (error) {
			if(error.response.body){
			  logger.error('errors in service to getShippingAddress(person/contact) in WCS: ', error.response.body);
			  res.send({ "success": false, "error": error.response.body }); 
			}else{
			  logger.error('errors in service to getShippingAddress(person/contact) in WCS: ', error);
			  res.send({ "success": false, "error": error});
			}
	});
	
  },

   /*
    * Method for adding the shipping addresses in WCS  
    * Request Method: POST
    */

  addShippingAddress: function(res,req){
	let timeStamp = Math.round(+new Date()/1000);
	let nickName = req.body.addressType + "_" + timeStamp;
    let addAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("addAddress POST form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true));	
	let method ='POST';
	let messageData = req.body
	let requestCall = constructRequestWithToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true),method,messageData,getTokens(req));
	logger.info("requestCAll " + JSON.stringify(constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true)));
	requestPromise(requestCall).then(function (data) {
	  res.send({
		"success": true ,
		});   	
	}).catch(function (error) {
		console.log("addressCtlr => addShippingAddress", error)
        res.send({ "success": false, "error": error });
	});
 
  },

   /*
    * Method for updating the shipping address in WCS  
    * Request Method : PUT
    * Request Params : nickName
    */

  updateShippingAddress: function(res,req){
	let nickName = req.body.nickName;
    let updateAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + nickName;
    logger.info("updateAddress PUT form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true));	
	let method ='PUT';
	let messageData = req.body;
	let requestCall = constructRequestWithToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true),method,messageData,getTokens(req));
	requestPromise(requestCall).then(function (data) {
	  res.send({
		"success": true ,
		});   	
	}).catch(function (error) {
		console.log("addressCtlr => addShippingAddress", error)
        res.send({ "success": false, "error": error });
	});
 
  },
  
   /*
    * Method for deleting the shipping address in WCS
    * Request Method : DELETE
    * Request Params : nickName
    */

   deleteShippingAddress: function(res,req){
	let nickName = req.query.nickName;
    let deleteAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + nickName;
    logger.info("deleteAddress POST form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, deleteAddressURL, true));	
	let method ='DELETE';
	let messageData = {};
	let requestCall = constructRequestWithToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, deleteAddressURL, true),method,messageData,getTokens(req));
	requestPromise(requestCall).then(function (data) {
	  res.send({
		"success": true ,
		});   	
	}).catch(function (error) {
		console.log("addressCtlr => addShippingAddress", error)
        res.send({ "success": false, "error": error });
	});
 
  },
  
   /*
    * Method for selecting the shipping address in WCS 
    * Request Method : PUT
    * Request Params : addressId
    */

  selectShippingAddress: function(res,req){
	  
    messageData = {};
    let addressId = req.body.addressId;
	let x_calculationUsage = constants.SHIP_CALC_USAGE;
    let conCatUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_SHIP_INFO;
    let selectShippingAddressURL = constructUrl(constants.WCS_HOSTNAME_NOPORT , conCatUrl, true);
    logger.info('selectShippingAddress url ', selectShippingAddressURL);
    let method ='PUT';
    let messageData = {
		"addressId": addressId,
		"orderId": ".",
		"orderItem": [
			{
				"addressId": addressId
			}
		],
		"x_calculationUsage": x_calculationUsage
    };
	let requestCall = constructRequestWithToken(selectShippingAddressURL,method,messageData,getTokens(req))

    requestPromise(requestCall).then(function (data) {
		  res.send({
			"success": true ,
			"result": data
			});   			
	}).catch(function (error) {
      res.send({ "success": false, "error": error }); 
      });

  }      
  

};
