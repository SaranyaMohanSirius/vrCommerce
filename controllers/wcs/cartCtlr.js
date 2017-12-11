import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
        constructRequestWithToken,
        isJson,
       } from '../../util/wcs/util';
import cartMapper from '../../json_mappers/wcs/cartMapper';
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

        let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART_EXT +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
        let addToCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
        let userId = req.query.userId;
        let messageData = req.body;
        let method ='POST';
        logger.info("addToCartUrl:" + addToCartUrl +"userId: "+ userId + "messageData: "+ JSON.stringify(messageData));

        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){

                logger.info("authTokens: "+JSON.stringify(authToken));
                let requestCall = constructRequestWithToken(addToCartUrl,method,messageData,authToken)
                requestPromise(requestCall).then(function (messageData) {
                    let result = cartMapper.addToCartJSON(messageData); 
                    res.send({
                        "success": true ,
                        "result": result                                          
                    });
                    }).catch(function (error) {
                        logger.error('errors in service to addToCart in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0]}); 
                    });
                });
        }
    
   },

   /* 
    * Method for getting Shopping Cart Item in WCS
    * Request Params : userId 
    * Request Method : GET
    */
  
   shoppingCart: function(req,res){
    
        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART + constants.WCS_GET_SHOPPINGCART;
        
        getAuthTokensFromDB(req.query.userId).then(function(result){
        logger.info("ShoppingCart URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let shoppingCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='GET';
        let messageData = {};
        let requestCall = constructRequestWithToken(shoppingCartUrl,method,messageData,result);
          
        requestPromise(requestCall).then(function (data) {
              let result = cartMapper.mapShoppingCartJSON(data); 
                  res.send({
                    "success": true ,
                    "result": result                                            
                });   
          }).catch(function (error) {
              logger.error('errors in service to getShoppingCart in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] }); 
          });
    }).catch(function (error) {
              logger.error('errors in service to getShoppingCart in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] }); 
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
        getAuthTokensFromDB(req.query.userId).then(function(result){
        logger.info("Update ShoppingCart URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let updateCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='PUT';
        let messageData = cartMapper.mapUpdateCartRequestJSON(req.body);
        logger.info("request to wcs" + messageData);
        let requestCall = constructRequestWithToken(updateCartUrl,method,messageData,result);
          
        requestPromise(requestCall).then(function (data) {
              let result = cartMapper.mapUpdateCartResponseJSON(data); 
                  res.send({
                    "success": true ,
                    "result": result                                            
                });   
          }).catch(function (error) {
              logger.error('errors in service to updateShoppingCartItem in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] });
          });
    
    }).catch(function (error) {
              logger.error('errors in service to updateShoppingCartItem in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] });
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
        getAuthTokensFromDB(req.query.userId).then(function(result){
        logger.info("Delete ShoppingCart URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let updateCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='PUT';
        let messageData = cartMapper.mapDeleteCartRequestJSON(req.body);
        logger.info("request to wcs" + JSON.stringify(messageData));
        let requestCall = constructRequestWithToken(updateCartUrl,method,messageData,result);
          
        requestPromise(requestCall).then(function (data) {
          result = cartMapper.mapDeleteCartResponseJSON(data);
                  res.send({
                    "success": true ,
                    "result": result                                            
                });   
          }).catch(function (error) {
              logger.error('errors in service to deleteShoppingCart in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] });
          });
    
    }).catch(function (error) {
              logger.error('errors in service to deleteShoppingCart in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] });
          });
  },

  /* 
   * Method for deleting All Shopping Cart Items in WCS
   * Request Params : userId 
   * Request Method : DELETE
   */
  
  deleteAllShoppingCartItem: function(req,res){
    
    let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART + constants.WCS_GET_SHOPPINGCART;
         getAuthTokensFromDB(req.query.userId).then(function(result){
          logger.info("Delete All ShoppingCart Item URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
          let updateCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
          let method ='DELETE';
          let messageData = {};
          let requestCall = constructRequestWithToken(updateCartUrl,method,messageData,result);
          
        requestPromise(requestCall).then(function (data) {
          let result = cartMapper.mapDeleteAllCartJSON(data); 
                
                  res.send({
                    "success": true ,
                    "result": result                                           
                });   
          }).catch(function (error) {
              logger.error('errors in service to deleteAllShoppingCartItem in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] });
          });
    
    }).catch(function (error) {
              logger.error('errors in service to deleteAllShoppingCartItem in WCS: ', JSON.stringify(error));
              res.send({ "success": false, "error": error.response.body.errors[0] });
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

    let userId = req.query.userId;

    let concatpreCheckOutURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART_EXT + constants.WCS_GET_SHOPPINGCART + constants.WCS_CART_PRECHECKOUT;
    let preCheckOutUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatpreCheckOutURL,true);
    let methodForPreCheckOut ='PUT';

    let concatCheckOutURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_CART_EXT + constants.WCS_GET_SHOPPINGCART + constants.WCS_CART_CHECKOUT;
    let checkOutUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatCheckOutURL,true)
    let methodForCheckOut = 'POST';

    getAuthTokensFromDB(userId)
        .then(function(result){
          return preCheckOut(result);
        });

        /* 
         * Method for preparing order for checkout in WCS
         * Request Params : userId 
         * Request Method : PUT
         */

        let preCheckOut = function(authToken){
          return new Promise(function(resolve,reject){

                logger.info("inside preCheckOut of submitOrder"+preCheckOutUrl);

                let messageData = req.body;
                logger.info("messageData: "+ messageData);

                let requestCall = constructRequestWithToken(preCheckOutUrl,methodForPreCheckOut,messageData,authToken)
                requestPromise(requestCall).then(function (data) {

                      return checkOut(data,authToken);
                    }).catch(function (error) {
                      logger.error('errors in service preCheckOut of submitOrder in WCS: ', JSON.stringify(error));
                      res.send({ "success": false, "error": error.response.body.errors[0] });    
                    });
                });
        }

        /* 
         * Method for checkout in WCS
         * Request Params : userId 
         * Request Method : POST
         */
        
        let checkOut = function(data, authToken){
          return new Promise(function(resolve,reject){

                logger.info("inside checkOut of submitOrder"+checkOutUrl+ "DATA: " + JSON.stringify(data));

                let requestCall = constructRequestWithToken(checkOutUrl,methodForCheckOut,data,authToken)
                requestPromise(requestCall).then(function (result) {
                    
                    return getOrderConfirmationDetails(result, authToken);
                    }).catch(function (error) {
                      logger.error('errors in service checkOut of submitOrder in WCS: ', JSON.stringify(error));
                      res.send({ "success": false, "error": error.response.body.errors[0] }); 
                    });
                });
        }

        /* 
         * Method for Order Confirmation in WCS
         * Request Params : userId 
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

                    let paymentDataArray = ["account","cc_cvc","expire_month","cc_brand","payment_method","expire_year"];
                    logger.info(paymentDataArray);

                    let objectToBePassed = {
                      totalPaymentDataArray: []
                    };
                    logger.info(objectToBePassed);

                    result.paymentInstruction.filter(function(paymentInstructionData){
                      let protocolArray = paymentInstructionData.protocolData;
                      let totalPaymentArray = protocolArray.filter(function(paymentData){
                        if(paymentDataArray.indexOf(paymentData.name) > -1)
                          return paymentData; 
                        });
                      objectToBePassed.totalPaymentDataArray.push(totalPaymentArray);
                    });
                    logger.info(JSON.stringify(objectToBePassed));

                    let finalResponse = cartMapper.mapOrderConfirmationResponseJSON(result,objectToBePassed);
                    logger.info("finalResponse: "+JSON.stringify(finalResponse));
                    res.send({
                      "success": true,
                      "result": finalResponse
                    });
                    }).catch(function (error) {
                      logger.error('errors in service getOrderConfirmationDetails of submitOrder in WCS: ', JSON.stringify(error));
                      res.send({ "success": false, "error": error }); 
                    });
          });
        }
  } 
};


