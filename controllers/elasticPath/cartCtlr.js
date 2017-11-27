
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
  /**
   * Controller to add a product to cart  in EP  
   */
  addToCart: function(req,res){
  var token=constants.EP_ACCESS_TOKEN;
  var requests = [];
  for(var i = 0; i < req.body.orderItem.length; i++) {
  var messageData = [];
  var concattUrl =  req.body.orderItem[i].productId + "?followlocation";
   messageData= {"quantity":req.body.orderItem[i].quantity};
   requests.push(this.getAddToCartRequestPromise(token,messageData,concattUrl));
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

},

getAddToCartRequestPromise: function(authToken,data,url) {
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
},

/**
 * Get Shopping Cart Details
 */

getShoppingCart: function(req,res){
    var token=constants.EP_ACCESS_TOKEN;
    messageData = {};
    var concattUrl= constants.EP_SHOPPING_CART+constants.EP_SHOPPING_CART_ZOOM;
    var defaultCartURL = util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
    
    logger.info('Get shoppingCart form url',  defaultCartURL);
    request({
      url: defaultCartURL,
      method: 'GET',
      json: messageData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      },
    }, function(error, response, body) {
            if (!error) {
                if(!body.errors){
                  var result = cartMapper.shoppingCartJSON(body); 
                  res.send({
                    "success": true ,
                    "result": result,                                            
                  });                           
                }
                else{
                  logger.error('errors in service to GetShoppingCart in EP: ', body.errors);								
                  res.send({ "success": false, "error": body.errors });
                }
            }else{
                logger.error('errors in service to GetShoppingCart in EP: ', error);
                res.send({ "success": false, "error": error });                        
            }
        });
    },
    
    /**
    *   Update Shopping Cart Item Details
    */

    updateShoppingCartItem: function(req,res){
      var token=constants.EP_ACCESS_TOKEN;
      messageData = {"quantity":req.body.lineItem[0].quantity};
      var uri= req.body.lineItem[0].lineItemId;
      var updateCartItemURL = util.constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
      logger.info('updateShoppingCart form url',  updateCartItemURL);
      request({
        url: updateCartItemURL,
        method: 'PUT',
        json: messageData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token
        },
      }, function(error, response, body) {
            if(!error){
              if (!response.body) {
                   var result = cartMapper.updateCartItemJSON(uri); 
                    res.send({
                      "success": true ,
                      "result": result,                                            
                    });                           
                  }
                  else{
                    logger.error('errors in service to updateShoppingCart Item in EP: ', response.body);
                    res.send({ "success": false, "error": response.body });
                  }  
              }else{
                  logger.error('errors in service to updateShoppingCart Item in EP: ', error);
                  res.send({ "success": false, "error": error });                        
              }
          });
      },
    /**
    *   Delete item from Shopping Cart 
    */

    deleteShoppingCartItem: function(req,res){
            var token=constants.EP_ACCESS_TOKEN;
            messageData = {};
            var uri= req.body.lineItem[0].lineItemId;
            var deleteCartItemURL = util.constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
            logger.info('delete Item form url',  deleteCartItemURL);
            request({
              url: deleteCartItemURL,
              method: 'DELETE',
              json: messageData,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
              },
            }, function(error, response, body) {
                  if(!error){
                    if (!response.body) {
                         var result = cartMapper.deleteCartItemJSON(); 
                          res.send({
                            "success": true ,
                            "result": result,                                            
                          });                           
                        }
                        else{
                          logger.error('errors in service to delete Item Shopping Cart Item in EP: ', response.body);
                          res.send({ "success": false, "error": response.body });
                        }  
                    }else{
                        logger.error('errors in service to delete Item Shopping Cart in EP: ', error);
                        res.send({ "success": false, "error": error });                        
                    }
                });
            },
            
      /**
      *   Delete All item from Shopping Cart 
      */

    deleteAllShoppingCartItem: function(req,res){
            var token=constants.EP_ACCESS_TOKEN;
            messageData = {};
            var uri= req.body.orderId;
            var deleteAllCartItemURL = util.constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
            logger.info('delete All Item form url',  deleteAllCartItemURL);
            request({
              url: deleteAllCartItemURL,
              method: 'DELETE',
              json: messageData,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
              },
            }, function(error, response, body) {
                  if(!error){
                    if (!response.body) {
                         var result = cartMapper.deleteAllCartItemJSON(); 
                          res.send({
                            "success": true ,
                            "result": result,                                            
                          });                           
                        }
                        else{
                          logger.error('errors in service to delete All Item Shopping Cart Item in EP: ', response.body);
                          res.send({ "success": false, "error": response.body });
                        }  
                    }else{
                        logger.error('errors in service to delete All Item Shopping Cart in EP: ', error);
                        res.send({ "success": false, "error": error });                        
                    }
                });
            }
};
