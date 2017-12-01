import constants from '../../constants/elasticPath/constants';
import util from '../../util/elasticPath/util';
import shipModeMapper from '../../json_mappers/elasticPath/shipModeMapper';
import request from 'request';
let logger= util.getLogger();
import requestPromise from 'request-promise';

module.exports = {

  /*Controller for getting the shipping methods in EP*/
   getShippingMethods: function(token,res,req){
		console.log(token);
		let concatURL = constants.EP_CART + constants.EP_SHIPMODE_ZOOM;
		logger.info('Shipping methods EP url: ', util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false));
		let messageData = {};
		let method = "GET";
		let requestCall = util.constructRequest(util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false),method,messageData,token);
		
		requestPromise(requestCall).then(function (data) {
			  let result = shipModeMapper.mapShipModeJSON(data); 
			  res.send({
				"success": true ,
				"result": result,                                            
			  });                            
		}).catch(function (error) {
			if(error.response){
				if(undefined != error.response.body && null != error.response.body){
					logger.error('errors in service to get Shipping methods in EP: ', error.response.body);
					res.send({ "success": false, "error": body.errors });
				}
			}
			else {
				logger.error('errors in service to get Shipping methods in EP: ', error);
				res.send({ "success": false, "error": error });
			}
		});
	},

	/*Controller for updating the shipping method in EP*/
   updateShippingMethods: function(token,res,req){
		let url = req.query.shipModeId + constants.EP_FOLLOW_LOCATION;
		logger.info('Update Shipping method EP url: ', util.constructUrl(constants.EP_HOSTNAME_CORTEX, url, false));
		let messageData = {};
		let method = "POST";
		let requestCall = util.constructRequest(util.constructUrl(constants.EP_HOSTNAME_CORTEX, url, false),method,messageData,token);
		requestPromise(requestCall).then(function (data) {
			  res.send({
				"success": true ,
				"result": {
					'updateShipModeMsg' : constants.EP_SHIPMODE_SELECTED
				},                                            
			  }); 
		}).catch(function (error) {
			if(error.response.body){
				  logger.error('errors in service to get Shipping methods in EP: ', error.response.body);
				  res.send({ "success": false, "error": error.response.body });			
			 }else{
				logger.error('errors in service to get Shipping methods in EP: ', error);
				res.send({ "success": false, "error": error });			 
			 }
		});
    }

};
