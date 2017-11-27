var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var request = require('request');

var logger= util.getLogger();

module.exports = {

  guestLogin: function(res) {

	messageData = {};
	logger.info("url:" + util.constructUrl(constants.EP_HOSTNAME, constants.EP_GUEST_LOGIN, false));
	
	request({
      url: util.constructUrl(constants.EP_HOSTNAME, constants.EP_GUEST_LOGIN, false),
      method: 'POST',
	  json: messageData,
	  headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'none'
      },
    }, function(error, response, body) {
      if (!error) {
        if (!body.errors) {
		  logger.info("access_token: " + body.access_token);
		  res.send({
                "success": true,
                "authorization_code": body.access_token
              });
		   		
			  
		  
        } else {
          logger.error('errors in service hit to login service'+body.errors);
          res.send({ "success": false, "error": body.errors });
        }
      } else {
        logger.error('commerce error'+error);
        res.send({ "success": false, "error": error });
      }
    });

  }

};
