import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getTokens,
        constructRequestWithToken,
        isJson,
        requiredProtocolData,
       } from '../../util/wcs/util';
import cartMapper from '../../json_mappers/wcs/cartMapper';
import loginController from '../../controllers/wcs/loginCtlr';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default {

   /*
    * Method to add a product to cart in WCS 
    * Request params : userId
    * Request Body : addToCart body as in WCS 
    */

   addToCart: function(req,res){
        logger.info("inside add to cart");
        
        logger.info("req.cookie.userId::"+req.cookies.userId);
        
        //Check if there is a userId already exists by checking the cookie
        if(req.cookies.userId == 'undefined'){
        	//Call the guestIdentityHandler and set the token
        	loginController.guestIdentityHandler(req, res);
        }

        let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART_EXT +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
        let addToCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
        let messageData = req.body;
        let method ='POST';
        logger.info("addToCartUrl:" + addToCartUrl + "messageData: "+ JSON.stringify(messageData));

        let requestCall = constructRequestWithToken(addToCartUrl,method,messageData,getTokens(req))
        requestPromise(requestCall).then(function (messageData) {
            let result = cartMapper.addToCartJSON(messageData); 
            res.send({
                "success": true ,
                "result": result                                          
            });
            }).catch(function (error) {
                if(error.statusCode === 404 || error.statusCode === 400){
                    logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                    res.send({ "success": false, "error": error.response.body });
                }else{
                    logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                    res.send({ "success": false, "error": error.response.body.errors[0] }); 
                } 
            });
    
   },

   
   /* 
    * Method for getting Shopping Cart Item in WCS
    * Request Params : userId 
    * Request Method : GET
    */
  
   shoppingCart: function(req,res){
    
        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART_AT_SELF;
        
         logger.info("ShoppingCart URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let shoppingCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='GET';
        let messageData = {};
        let requestCall = constructRequestWithToken(shoppingCartUrl,method,messageData,getTokens(req));
          
        requestPromise(requestCall).then(function (data) {
              let result = cartMapper.mapShoppingCartJSON(data); 
                  res.send({
                    "success": true ,
                    "result": result                                            
                });   
          }).catch(function (error) {
              if(error.statusCode === 404 || error.statusCode === 400){
                  logger.error('errors in service to shoppingCart in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body });
              }else{
                  logger.error('errors in service to shoppingCart in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body.errors[0] }); 
              } 
          });
  },

  /* 
   *  Method for updating the Cart Item in WCS
   *  Request Params : userId 
   *  Request Method : PUT
   *  Request Body : updateShoppingCart body as in WCS
   */
   
  updateShoppingCartItem: function(req,res){

        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART + constants.WCS_GET_SHOPPINGCART+constants.WCS_UPDATE_CART;
        logger.info("Update ShoppingCart URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let updateCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='PUT';
        let messageData = cartMapper.mapUpdateCartRequestJSON(req.body);
        logger.info("request to wcs" + messageData);
        let requestCall = constructRequestWithToken(updateCartUrl,method,messageData,getTokens(req));
          
        requestPromise(requestCall).then(function (data) {
              let result = cartMapper.mapUpdateCartResponseJSON(data); 
                  res.send({
                    "success": true ,
                    "result": result                                            
                });   
          }).catch(function (error) {
              if(error.statusCode === 404 || error.statusCode === 400){
                  logger.error('errors in service to updateShoppingCartItem in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body });
              }else{
                  logger.error('errors in service to updateShoppingCartItem in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body.errors[0] }); 
              } 
          });
    
  },

  /* 
   *  Method for deleting Shopping Cart Item in WCS
   *  Request Params : userId
   *  Request Method : PUT
   *  Request Body : deleteShoppingCartItem body as in WCS
   */

  deleteShoppingCartItem: function(req,res){

        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART + constants.WCS_GET_SHOPPINGCART+constants.WCS_DELETE_CART;
        logger.info("Delete ShoppingCart URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let updateCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='PUT';
        let messageData = cartMapper.mapDeleteCartRequestJSON(req.body);
        logger.info("request to wcs" + JSON.stringify(messageData));
        let requestCall = constructRequestWithToken(updateCartUrl,method,messageData,getTokens(req));
          
        requestPromise(requestCall).then(function (data) {
          result = cartMapper.mapDeleteCartResponseJSON(data);
                  res.send({
                    "success": true ,
                    "result": result                                            
                });   
          }).catch(function (error) {
              if(error.statusCode === 404 || error.statusCode === 400){
                  logger.error('errors in service to deleteShoppingCartItem in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body });
              }else{
                  logger.error('errors in service to deleteShoppingCartItem in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body.errors[0] }); 
              } 
          });
  },

  /* 
   * Method for deleting All Shopping Cart Items in WCS
   * Request Params : userId 
   * Request Method : DELETE
   */
  
  deleteAllShoppingCartItem: function(req,res){
    
    let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART + constants.WCS_GET_SHOPPINGCART;
          logger.info("Delete All ShoppingCart Item URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
          let updateCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
          let method ='DELETE';
          let messageData = {};
          let requestCall = constructRequestWithToken(updateCartUrl,method,messageData,getTokens(req));
          
        requestPromise(requestCall).then(function (data) {
          let result = cartMapper.mapDeleteAllCartJSON(data); 
                
                  res.send({
                    "success": true ,
                    "result": result                                           
                });   
          }).catch(function (error) {
              if(error.statusCode === 404 || error.statusCode === 400){
                  logger.error('errors in service to deleteAllShoppingCartItem in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body });
              }else{
                  logger.error('errors in service to deleteAllShoppingCartItem in WCS: ', JSON.stringify(error));
                  res.send({ "success": false, "error": error.response.body.errors[0] }); 
              } 
          });
  },

  /* 
   * Method for submitting order in WCS
   * Request Params : userId 
   * Request Method : POST
   * Request Body: 
   *   {
   *     "orderId": "21067"
   *   }
   */  

  submitOrder : function(req,res){

    let concatpreCheckOutURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART_EXT + constants.WCS_GET_SHOPPINGCART + constants.WCS_CART_PRECHECKOUT;
    let preCheckOutUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatpreCheckOutURL,true);
    let methodForPreCheckOut ='PUT';

    let concatCheckOutURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART_EXT + constants.WCS_GET_SHOPPINGCART + constants.WCS_CART_CHECKOUT;
    let checkOutUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatCheckOutURL,true)
    let methodForCheckOut = 'POST';

    let authToken = getTokens(req);

      /* 
       * Method for preparing order for checkout in WCS
       * Request Method : PUT
       */

      let preCheckOut = function(authToken){
        return new Promise(function(resolve,reject){

              logger.info("inside preCheckOut of submitOrder"+preCheckOutUrl);

              let messageData = req.body;
              logger.info("messageData: "+ messageData);

              let requestCall = constructRequestWithToken(preCheckOutUrl,methodForPreCheckOut,messageData,authToken)
              requestPromise(requestCall).then(function (data) {
                    resolve(data);
                  }).catch(function (error) {
                      if(error.statusCode === 404 || error.statusCode === 400){
                          logger.error('errors in service to preCheckOut of submitOrder in WCS: ', JSON.stringify(error));
                          res.send({ "success": false, "error": error.response.body });
                      }else{
                          logger.error('errors in service to preCheckOut of submitOrder in WCS: ', JSON.stringify(error));
                          res.send({ "success": false, "error": error.response.body.errors[0] }); 
                      } 
                  });
              });
        }

        /* 
         * Method for checkout in WCS
         * Request Method : POST
         */
        
        let checkOut = function(data, authToken){
          return new Promise(function(resolve,reject){

                logger.info("inside checkOut of submitOrder"+checkOutUrl+ "DATA: " + JSON.stringify(data));

                let requestCall = constructRequestWithToken(checkOutUrl,methodForCheckOut,data,authToken)
                requestPromise(requestCall).then(function (result) {
                    
                    return getOrderConfirmationDetails(result, authToken);
                    }).catch(function (error) {
                        if(error.statusCode === 404 || error.statusCode === 400){
                            logger.error('errors in service to checkOut of submitOrder in WCS: ', JSON.stringify(error));
                            res.send({ "success": false, "error": error.response.body });
                        }else{
                            logger.error('errors in service to checkOut of submitOrder in WCS: ', JSON.stringify(error));
                            res.send({ "success": false, "error": error.response.body.errors[0] }); 
                        } 
                    });
                });
        }

        /* 
         * Method for Order Confirmation in WCS
         * Request Method : GET
         */

        let getOrderConfirmationDetails = function(data, authToken){
          return new Promise(function(resolve, reject){

            let concatOrderDetailsUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ORDER + data.orderId;
            let getOrderConfirmationDetailsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatOrderDetailsUrl,true);
            let methodForConfirmationDetails = 'GET';

            logger.info("inside getOrderConfirmationDetails of submitOrder: "+getOrderConfirmationDetailsUrl);
            logger.info("data: "+JSON.stringify(data) + "authToken: " +JSON.stringify(authToken));
            let messageBody = {};
            let requestCall = constructRequestWithToken(getOrderConfirmationDetailsUrl,methodForConfirmationDetails,messageBody,authToken)
                requestPromise(requestCall).then(function (result) {
                    
                    if(isJson(result)){ result = JSON.parse(result);}
                    logger.info(JSON.stringify(result));

                    let objectToBePassed = requiredProtocolData(result);
                    logger.info(JSON.stringify(objectToBePassed));
                    
                    let finalResponse = cartMapper.mapOrderConfirmationResponseJSON(result,objectToBePassed);
                    logger.info("finalResponse: "+JSON.stringify(finalResponse));
                    res.send({
                      "success": true,
                      "result": finalResponse
                    });
                    }).catch(function (error) {
                        if(error.statusCode === 404 || error.statusCode === 400){
                            logger.error('errors in service to getOrderConfirmationDetails of submitOrder in WCS: ', JSON.stringify(error));
                            res.send({ "success": false, "error": error.response.body });
                        }else{
                            logger.error('errors in service to getOrderConfirmationDetails of submitOrder in WCS: ', JSON.stringify(error));
                            res.send({ "success": false, "error": error.response.body.errors[0] }); 
                        } 
                    });
                  });
               }

               preCheckOut(authToken)
              .then(function(data){
                return checkOut(data, authToken);
              });
          },
//--------------------------------------------------------------------------

         /* 
          * Method for getting Order Payment Summary in WCS
          * Request Method : GET
          */
          
         orderPaymentSummary: function(req,res){
          
              let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART_AT_SELF;
              
              logger.info("orderPaymentSummary URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
              let orderPaymentSummaryUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
              let method ='GET';
              let messageData = {};
              let requestCall = constructRequestWithToken(orderPaymentSummaryUrl,method,messageData,getTokens(req));
                
              requestPromise(requestCall).then(function (data) {
                    let result = cartMapper.mapOrderPaymentSummaryJSON(data); 
                        res.send({
                          "success": true ,
                          "result": result                                            
                      });   
                }).catch(function (error) {
                              if(error.statusCode === 404 || error.statusCode === 400){
                                  logger.error('errors in service to orderPaymentSummary in WCS: ', JSON.stringify(error));
                                  res.send({ "success": false, "error": error.response.body });
                              }else{
                                  logger.error('errors in service to orderPaymentSummary in WCS: ', JSON.stringify(error));
                                  res.send({ "success": false, "error": error.response.body.errors[0] }); 
                              } 
                   });
           }, 

         /* 
          * Method for getting Order Review in WCS
          * Request Method : POST
          */
          
         orderReview: function(req,res){

              let data = req.body;
              let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ORDER + data.orderId;
              
              logger.info("orderReview URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
              let orderReviewUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
              let method ='GET';
              let messageData = {};
              let requestCall = constructRequestWithToken(orderReviewUrl,method,messageData,getTokens(req));
              logger.info("review: "+JSON.stringify(requestCall));
              requestPromise(requestCall).then(function (result) {
                
                    if(isJson(result)){ result = JSON.parse(result);}
                    logger.info(JSON.stringify(result));

                    let objectToBePassed = requiredProtocolData(result);
                    logger.info(JSON.stringify(objectToBePassed));

                    let finalResponse = cartMapper.mapOrderConfirmationResponseJSON(result,objectToBePassed);
                    logger.info("finalResponse: "+JSON.stringify(finalResponse));
                    res.send({
                      "success": true,
                      "result": finalResponse
                    });
                }).catch(function (error) {
                              if(error.statusCode === 404 || error.statusCode === 400){
                                  logger.error('errors in service to orderReview in WCS: ', JSON.stringify(error));
                                  res.send({ "success": false, "error": error.response.body });
                              }else{
                                  logger.error('errors in service to orderReview in WCS: ', JSON.stringify(error));
                                  res.send({ "success": false, "error": error.response.body.errors[0] }); 
                              } 
                   });
           }, 

};


