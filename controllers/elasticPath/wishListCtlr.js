import constants from '../../constants/elasticPath/constants';
import {getLogger,
    constructUrl,
    constructRequest,
       } from '../../util/elasticPath/util';
import wishListMapper from '../../json_mappers/elasticPath/wishListMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default  {
 
  /**
   * Controller for adding Product to WishList in EP
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
  }

}


