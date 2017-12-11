import requestPromise from 'request-promise';
import constants from '../../constants/elasticPath/constants';
import {getLogger,
        constructUrl,
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
                        res.cookie(constants.EP_COOKIE_NAME, result.access_token, { maxAge: constants.EP_TOKEN_EXPIRATION_TIME, httpOnly: false });
                        return callBack(result.access_token);
                  });

                } else{
                    return callBack(token);
                }       


        }


};
