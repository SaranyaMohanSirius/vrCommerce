var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var cartMapper = require('../../json_mappers/elasticPath/cartMapper');
var request = require('request');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;
var winston = require('winston');
var logger = new (winston.Logger)({
   transports: [
     new (winston.transports.Console)(),
     new (winston.transports.File)({ filename: 'trace.log' })
   ]
});
var Promise = require("bluebird");
var request = require('request-promise');

module.exports = {
  /*Controller to add a product to cart  in EP  */
  addToCart: function(token,req,res){
  var requests = [];
  for(var i = 0; i < req.body.orderItem.length; i++) {
  var messageData = [];
  var concattUrl =  req.body.orderItem[i].productId + "?followlocation";
    logger.info("addToCart URL" + util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false));
    messageData= {"quantity":req.body.orderItem[i].quantity};
    requests.push({ url: util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false),
      method: 'POST',
      json: JSON.parse(JSON.stringify(messageData)),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      }
    });
    }

  Promise.all(requests).then(function(results) {
    /*
    //Can be Handled based on the results -- Leaving this as empty
    for (var i = 0; i < results.length; i++) {
     
    } */
     var result = cartMapper.addToCartJSON(); 
                                  res.send({
                                    "success": true ,
                                    "result": result,                                            
                                  });
  }, function(err) {
            logger.error('errors in service hit to login service' + err);
            res.send({ "success": false, "error": err });
  });
}
};
