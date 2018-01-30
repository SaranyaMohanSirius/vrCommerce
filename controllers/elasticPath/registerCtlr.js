import requestPromise from 'request-promise';
import constants from '../../constants/elasticPath/constants';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
import {checkAndGetAuthToken } from '../../controllers/elasticPath/loginCtlr';
let logger=getLogger();


module.exports = {

         /*Controller for registering a new user in EP*/ 
        register: function(req,res){

              let requestFunction = function(token){
                        return new Promise(function(resolve,reject){
                            let messageData = {
                                "family-name" : req.body.lastName,
                                "given-name" : req.body.firstName,
                                "password" : req.body.logonPassword,
                                "username" : req.body.logonId
                            };

                            let registerURL = constructUrl(constants.EP_HOSTNAME,constants.EP_REGISTER,false);
                            logger.info('register url', registerURL);
                            let method = 'POST';

                            let requestCall = constructRequest(registerURL,method,messageData,token);

                            requestPromise(requestCall).then(function (result) {
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
                        });
               }             

              /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
              checkAndGetAuthToken(req,res,function(access_token){
                   requestFunction(access_token); 
              });


        }

};
