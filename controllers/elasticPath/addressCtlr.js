import requestPromise from 'request-promise';
import constants from '../../constants/elasticPath/constants';
import addressMapper from '../../json_mappers/elasticPath/addressMapper';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
let logger=getLogger();


module.exports = {

  /*controller for adding shipping address in EP*/
  addShippingAddress: function(token,req,res){

    let  messageData = {
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
      let addShippingAddressURL = constructUrl(constants.EP_HOSTNAME, constants.EP_ADD_SHIPPING_ADDRESS, false);   
      logger.info('addShippingAddress url: ',  addShippingAddressURL);
      let method ='POST';
      let requestCall = constructRequest(addShippingAddressURL,method,messageData,token)

      requestPromise(requestCall).then(function (data) {
         let result = addressMapper.addShippingAddressJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to addShippingAddress in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to addShippingAddress in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });


  },

  /*Controller for getting all the shipping address in EP*/
  getShippingAddresses: function(token,req,res){

      let messageData = {};

      let conCatUrl = req.query.orderId + constants.EP_GET_SHIPPING_ADDRESS_ZOOM;
      let getShippingAddressesURL = constructUrl(constants.EP_HOSTNAME_CORTEX, conCatUrl, false);   
      logger.info('getShippingAddresses url: ',  getShippingAddressesURL);
      let method ='GET';
      let requestCall = constructRequest(getShippingAddressesURL,method,messageData,token)

      requestPromise(requestCall).then(function (data) {
         let result = addressMapper.getShippingAddressesJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to get ShippingAddress in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to get ShippingAddress in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });
  },

  /*Controller for deleting shipping address in EP*/
  deleteShippingAddress: function(token,req,res){
      let messageData = {};
      let uri= req.body.addressId;
      let deleteShippingAddressURL = constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
      logger.info('deleteShippingAddress url: ',  deleteShippingAddressURL);
      let method ='DELETE';
      let requestCall = constructRequest(deleteShippingAddressURL,method,messageData,token)

      requestPromise(requestCall).then(function (data) {
             let result = addressMapper.deleteShippingAddressJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to delete address in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors service to delete address in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });
  },

  /*Controller for updating shipping address in EP*/
  updateShippingAddress: function(token,req,res){

  	  let messageData = {
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
  		let uri = req.body.addressId;
  		let updateShippingAddressURL = constructUrl(constants.EP_HOSTNAME_CORTEX,uri,false);
  		logger.info('updateShippingAddress url',  updateShippingAddressURL);
      let method ='PUT';
      let requestCall = constructRequest(updateShippingAddressURL,method,messageData,token)

      requestPromise(requestCall).then(function (data) {
             let result = addressMapper.updateShippingAddressJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to update address in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to update address in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });

  },

  /*Controller for selecting the shipping address in EP*/
  selectShippingAddress: function(token,req,res){

    let messageData = {};
    let addressId = req.body.addressId;

    let conCatUrl = req.body.orderId + constants.EP_GET_SHIPPING_ADDRESS_SELECTOR_ZOOM;

    let selectShippingAddressURL = constructUrl(constants.EP_HOSTNAME_CORTEX , conCatUrl, false);
    logger.info('selectShippingAddress url ', selectShippingAddressURL);
    let method ='GET';
    let requestCall = constructRequest(selectShippingAddressURL,method,messageData,token)

    requestPromise(requestCall).then(function (data) {
        let uri = data._element[0]._destinationinfo[0]._selector[0].self.uri;
        let concatURL = uri  + addressId + constants.EP_FOLLOW_LOCATION;
        let shippingAddressSelectURL = constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
        logger.info('shipping address select post url ', shippingAddressSelectURL);

         let messageData = {};
         let secondRequestCall = constructRequest(shippingAddressSelectURL,"POST",messageData,token)
         return requestPromise(secondRequestCall).then(function (data) {
             let result = addressMapper.selectShippingAddressJSON();
              res.send({
                "success": true ,
                "result": result,                                            
              });                              
            }).catch(function (error) {
                if(error.response.body){
                  logger.error('errors in service while selecting shipping address in EP: ', error.response.body);
                  res.send({ "success": false, "error": error.response.body }); 
                }else{
                  logger.error('errors in service while selecting shipping address in EP: ', error);
                  res.send({ "success": false, "error": error});
                }
            });
      }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to get shipping address selector in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to get shipping address selector in EP: ', error);
              res.send({ "success": false, "error": error});
            }
      });

  }      

};
