import constants from '../../constants/wcs/constants';
import util from '../../util/wcs/util';
import addressMapper from '../../json_mappers/wcs/addressMapper';
import request from 'request';
import requestPromise from 'request-promise';
let logger= util.getLogger();

module.exports = {

   /*Controller for getting the shipping addresses in WCS*/
   getShippingAddresses: function(res,req){
	
    let getAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("getAddress get form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));	
	let method ='GET';
	let messageData = {};
	let requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true),method,messageData);
	logger.info("requestCAll " + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));
	requestPromise(requestCall).then(function (data) {
		let body1 = data;
		let checkoutProfileURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CHECKOUT_PROFILE;
		logger.info("checkout profile get form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));	
		let secondRequestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true),"GET",messageData);
		logger.info("requestCAll " + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));
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

  /*Controller for adding the shipping address in WCS*/
  addShippingAddress: function(res,req){
	let timeStamp = Math.round(+new Date()/1000);
	let nickName = req.body.addressType + "_" + timeStamp;
    let addAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("addAddress POST form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true));	
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
	let requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true),method,messageData);
	logger.info("requestCAll " + JSON.stringify(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, addAddressURL, true)));
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

  /*Controller for updating the shipping address in WCS*/
  updateShippingAddress: function(res,req){
	let uri= req.query.nickName;
    let updateAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + uri;
    logger.info("updateAddress PUT form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true));	
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
	let requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true),method,messageData);
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
  
   /*Controller for deleting the shipping address in WCS*/
   deleteShippingAddress: function(res,req){
	let uri= req.query.nickName;
    let deleteAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + uri;
    logger.info("deleteAddress POST form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, deleteAddressURL, true));	
	let method ='DELETE';
	let messageData = {};
	let requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, deleteAddressURL, true),method,messageData);
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
  
  /*Controller for selecting the shipping address in WCS*/
  selectShippingAddress: function(req,res){

    messageData = {};
    let addressId = req.body.addressId;
	let x_calculationUsage = constants.SHIP_CALC_USAGE;
    let conCatUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_SHIP_INFO;
    let selectShippingAddressURL = util.constructUrl(constants.WCS_HOSTNAME_NOPORT , conCatUrl, true);
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
	let requestCall = util.constructRequest(selectShippingAddressURL,method,messageData)

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
