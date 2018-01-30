import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getTokens,
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
        logger.info(req.body);
        let messageData = wishListMapper.addToWishListRequestMapperJSON(req.body);
        let method ='POST';
        logger.info("addToWishListUrl:" + addToWishListUrl + "messageData: "+ JSON.stringify(messageData));

        let requestCall = constructRequestWithToken(addToWishListUrl,method,messageData,getTokens(req))
        requestPromise(requestCall).then(function () {
            res.send({
                "success": true
            });
            }).catch(function (error) {
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to addToWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to addToWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
            });
   },

   /*
    * Method to delete a product from wishlist in WCS  
    * Request Method : DELETE
    * Request Body: 
    *  {
    *   "wishListId": "12542",
    *    "itemList": [
    *        {
    *            "wishListItemId": "13059"
    *        }
    *    ]   
    *  }
    */

   deleteFromWishList: function(req,res){
    logger.info("inside delete from wish list");

       let wishListId = req.body.wishListId;
       let wishListItemId, concatURL;
       if(req.body.itemList){
           wishListItemId = req.body.itemList[0].wishListItemId;
           concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST_DELETE + wishListId + "?wishListItemId=" + wishListItemId +"&catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
       }
       else 
           concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST_DELETE + wishListId +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;

       let deleteFromWishListUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
       let messageData = '';
       let method ='DELETE';
       logger.info("deleteFromWishListUrl:" + deleteFromWishListUrl + "messageData: "+ messageData);

       let requestCall = constructRequestWithToken(deleteFromWishListUrl,method,messageData,getTokens(req))
       requestPromise(requestCall).then(function () {
          res.send({
              "success": true 
          });
          }).catch(function (error) {
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to deleteFromWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to deleteFromWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
        });
   },

   /*
    * Method to get the wishlist of a user in WCS  
    * Request Method: GET
    */

   getWishList: function(req,res){
    logger.info("inside getWishList");

        let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST + constants.WCS_DEFAULT +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
        let getWishListUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
        let messageData = '';
        let method ='GET';
        logger.info("getWishListUrl:" + getWishListUrl + "messageData: "+ messageData);

        let requestCall = constructRequestWithToken(getWishListUrl,method,messageData,getTokens(req))
        requestPromise(requestCall).then(function (messageData,req) {
            let result = wishListMapper.getWishListJSON(messageData,req);
            res.send({
                "success": true, 
                "result": result
            });
            }).catch(function (error) {
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to getWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to getWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
            });
   },

   /*
    * Method to move a product from wishlist to cart in WCS  
    * Request Method: POST
    * Request Body: 
    *  {
    *    "wishListItemId": "13041",
    *    "wishListId": "12529",
    *    "quantity": "2",
    *    "productId": "10140"
    *  }
    */

    moveWishListItemToCart: function(req,res){
    logger.info("inside moveWishListItemToCart");

    let wishListItemId = req.body.wishListItemId;
    let wishListId = req.body.wishListId;
    let quantity = req.body.quantity;
    let productId = req.body.productId;
    
    let concatDeleteURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_WISHLIST_DELETE + wishListId + "?wishListItemId=" + wishListItemId +"&catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    let deleteFromWishListUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatDeleteURL, true);
    let methodForDeleteWishList = 'DELETE';
    
    let concatAddToCartURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART_EXT +"?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    let addToCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatAddToCartURL, true);
    let methodForAddToCart = 'POST';
    
    let messageData = '';
    let authToken = getTokens(req);

    let deleteItemsFromWishList = function(authToken){
            return new Promise(function(resolve,reject){

                logger.info("inside delete of moveWishListItemToCart"+deleteFromWishListUrl);
                let requestCall = constructRequestWithToken(deleteFromWishListUrl,methodForDeleteWishList,messageData,authToken)
                requestPromise(requestCall).then(function () {
                    resolve(authToken);
                    }).catch(function (error) {
                    if(error.statusCode === 404 || error.statusCode === 400){
                        logger.error('errors in service to deleteItemsFromWishList in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body });
                    }else{
                        logger.error('errors in service to deleteItemsFromWishList in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0] }); 
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
                    if(error.statusCode === 404 || error.statusCode === 400){
                        logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body });
                    }else{
                        logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0] }); 
                    } 
                    });
                });
        }

    deleteItemsFromWishList(authToken)
        .then(function(authToken){
          return addToCartFunction(authToken,productId);
        });
   }
}

