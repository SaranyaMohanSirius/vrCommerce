import constants from '../../constants/wcs/constants';
import {
	getLogger,
	constructUrl,
	constructRequestWithoutToken,
	constructRequestWithToken,
	getTokens
} from '../../util/wcs/util';
import shipModeMapper from '../../json_mappers/wcs/shipModeMapper';
import request from 'request';
import requestPromise from 'request-promise';

let logger= getLogger();

export default {

   /*
    * Method for getting the shipping modes in WCS  
    * Request Method: GET
    */

	getShipModes: function(res,req){
	   
		let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_SHIPMODES_APPEND;
		logger.info("getShipModes post form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, false));		
		let messageData = {};
		let method = "GET";
		let requestCall = constructRequestWithoutToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, false),method,messageData);
		requestPromise(requestCall).then(function (data) {
			  let result = shipModeMapper.mapShipModeJSON(data);
			  res.send({
				"success": true ,
				"result": result,                                            
			  });
		}).catch(function (error) {
				if(error.response.body){
					logger.error('errors in service to get ship modes in WCS: ', body.errors);
					res.send({ "success": false, "error": body.errors });
				}
				else {
					logger.error('errors in service to get ship modes in WCS: ', error);
					res.send({ "success": false, "error": error });
				}
		});   
 
	},

   /*
    * Method for updating shipping modes in WCS  
    * Request Method: PUT
    * Request Params: shipModeId
    */

	updateShipModes: function(res,req){
	   
		let shipModeId = req.body.shipModeId;
		let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_UPDATE_SHIP_INFO;
		logger.info("updateShipModes post form url:" + constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true));		
		let messageData = {
			"shipModeId": shipModeId,
			"x_calculationUsage": constants.SHIP_CALC_USAGE
		};
		let method = "PUT";
		let requestCall = constructRequestWithToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true),method,messageData,getTokens(req));
		requestPromise(requestCall).then(function (data) {
			  res.send({
				"success": true                                           
			  });
		}).catch(function (error) {
					res.send({ "success": false, "error": error });
		});
	 
	}

};
