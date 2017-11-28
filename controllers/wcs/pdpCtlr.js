var constants = require('../../constants/wcs/constants');
var util = require('../../util/wcs/util');
var pdpMapper = require('../../json_mappers/wcs/pdpMapper');
var request = require('request');

var globalcount = 0;

var logger= util.getLogger();

module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in WCS*/
   getProductDetails: function(res,productId){
	   
    var concatURL = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_PRODUCT_DETAILS_APPEND + productId + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    logger.info("getProductDetails post form url:" + util.constructUrl(constants.WCS_HOSTNAME, concatURL, false));	
	messageData = {};
    request({
      url: util.constructUrl(constants.WCS_HOSTNAME, concatURL, false),
      method: 'GET',
      json: messageData,
      headers: {
        'Content-Type': 'application/json',
      },
    }, function(error, response, body) {
          if (!error) {
            if (!body.errors) {
				var body1 = body;
				concatURL = constants.WCS_SHIPMODES + constants.WCS_STORE_ID + constants.WCS_INV_AVL + productId;
				logger.info("getInvAvl post form url:" + util.constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, false));	
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
							  var result = pdpMapper.mapPdpJSON(body1,body);
							  res.send({
								"success": true ,
								"result": result,                                            
							  });
					    }
						else {
							logger.error('errors in service to get product details in WCS: ', body.errors);
							res.send({ "success": false, "error": body.errors });
						}
					} else {
						logger.error('errors in service to get product details in WCS: ', error);
						res.send({ "success": false, "error": error });
					}
				});
			}
            else {
			  logger.error('errors in service to get product details in WCS: ', body.errors);
              res.send({ "success": false, "error": body.errors });
            }
          } else {
				logger.error('errors in service to get product details in WCS: ', error);
				res.send({ "success": false, "error": error });
          }
    });
   
 
  } 

};
