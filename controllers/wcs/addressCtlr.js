var constants = require('../../constants/wcs/constants');
var util = require('../../util/wcs/util');
var addressMapper = require('../../json_mappers/wcs/addressMapper');
var request = require('request');
var requestPromise = require('request-promise');

var logger= util.getLogger();

module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in WCS*/
   getShippingAddresses: function(res,req){
	   
    var getAddressURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ADDRESS_DETAILS;
    logger.info("getAddress get form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));	
	var method ='GET';
	var messageData = {};
	var requestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true),method,messageData);
	logger.info("requestCAll " + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, getAddressURL, true));
	requestPromise(requestCall).then(function (data) {
		var body1 = data;
		var checkoutProfileURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CHECKOUT_PROFILE;
		logger.info("checkout profile get form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));	
		var secondRequestCall = util.constructRequest(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true),"GET",messageData);
		logger.info("requestCAll " + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));
		requestPromise(secondRequestCall).then(function (data) {
			  var result = addressMapper.mapAddressJSON(body1,data);
			  res.send({
				"success": true ,
				"result": result,
				});   	
		}).catch(function (error) {
			  logger.error('errors in service to getShippingAddresses in WCS: ', error);
			  res.send({ "success": false, "error": error});
        });
	}).catch(function (error) {
		  logger.error('errors in service to getShippingAddresses in WCS: ', error.response.body);
		  res.send({ "success": false, "error": error.response.body }); 
	});
 
  } 

};
