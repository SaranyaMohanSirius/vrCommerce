var constants = require('../../constants/wcs/constants');
var util = require('../../util/wcs/util');
var shipModeMapper = require('../../json_mappers/wcs/shipModeMapper');
var request = require('request');
var q = require('q');
var gampee = require("gampee");
var rp = require('request-promise');
var Promise = require('promise');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

var logger= util.getLogger();

module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in WCS*/
   getShipModes: function(res,req){
	   
    var concatURL = constants.WCS_SHIPMODES + constants.WCS_STORE_ID + constants.WCS_SHIPMODES_APPEND;
    logger.info("getProductDetails post form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, false));	
	
	messageData = {};
    request({
      url: util.constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, false),
      method: 'GET',
      json: messageData,
      headers: {
        'Content-Type': 'application/json',
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
				logger.error('errors in service to get ship modes in WCS: ', body.errors);
				res.send({ "success": false, "error": body.errors });
            }
          } else {
				logger.error('errors in service to get ship modes in WCS: ', error);
				res.send({ "success": false, "error": error });
          }
    });
   
 
  } 

};
