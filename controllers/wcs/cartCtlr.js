import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
        constructRequestWithToken,
       } from '../../util/wcs/util';
import cartMapper from '../../json_mappers/wcs/cartMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

module.exports = {
  /*Controller to add a product to cart in WCS  */
   addToCart: function(req,res){
        logger.info("inside add to cart");

        let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
        let addToCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
        let userId = req.query.userId;
        let messageData = req.body;
        let method ='POST';
        logger.info("addToCartUrl:" + addToCartUrl +"userId: "+ userId + "messageData: "+ messageData);

        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){

                let requestCall = constructRequestWithToken(addToCartUrl,method,messageData,authToken)
                requestPromise(requestCall).then(function (messageData,req) {
                    let result = cartMapper.addToCartJSON(messageData,req); 
                    res.send({
                        "success": true ,
                        "result": result                                          
                    });
                    }).catch(function (error) {
                    if(error.res.body){
                      logger.error('errors in service to addToCart in WCS: ', error.res.body);
                      res.send({ "success": false, "error": error.res.body }); 
                    }else{
                      logger.error('errors in service to addToCart in WCS: ', error);
                      res.send({ "success": false, "error": error});
                    }
                    });
                });
        }
   },

   /* 
      Controller for getting Shopping Cart Item in WCS
      Request Params : userId 
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
              if(error){
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }else{
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error});
              }
          });
    })

  },

  /* 
      Controller for update Cart Item in WCS
      Request Params : userId 
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
              if(error){
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }else{
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error});
              }
          });
    
    })

  },

  /* 
      Controller for delete Shopping Cart Item in WCS
      Request Params : userId 
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
              if(error){
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }else{
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error});
              }
          });
    
    })
  },

  /* 
      Controller for deleting All Shopping Cart Item in WCS
      Request Params : userId 
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
              if(error){
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }else{
                logger.error('errors in service to getShoppingCart in WCS: ', error);
                res.send({ "success": false, "error": error});
              }
          });
    
    })
  },
  

}


