import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
        constructRequestWithToken} from '../../util/wcs/util';
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
   }
}

