import constants from '../../constants/wcs/constants';
import {getLogger,
        isJson,
        constructUrl,
        insertToken,
        updateToken,
        constructRequestWithoutToken,
       } from '../../util/wcs/util';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default {
    /**
     * Method for logging in
     * Request method - POST
     * Request body - logonId,logonPassword
     */
    loginIdentityHandler: function(req,res){
        logger.info("inside update token");
        let concatUrl = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_LOGIN_IDENTITY;
        let loginUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatUrl , true);
        logger.info("Login url = "+loginUrl);
        let method = 'POST';
        let messageData = {
            "logonId": req.body.logonId,
            "logonPassword": req.body.logonPassword
        };
        logger.info("messageData = "+req.body.logonId+"|"+req.body.logonPassword);
        let logonCall = constructRequestWithoutToken(loginUrl,method,messageData,'');
        requestPromise(logonCall).then(function(result){
            res.cookie(constants.WCS_ACCESS_TOKEN,result.WCToken);
            res.cookie(constants.WCS_TRUSTED_ACCESS_TOKEN,result.WCTrustedToken)
            res.cookie(constants.WCS_PERSONALIZATION_ID,result.personalizationID);
            res.cookie(constants.WCS_USER_ID,result.userId);
            res.send({
                    "success": true                         
                });  
          }).catch(function(error){
            if(error.statusCode === 404){
                logger.error('errors in service to loginIdentityHandler in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to loginIdentityHandler in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            }
        }) 
    },
    /**
     * Method for creating guest user
     * Request method - POST
     */
    guestIdentityHandler: function(req,res){
        logger.info("inside guestIdentityHandler");
        return new Promise(function(resolve,reject){
           let concatUrl = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_GUEST_IDENTITY;
           let guestIdentityUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatUrl, true);
           logger.info("GuestIdentityUrl = "+guestIdentityUrl);
           let method = 'POST';
           let guestCall = constructRequestWithoutToken(guestIdentityUrl,method,'');
           requestPromise(guestCall).then(function(result){
               result = JSON.parse(result);
               res.cookie(constants.WCS_ACCESS_TOKEN,result.WCToken);
               res.cookie(constants.WCS_TRUSTED_ACCESS_TOKEN,result.WCTrustedToken);
               res.cookie(constants.WCS_PERSONALIZATION_ID,result.personalizationID);
               res.cookie(constants.WCS_USER_ID,result.userId);
               res.send({
                    "success": true                         
                });  
             }).catch(function(error){
            if(error.statusCode === 404){
                logger.error('errors in service to guestIdentityHandler in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to guestIdentityHandler in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            }
        }) 
        });
    },

    /**
     * Method for creating guest user
     * Request method - DELETE
     */
    logoutUser: function(req,res){
        logger.info("inside logout user");
        return new Promise(function(resolve,reject){
           let concatUrl = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_LOGIN_IDENTITY+constants.WCS_SELF;
           let logoutUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatUrl, true);
           logger.info("Logout user = "+logoutUrl);
           let method = 'DELETE';
            let messageData = {};
           let guestCall = constructRequestWithoutToken(logoutUrl,method,messageData);
           requestPromise(guestCall).then(function(result){
               res.clearCookie(constants.WCS_ACCESS_TOKEN);
               res.clearCookie(constants.WCS_TRUSTED_ACCESS_TOKEN);
               res.clearCookie(constants.WCS_PERSONALIZATION_ID);
               res.clearCookie(constants.WCS_USER_ID);
               res.send({
                    "success": true                         
                });  
            }).catch(function(error){
            if(error.statusCode === 404){
                logger.error('errors in service to logout in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to logout in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            }
        }) 
        });
    },

}