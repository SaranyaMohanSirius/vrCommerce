import constants from '../../constants/wcs/constants';
import util from '../../util/wcs/util';
import shipModeMapper from '../../json_mappers/wcs/shipModeMapper';
import request from 'request';
import requestPromise from 'request-promise';
let logger= util.getLogger();

module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in WCS*/
	getShipModes: function(res,req){
	   
		let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_SHIPMODES_APPEND;
		logger.info("getShipModes post form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, false));		
		let messageData = {};
		let method = "GET";
		let requestCall = util.constructRequestWithoutToken(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, false),method,messageData);
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

	updateShipModes: function(res,req){
	   
		let shipModeId = req.query.shipModeId;
		let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_UPDATE_SHIP_INFO;
		logger.info("updateShipModes post form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true));		
		let messageData = {
			"shipModeId": shipModeId,
			"x_calculationUsage": constants.SHIP_CALC_USAGE
		};
		let method = "PUT";
		let requestCall = util.constructRequestWithToken(util.constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true),method,messageData);
		requestPromise(requestCall).then(function (data) {
			  res.send({
				"success": true ,
				"result": {
					'updateShipModeMsg' : constants.WCS_SHIPMODE_SELECTED
				},                                            
			  });
		}).catch(function (error) {
				if(error.response.body){
					logger.error('errors in service to get ship modes in WCS: ', error.response.body);
					res.send({ "success": false, "error": error.response.body });
				}
			    else {
					logger.error('errors in service to get ship modes in WCS: ', error);
					res.send({ "success": false, "error": error });
			  }
		});
	 
	}

};
