var constants = require('../../constants/wcs/constants');
var util = require('../../util/wcs/util');
var addressMapper = require('../../json_mappers/wcs/addressMapper');
var request = require('request');
var requestPromise = require('request-promise');

var logger= util.getLogger();

module.exports = {

   /*Controller for getting the shipping addresses in WCS*/
   getShippingAddresses: function(res,req){
	   
    var getAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("getAddress get form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));	
	var method ='GET';
	messageData = {};
	var requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true),method,messageData);
	logger.info("requestCAll " + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));
	requestPromise(requestCall).then(function (data) {
		var body1 = data;
		var checkoutProfileURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CHECKOUT_PROFILE;
		logger.info("checkout profile get form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));	
		var secondRequestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true),"GET",messageData);
		logger.info("requestCAll " + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));
		requestPromise(secondRequestCall).then(function (data) {
			  var result = addressMapper.mapGetAddressJSON(body1,data);
			  res.send({
				"success": true ,
				"result": result,
				});   	
		}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to getShippingAddress(checkoutProfile) in WCS: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to getShippingAddress(checkoutProfile) in WCS: ', error.response.body);
              res.send({ "success": false, "error": error});
            }
        });
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to getShippingAddress(person/contact) in WCS: ', error);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to getShippingAddress(person/contact) in WCS: ', error);
              res.send({ "success": false, "error": error});
            }
	});
 
  },

  /*Controller for adding the shipping address in WCS*/
  addShippingAddress: function(res,req){
	var timeStamp = Math.round(+new Date()/1000);
	var nickName = req.body.addressType + "_" + timeStamp;
    var addAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("addAddress POST form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));	
	var method ='POST';
	var messageData = {
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
	var requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true),method,messageData);
	logger.info("requestCAll " + JSON.stringify(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true)));
	requestPromise(requestCall).then(function (data) {
	  var result = addressMapper.mapAddAddressJSON(data);
	  res.send({
		"success": true ,
		"result": result,
		});   	
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to add Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to add Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error});
            }
	});
 
  },

  /*Controller for updating the shipping address in WCS*/
  updateShippingAddress: function(res,req){
	var uri= req.body.nickName;
    var updateAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + uri;
    logger.info("updateAddress POST form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true));	
	var method ='PUT';
	var messageData = {
		   "firstName" : req.body.firstName,
		   "lastName" : req.body.lastName,
		   "addressType" : req.body.addressType,
		   "zipCode" : req.body.zipCode,
		   "addressLine": req.body.addressLine[0],
		   "city" : req.body.city,
		   "state" : req.body.state,
		   "country" : req.body.country
    };
	var requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true),method,messageData);
	requestPromise(requestCall).then(function (data) {
	  var result = addressMapper.mapUpdateAddressJSON(data);
	  res.send({
		"success": true ,
		"result": result,
		});   	
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to update Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to update Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error});
            }
	});
 
  },
  
   /*Controller for deleting the shipping address in WCS*/
   deleteShippingAddress: function(res,req){
	var uri= req.body.nickName;
    var updateAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS + constants.SLASH + uri;
    logger.info("deleteAddress POST form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true));	
	var method ='DELETE';
	var messageData = {};
	var requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, updateAddressURL, true),method,messageData);
	requestPromise(requestCall).then(function (data) {
	  var result = addressMapper.mapDeleteAddressJSON(data);
	  res.send({
		"success": true ,
		"result": result,
		});   	
	}).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to delete Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to delete Address in WCS: ', error.response.body);
              res.send({ "success": false, "error": error});
            }
	});
 
  },
  
  /*Controller for selecting the shipping address in WCS*/
  selectShippingAddress: function(req,res){

    messageData = {};
    var addressId = req.body.addressId;
	var x_calculationUsage = constants.SHIP_CALC_USAGE;
    var conCatUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_SHIP_INFO;
    var selectShippingAddressURL = util.constructUrl(constants.WCS_HOSTNAME_NOPORT , conCatUrl, false);
    logger.info('selectShippingAddress url ', selectShippingAddressURL);
    var method ='PUT';
    var messageData = {
		"addressId": addressId,
		"orderId": ".",
		"orderItem": [
			{
				"addressId": addressId
			}
		],
		"x_calculationUsage": x_calculationUsage
    };
	var requestCall = util.constructRequest(selectShippingAddressURL,method,messageData)

    requestPromise(requestCall).then(function (data) {
		  var result = addressMapper.mapSelectAddressJSON(data);
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
