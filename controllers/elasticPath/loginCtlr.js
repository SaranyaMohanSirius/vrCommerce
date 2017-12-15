import requestPromise from 'request-promise';
import constants from '../../constants/elasticPath/constants';
import {getLogger,
        constructUrl,
        constructRequestForLogin,
        constructRequestWithoutToken} from '../../util/elasticPath/util';
let logger=getLogger();


module.exports = {

     /*Function to authenticate for a guest user*/ 
    checkAndGetAuthToken: function(req,res,callBack) {

              let token = req.cookies.access_token;
              
              if(token == undefined){
                  let messageData = {};
                  let guestLoginURL = constructUrl(constants.EP_HOSTNAME, constants.EP_GUEST_LOGIN, false);
                  logger.info('guestLoginURL: ',guestLoginURL);

                  let method ='POST';
                  let requestCall = constructRequestWithoutToken(guestLoginURL,method,messageData);
                  requestPromise(requestCall).then(function (result) {
                        res.cookie(constants.EP_COOKIE_NAME, result.access_token, {  httpOnly: false });
                        return callBack(result.access_token);
                  });

                } else{
                    return callBack(token);
                }       
        },

        /*Controller for login a registered user*/  
        loginIdentityHandler: function(req,res){

              let token = req.cookies.access_token;
              let messageData = {};
              let username = req.body.logonId;
              let password = req.body.logonPassword;
              let concatURL = constants.EP_LOGIN + constants.EP_USER_NAME + username + constants.EP_PASSWORD + password;
 
              let logonURL = constructUrl(constants.EP_HOSTNAME, concatURL, false);   
              logger.info('logon url: ',  logonURL);
              let method ='POST';

              let requestCall = constructRequestForLogin(logonURL,method,messageData,token);

              requestPromise(requestCall).then(function (result) {
                      res.cookie(constants.EP_COOKIE_NAME, result.access_token, {  httpOnly: false });
                      res.send({
                        "success": true                                       
                    });   
              }).catch(function (error) {
                    if(error.response.body){
                      logger.error('errors in service to logon in EP: ', error.response.body);
                      res.send({ "success": false, "error": error.response.body }); 
                    }else{
                      logger.error('errors in service to logon in EP: ', error);
                      res.send({ "success": false, "error": error});
                    }
              });

        },

        /*Controller for logging out an EP user*/  
        logout: function(req,res){
              
              let  messageData = {};
 
              let logoutURL = constructUrl(constants.EP_HOSTNAME, constants.EP_LOGOUT, false);   
              logger.info('logout url: ',  logoutURL);
              let method ='DELETE';

              let requestCall = constructRequestWithoutToken(logoutURL,method,messageData);

              requestPromise(requestCall).then(function (result) {
                      res.clearCookie(constants.EP_COOKIE_NAME, { path: '/' });
                      res.send({
                        "success": true
                    });   
              }).catch(function (error) {
                    if(error.response.body){
                      logger.error('errors in service to logout in EP: ', error.response.body);
                      res.send({ "success": false, "error": error.response.body }); 
                    }else{
                      logger.error('errors in service to logout in EP: ', error);
                      res.send({ "success": false, "error": error});
                    }
              });

        },

};
