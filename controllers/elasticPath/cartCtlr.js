
var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var cartMapper = require('../../json_mappers/elasticPath/cartMapper');
var request = require('request');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

var logger= util.getLogger();
var Promise = require("bluebird");
var requestPromise = require('request-promise').defaults({ simple: false });

module.exports = {
  /*Controller to add a product to cart  in EP  */
  addToCart: function(token,req,res){
  var requests = [];
  for(var i = 0; i < req.body.orderItem.length; i++) {
  var messageData = [];
  var concattUrl =  req.body.orderItem[i].productId + "?followlocation";
   messageData= {"quantity":req.body.orderItem[i].quantity};
   requests.push(getMyData(token,messageData,concattUrl));
    }

function getMyData(authToken,data,url) {
    return new Promise(function(resolve,reject){
        request.post({
            url: util.constructUrl(constants.EP_HOSTNAME_CORTEX, url, false),
            json: JSON.parse(JSON.stringify(data)),
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + authToken
        }
      },function(error, response, body) {
        if (!error) {
            if (!body.errors) {
                    return resolve({success:true, url:url,body:body})
            }
           else {
              logger.error('Errors in request getRequest EP: ', body.errors);
               return resolve({success:false, error:body.errors})
            }
          } else {
            logger.error('errors in service to postSearchresultsFom in EP: ', error);
            return resolve({success:false, error:error})
          }       
      });
    });   
}
 Promise.all(requests).then(function(results) {
  //Can be Handled based on the results -- Leaving this as empty
  /*for (var i = 0; i < results.length; i++) {
    
    logger.info('Joseph Results' + JSON.stringify(results[i]));
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
