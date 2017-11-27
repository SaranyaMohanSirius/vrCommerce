var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var shipModeMapper = require('../../json_mappers/elasticPath/shipModeMapper');
var request = require('request');
var logger= util.getLogger();

module.exports = {

  /*Controller for getting the shipping methods in EP*/
   getShippingMethods: function(token,res,req){
		logger.info('Shipping methods EP url: ', util.constructUrl(constants.EP_HOSTNAME_CORTEX, constants.EP_CART, false));
		messageData = {};
		request({
		  url: util.constructUrl(constants.EP_HOSTNAME_CORTEX, constants.EP_CART, false),
		  method: 'GET',
		  json: messageData,
		  headers: {
			'Content-Type': 'application/json',
			'Authorization': 'bearer ' + token
		  },
		}, function(error, response, body) {
			  if (!error) {
				if (!body.errors) {					
					for(var i =0 ; i < body.links.length; i++){
						
						if(body.links[i].rel == 'order'){
							console.log("getShippingMethods post form url:" + util.constructUrl(body.links[i].href + constants.EP_SHIPMODE_ZOOM, false));	
							messageData = {};
							request({
							  url: util.constructUrl(body.links[i].href + constants.EP_SHIPMODE_ZOOM, false),
							  method: 'GET',
							  json: messageData,
							  headers: {
								'Content-Type': 'application/json',
								'Authorization': 'bearer ' + token
							  },
							}, function(error, response, body) {
								  if (!error) {
									if (!body.errors) {
										  var result = shipModeMapper.mapShipModeJSON(body); 
										  res.send({
											"success": true ,
											"result": result,                                            
										  });                            

									}
									else {
									  logger.error('errors in service to get Shipping methods in EP: ', body.errors);
									  res.send({ "success": false, "error": body.errors });
									}
								  } else {
									logger.error('errors in service to get Shipping methods in EP: ', error);
									res.send({ "success": false, "error": error });
								  }
							});
						}
					}
				}
			  }
		});
 
    } 

};
