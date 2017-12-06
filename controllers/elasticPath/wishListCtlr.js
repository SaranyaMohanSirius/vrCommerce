import constants from '../../constants/elasticPath/constants';
import {getLogger,
    constructUrl,
    constructRequest,
       } from '../../util/elasticPath/util';
import wishListMapper from '../../json_mappers/elasticPath/wishListMapper';
import requestPromise from 'request-promise';
import Promise from 'bluebird';
let logger= getLogger();

export default  {
 
  /**
   * Controller for adding Product to WishList in EP.
   * Method : POST
   * 
   */

   addToWishList: function(req,res){
    let token=constants.EP_ACCESS_TOKEN;
    let messageData = {};
    let concattUrl =  constants.EP_WHISHLIST+ req.body.productId  + constants.EP_FORM + constants.EP_FOLLOW_LOCATION;
    let addToWishListUrl = constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false)  
    logger.info('Add to WishList URL ', addToWishListUrl);
    let method ='POST';
    let requestCall = constructRequest(addToWishListUrl,method,JSON.parse(JSON.stringify(messageData)),token);
    requestPromise(requestCall).then(function (data) { 
                  res.send({
                    "success": true                                            
                });   
    }).catch(function (error) {
                if(error.response.body){
                  logger.error('errors in service to POST WishList in EP: ', error.response.body);
                  res.send({ "success": false, "error": error.response.body }); 
                }else{
                  logger.error('errors in service to POST WishList in EP: ', error);
                  res.send({ "success": false, "error": error});
                }
    });
  },
    /**
     * Get WishList  
     * Method: GET
     */

    getWishList: function(req,res){
        let token=constants.EP_ACCESS_TOKEN;
        let messageData = {};
        let concattUrl= constants.EP_WHISHLIST_URL+constants.EP_WHISHLIST_CART_ZOOM;
        let defautWishListURL = constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
        logger.info('Get wishList form url',  defautWishListURL);
        let method ='GET';
        let requestCall = constructRequest(defautWishListURL,method,messageData,token)
        requestPromise(requestCall).then(function(results) {
                let result = wishListMapper.getWishListJSON(JSON.parse(JSON.stringify(results))); 
                res.send({
                    "success": true ,
                    "result":result,                                            
                });   
        }).catch(function (error) {
            if(error.response.body){
                logger.error('errors in service to getWishList in EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body }); 
            }else{
                logger.error('errors in service to getWishList in EP: ', error);
                res.send({ "success": false, "error": error});
            }
        });
        },

    /**
     * Delete WishList  
     * Method: DELETE
     */

    deleteFromWishList: function(req,res){
        let token=constants.EP_ACCESS_TOKEN;
        let messageData = {};
        let wishListId
        if(req.body.itemList){
            this.deleteItemsFromWishList(req.body.itemList,token,messageData,res);
            logger.info("Delete Items in WishList");
        }else{
            let wishListId=req.body.wishListId;
            this.deleteAllItemsFromWishList(wishListId,token,messageData,res);
            logger.info("Delete All Items in WishList");
        }
        },

        /**
         *  Method : Delete
         *  Delete  Items from WishList
         */
        deleteItemsFromWishList: function(itemList,token,messageData,res){
            let requests = [];
            let method="DELETE";
            for(let i = 0; i < itemList.length; i++) {
                let concattUrl =  itemList[i].wishListItemId;
                let deleteWishListItemURL=constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
                logger.info("Delete Item from WishList UrL " +deleteWishListItemURL );
                requests.push(this.getDeleteItemRequestPromise(deleteWishListItemURL,token));
            }
            Promise.all(requests).then(function(results) {
                                              res.send({
                                                "success": true                                           
                                              }); 
              }, function(err) {
                        logger.error('errors in service hit to deleteItems From WishList service' + err);
                        res.send({ "success": false, "error": err });
              });
        },

        /**
         *  DeleteItemRequest Promise Multiple Requests
         */

        getDeleteItemRequestPromise: function(deleteWishListItemURL,token) {
            return new Promise(function(resolve,reject){
                let messageData ={};
                let requestCall = constructRequest(deleteWishListItemURL,"DELETE",messageData,token)
                requestPromise(requestCall).then(function (data) {
                         return resolve({success:true,body:data});
                  }).catch(function (error) {
                      logger.error('errors in service to delete item in EP:', error);
                      return resolve({success:false, error:error})
                  }); 
                });
          },
          
        /**
         *  Method : Delete
         *  Delete  Items from WishList
         */
        deleteAllItemsFromWishList: function(url,token,messageData,res){
            
            let concattUrl= url;
            let deleteAllItemURL = constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
            logger.info('DELETE All items from WishList',  deleteAllItemURL);
            let method ='DELETE';
            let requestCall = constructRequest(deleteAllItemURL,method,messageData,token)
            requestPromise(requestCall).then(function(results) {
                    res.send({
                        "success": true                                             
                    });   
            }).catch(function (error) {
                if(error.response.body){
                    logger.error('errors in service to delete All item in EP: ', error.response.body);
                    res.send({ "success": false, "error": error.response.body }); 
                }else{
                    logger.error('errors in service to delete All item in EP: ', error);
                    res.send({ "success": false, "error": error});
                }
            });
        }

}


