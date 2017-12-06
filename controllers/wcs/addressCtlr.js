import constants from '../../constants/wcs/constants';
import { 
	constructUrl,
	constructRequest,
	getLogger
} from '../../util/wcs/util';
import addressMapper from '../../json_mappers/wcs/addressMapper';
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
	let requestCall = constructRequest(constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true),method,messageData);
	logger.info("requestCAll " + constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));
	requestPromise(requestCall).then(function (data) {
		let body1 = data;
		let checkoutProfileURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CHECKOUT_PROFILE;
		logger.info("checkout profile get form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));	
		let secondRequestCall = constructRequest(constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true),"GET",messageData);
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
    * Method for getting the shipping addresses in WCS  
    * Request Method: POST
    */

  addShippingAddress: function(res,req){
	let timeStamp = Math.round(+new Date()/1000);
	let nickName = req.body.addressType + "_" + timeStamp;
    let addAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("addAddress POST form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true));	
	let method ='POST';
	let messageData = {
		   "firstName" : req.body.firstName,
		   "lastName" : req.body.lastName,
		   "addressType" : req.body.addressType,
		   "zipCode" : req.body.zipCode,
		   "addressLine": req.body.addressLine,
		   "city" : req.body.city,
		   "state" : req.body.state,
		   "country" : req.body.country,
		   "nickName" : nickName
	};
	let requestCall = constructRequest(constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true),method,messageData);
	logger.info("requestCAll " + JSON.stringify(constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true)));
	requestPromise(requestCall).then(function (data) {
	  let result = addressMapper.mapAddAddressJSON(data);
	  res.send({
		"success": true ,
		"result": result,
		});   	
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to add Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to add Address in WCS: ', error);
              res.send({ "success": false, "error": error});
            }
	});
 
  },

   /*
    * Method for updating the shipping address in WCS  
    * Request Method : PUT
    * Request Params : nickName
    */

  updateShippingAddress: function(res,req){
	let uri= req.query.nickName;
    let updateAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + uri;
    logger.info("updateAddress PUT form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true));	
	let method ='PUT';
	let messageData = {
		   "firstName" : req.body.firstName,
		   "lastName" : req.body.lastName,
		   "addressType" : req.body.addressType,
		   "zipCode" : req.body.zipCode,
		   "addressLine": req.body.addressLine[0],
		   "city" : req.body.city,
		   "state" : req.body.state,
		   "country" : req.body.country		   
    };
	let requestCall = constructRequest(constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true),method,messageData);
	requestPromise(requestCall).then(function (data) {
	  let result = addressMapper.mapUpdateAddressJSON(data);
	  res.send({
		"success": true ,
		"result": result,
		});   	
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to update Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to update Address in WCS: ', error);
              res.send({ "success": false, "error": error});
            }
	});
 
  },
  
   /*
    * Method for deleting the shipping address in WCS
    * Request Method : DELETE
    * Request Params : nickName
    */

   deleteShippingAddress: function(res,req){
	let uri= req.query.nickName;
    let deleteAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + uri;
    logger.info("deleteAddress POST form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, deleteAddressURL, true));	
	let method ='DELETE';
	let messageData = {};
	let requestCall = constructRequest(constructUrl(constants.WCS_HOSTNAME_NOPORT, deleteAddressURL, true),method,messageData);
	requestPromise(requestCall).then(function (data) {
	  let result = addressMapper.mapDeleteAddressJSON(data);
	  res.send({
		"success": true ,
		"result": result,
		});   	
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to delete Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to delete Address in WCS: ', error);
              res.send({ "success": false, "error": error});
            }
	});
 
  },
  
   /*
    * Method for selecting the shipping address in WCS 
    * Request Method : PUT
    * Request Params : addressId
    */

  selectShippingAddress: function(req,res){

    messageData = {};
    let addressId = req.query.addressId;
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
	let requestCall = constructRequest(selectShippingAddressURL,method,messageData)

    requestPromise(requestCall).then(function (data) {
		  let result = addressMapper.mapSelectAddressJSON(data);
		  res.send({
			"success": true ,
			"result": result,
			});   			
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to select shipping address selector in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to select shipping address selector in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });

  }      
  

};
