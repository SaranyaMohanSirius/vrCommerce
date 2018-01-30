import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
        constructRequestWithoutToken
       } from '../../util/wcs/util';
import cartMapper from '../../json_mappers/wcs/cartMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default {

   /* 
    * Method for Registration in WCS
    * Request Method : POST
    * Request Body : Registration body as in WCS
    */
  
   registration: function(req,res){
    
        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_REGISTRATION;
        logger.info("Registration URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let shoppingCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='POST';
        let messageData = req.body;
        let requestCall = constructRequestWithoutToken(shoppingCartUrl,method,messageData);
          
        requestPromise(requestCall).then(function (data) {
            logger.info("userId after registration"+data.userId);
            res.cookie(constants.WCS_ACCESS_TOKEN,data.WCToken);
            res.cookie(constants.WCS_TRUSTED_ACCESS_TOKEN,data.WCTrustedToken);
            res.cookie(constants.WCS_PERSONALIZATION_ID,data.personalizationID);
            res.cookie(constants.WCS_USER_ID,data.userId);
            res.send({
                    "success": true                         
            });   

          }).catch(function (error) {
              if(error){
                logger.error('errors in service for Registration in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }
          });


  },

  

};


