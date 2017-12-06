import constants from '../../constants/elasticPath/constants';
import {getLogger,
    constructUrl,
    constructRequest,
       } from '../../util/elasticPath/util';
import wishListMapper from '../../json_mappers/elasticPath/wishListMapper';
import requestPromise from 'request-promise';

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
     * Method: Get
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
        }

}


