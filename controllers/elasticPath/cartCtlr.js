
var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var cartMapper = require('../../json_mappers/elasticPath/cartMapper');
var requestPromise = require('request-promise');
var Promise = require("bluebird");

var logger= util.getLogger();

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
  var addToCartUrl=util.constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false)
   messageData= {"quantity":req.body.orderItem[i].quantity};
   requests.push(this.getAddToCartRequestPromise(token,JSON.parse(JSON.stringify(messageData)),addToCartUrl));
    }
  Promise.all(requests).then(function(results) {
    var result = cartMapper.addToCartJSON(results); 
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
    var requestCall = util.constructRequest(url,"POST",data,authToken)
    requestPromise(requestCall).then(function (data) {
          var result = cartMapper.shoppingCartJSON(data); 
             return resolve({success:true, url:url,body:data});
      }).catch(function (error) {
          logger.error('errors in service to updateShoppingCartItem in EP: ', error);
          return resolve({success:false, error:error})
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
    var method ='GET';
    var requestCall = util.constructRequest(defaultCartURL,method,messageData,token)
    requestPromise(requestCall).then(function (data) {
          var result = cartMapper.shoppingCartJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
          if(error.response.body){
            logger.error('errors in service to getShoppingCart in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body }); 
          }else{
            logger.error('errors in service to getShoppingCart in EP: ', error);
            res.send({ "success": false, "error": error});
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
      var method ='PUT';
      var requestCall = util.constructRequest(updateCartItemURL,method,messageData,token)
      requestPromise(requestCall).then(function (data) {
              var result = cartMapper.updateCartItemJSON(uri); 
              res.send({
                "success": true ,
                "result": result,                                            
              });   
        }).catch(function (error) {
          if(error.response.body){
            logger.error('errors in service to updateShoppingCartItem in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body }); 
          }else{
            logger.error('errors in service to updateShoppingCartItem in EP: ', error);
            res.send({ "success": false, "error": error});
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
            var method ='DELETE';
            var requestCall = util.constructRequest(deleteCartItemURL,method,messageData,token)
            requestPromise(requestCall).then(function (data) {
                var result = cartMapper.deleteCartItemJSON(); 
                res.send({
                  "success": true ,
                  "result": result,                                            
                });       
              }).catch(function (error) {
                if(error.response.body){
                  logger.error('errors in service to DeleteItem in EP: ', error.response.body);
                  res.send({ "success": false, "error": error.response.body }); 
                }else{
                  logger.error('errors in service to DeleteItem in EP: ', error);
                  res.send({ "success": false, "error": error});
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
            var method ='DELETE';
            var requestCall = util.constructRequest(deleteAllCartItemURL,method,messageData,token)
            requestPromise(requestCall).then(function (data) {
                var result = cartMapper.deleteAllCartItemJSON(); 
                res.send({
                  "success": true ,
                  "result": result,                                            
                });      
              }).catch(function (error) {
                  if(error.response.body){
                    logger.error('errors in service to DeleteAllItem in EP: ', error.response.body);
                    res.send({ "success": false, "error": error.response.body }); 
                  }else{
                    logger.error('errors in service to DeleteAllItem in EP: ', error);
                    res.send({ "success": false, "error": error});
                  }
              });
            }
};
