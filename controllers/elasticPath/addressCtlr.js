
var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var addressMapper = require('../../json_mappers/elasticPath/addressMapper');
var request = require('request');


var logger= util.getLogger();

module.exports = {

  /*controller for adding shipping address in EP*/
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
                  var result = addressMapper.addShippingAddressJSON();  
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
  },

  /*Controller for getting all the shipping address in EP*/
  getShippingAddresses: function(token,req,res){

      messageData = {};

      var conCatUrl = constants.EP_DEFAULT_CART + constants.EP_GET_SHIPPING_ADDRESS_ZOOM;
      var getShippingAddressesURL = util.constructUrl(constants.EP_HOSTNAME, conCatUrl, false);   
      logger.info('getShippingAddresses url',  getShippingAddressesURL);
      request({
        url: getShippingAddressesURL,
        method: 'GET',
        json: messageData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token
        },
      }, function(error, response, body) {
            if (!error) {
                if(!body.errors){

                  var result = addressMapper.getShippingAddressesJSON(body);
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

  },

  /*Controller for deleting shipping address in EP*/
  deleteShippingAddress: function(token,req,res){
      messageData = {};
      var uri= req.body.addressId;
      var deleteShippingAddressURL = util.constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
      logger.info('deleteShippingAddress url',  deleteShippingAddressURL);
      request({
        url: deleteShippingAddressURL,
        method: 'DELETE',
        json: messageData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token
        },
      }, function(error, response, body) {
            if(!error){
              if (!response.body) {
                   var result = addressMapper.deleteShippingAddressJSON(); 
                    res.send({
                      "success": true ,
                      "result": result,                                            
                    });                           
                  }
                  else{
                    logger.error('errors in service to delete address in EP: ', response.body);
                    res.send({ "success": false, "error": response.body });
                  }  
              }else{
                  logger.error('errors in service to delete address in EP: ', error);
                  res.send({ "success": false, "error": error });                        
              }
          });
  },

  /*Controller for updating shipping address in EP*/
  updateShippingAddress: function(token,req,res){

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
  		var uri = req.body.addressId;
  		var updateShippingAddressURL = util.constructUrl(constants.EP_HOSTNAME_CORTEX,uri,false);
		logger.info('updateShippingAddress url',  updateShippingAddressURL);
	    request({
	        url: updateShippingAddressURL,
	        method: 'PUT',
	        json: messageData,
	        headers: {
	          'Content-Type': 'application/json',
	          'Authorization': 'bearer ' + token
	        },
	      }, function(error, response, body) {
	            if(!error){
	              if (!response.body) {
	                   var result = addressMapper.updateShippingAddressJSON();
	                    res.send({
	                      "success": true ,
	                      "result": result,                                            
	                    });                           
	                  }
	                  else{
	                    logger.error('errors in service to update address in EP: ', response.body);
	                    res.send({ "success": false, "error": response.body });
	                  }  
	              }else{
	                  logger.error('errors in service to update address in EP: ', error);
	                  res.send({ "success": false, "error": error });                        
	              }
	          });
  }      

};
