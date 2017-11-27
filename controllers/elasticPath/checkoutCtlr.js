
var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var checkoutMapper = require('../../json_mappers/elasticPath/checkoutMapper');
var request = require('request');
var _ = require("underscore");


var logger= util.getLogger();

module.exports = {


  addShippingAddress: function(token,req,res){

      messageData = {
         "address":{  
            "country-name": req.body.country,
            "extended-address":"",
            "locality": req.body.city,
            "postal-code": req.body.zipCode,
            "region": req.body.state,
            "street-address": req.body.addressLine[0]
         },
         "name":{  
            "family-name": req.body.lastName,
            "given-name": req.body.firstName
         }
      };
      var addShippingAddressURL = util.constructUrl(constants.EP_HOSTNAME, constants.EP_ADD_SHIPPING_ADDRESS, false);   
      logger.info('addShippingAddress url',  addShippingAddressURL);
      request({
        url: addShippingAddressURL,
        method: 'POST',
        json: messageData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token
        },
      }, function(error, response, body) {
            if (!error) {
                if(!body.errors){

                  var result = checkoutMapper.addShippingAddressJSON();  
                  res.send({
                    "success": true ,
                    "result": result,
                  });                           
                }
                else{
                  logger.error('errors in service to addShippingAddress in EP: ', body.errors);                
                  res.send({ "success": false, "error": body.errors });
                }
            }else{
                logger.error('errors in service to addShippingAddress in EP: ', error);
                res.send({ "success": false, "error": error });                        
            }

        });
  }    

};
