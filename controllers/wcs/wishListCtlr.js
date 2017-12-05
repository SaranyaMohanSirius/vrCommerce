import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
        constructRequestWithToken} from '../../util/wcs/util';
import requestPromise from 'request-promise';
import wishListMapper from '../../json_mappers/wcs/wishListMapper';
import cartMapper from '../../json_mappers/wcs/cartMapper';
import Promise from "bluebird";

let logger= getLogger();

export default {

  /*
   * Method to add a product to wishlist in WCS 
   * Request Method : POST
   * Request Param : userId
   * Request Body: 
   * {
   *     "productId": "10140",
   *     "quantityRequested": "1"
   *  }
   */

   addToWishList: function(req,res){
        logger.info("inside add to wish list");

        let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
        let addToWishListUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
        let userId = req.query.userId;
        let messageData = wishListMapper.addToWishListRequestMapperJSON(req.body);
        let method ='POST';
        logger.info("addToWishListUrl:" + addToWishListUrl +"userId: "+ userId + "messageData: "+ JSON.stringify(messageData));

        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){

                let requestCall = constructRequestWithToken(addToWishListUrl,method,messageData,authToken)
                requestPromise(requestCall).then(function () {
                    res.send({
                        "success": true
                    });
                    }).catch(function (error) {
                    if(error.res){
                      logger.error('errors in service to addToWishList in WCS: ', error.res);
                      res.send({ "success": false, "error": error.res.body }); 
                    }else{
                      logger.error('errors in service to addToWishList in WCS: ', error);
                      res.send({ "success": false, "error": error});
                    }
                    });
                });
        }
   },

   /*
    * Method to delete a product from wishlist in WCS  
    * Request Method : DELETE
    * Request Params: userId, wishListItemId, wishListId
    */

   deleteFromWishList: function(req,res){
    logger.info("inside delete from wish list");

       let wishListItemId = req.query.wishListItemId;
       let wishListId = req.query.wishListId;
       let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST_DELETE + wishListId + "?wishListItemId=" + wishListItemId +"&catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
       let deleteFromWishListUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
       let userId = req.query.userId;
       let messageData = '';
       let method ='DELETE';
       logger.info("deleteFromWishListUrl:" + deleteFromWishListUrl +"userId: "+ userId + "messageData: "+ messageData);

       getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){

                let requestCall = constructRequestWithToken(deleteFromWishListUrl,method,messageData,authToken)
                requestPromise(requestCall).then(function () {
                    res.send({
                        "success": true 
                    });
                    }).catch(function (error) {
                    if(error.res){
                      logger.error('errors in service to deleteFromWishList in WCS: ', error.res);
                      res.send({ "success": false, "error": error.res.body }); 
                    }else{
                      logger.error('errors in service to deleteFromWishList in WCS: ', error);
                      res.send({ "success": false, "error": error});
                    }
                    });
                });
        }

   },

   /*
    * Method to get the wishlist of a user in WCS  
    * Request Method: GET
    * Request Params: userId
    */

   getWishList: function(req,res){
    logger.info("inside getWishList");

        let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST + constants.WCS_DEFAULT +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
        let getWishListUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
        let userId = req.query.userId;
        let messageData = req.body;
        let method ='GET';
        logger.info("getWishListUrl:" + getWishListUrl +"userId: "+ userId + "messageData: "+ messageData);

        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){

                let requestCall = constructRequestWithToken(getWishListUrl,method,messageData,authToken)
                requestPromise(requestCall).then(function (messageData,req) {
                    let result = wishListMapper.getWishListJSON(messageData,req);
                    res.send({
                        "success": true, 
                        "result": result
                    });
                    }).catch(function (error) {
                    if(error.res){
                      logger.error('errors in service to getWishList in WCS: ', error.res);
                      res.send({ "success": false, "error": error.res.body }); 
                    }else{
                      logger.error('errors in service to getWishList in WCS: ', error);
                      res.send({ "success": false, "error": error});
                    }
                    });
                });
        }

   },

   /*
    * Method to move a product from wishlist to cart in WCS  
    * Request Method: GET
    * Request Params: wishListItemId, wishListId, quantity, productId, userId
    */

    moveWishListItemToCart: function(req,res){
    logger.info("inside moveWishListItemToCart");

    let wishListItemId = req.query.wishListItemId;
    let wishListId = req.query.wishListId;
    let quantity = req.query.quantity;
    let productId = req.query.productId;
    
    let concatDeleteURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST_DELETE + wishListId + "?wishListItemId=" + wishListItemId +"&catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    let deleteFromWishListUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatDeleteURL, true);
    let methodForDeleteWishList = 'DELETE';
    
    let concatAddToCartURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART_EXT +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    let addToCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatAddToCartURL, true);
    let methodForAddToCart = 'POST';
    
    let userId = req.query.userId;
    let messageData = '';

    getAuthTokensFromDB(userId)
        .then(function(authToken){
          return deleteItemsFromWishList(authToken);
        });

    let deleteItemsFromWishList = function(authToken){
            return new Promise(function(resolve,reject){

                logger.info("inside delete of moveWishListItemToCart"+deleteFromWishListUrl);
                let requestCall = constructRequestWithToken(deleteFromWishListUrl,methodForDeleteWishList,messageData,authToken)
                requestPromise(requestCall).then(function () {
                              return addToCartFunction(authToken,productId);
                    }).catch(function (error) {
                    if(error.res){
                      logger.error('errors in service to moveWishListItemToCart in WCS: ', error.res);
                      res.send({ "success": false, "error": error.res }); 
                    }else{
                      logger.error('errors in service to moveWishListItemToCart in WCS: ', error);
                      res.send({ "success": false, "error": error});
                    }
                    });
                });
        }

    let addToCartFunction = function(authToken,productId){
            return new Promise(function(resolve,reject){

                logger.info("inside addToCartFunction of moveWishListItemToCart"+addToCartUrl);
                let messageBody = wishListMapper.moveToCartMapperJSON(productId,quantity);
                logger.info("messageBody: " +JSON.stringify(messageBody));
                let requestCall = constructRequestWithToken(addToCartUrl,methodForAddToCart,messageBody,authToken)
                requestPromise(requestCall).then(function (messageBody,req) {
                    let result = cartMapper.addToCartJSON(messageBody,req); 
                    res.send({
                        "success": true ,
                        "result": result                                          
                    });
                    }).catch(function (error) {
                    if(error.res){
                      logger.error('errors in service to moveWishListItemToCart in WCS: ', error.res);
                      res.send({ "success": false, "error": error.res.body }); 
                    }else{
                      logger.error('errors in service to moveWishListItemToCart in WCS: ', error);
                      res.send({ "success": false, "error": error});
                    }
                    });
                });
        }
   }


   
}

