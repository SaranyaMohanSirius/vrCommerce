import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getAuthTokensFromDB,
        constructRequestWithToken,
       } from '../../util/wcs/util';
import userProfileMapper from '../../json_mappers/wcs/userProfileMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default { 

   /*
    * Method to get Order History of an user in WCS 
    * Request params : userId 
    * Request Method : GET
    */
    
    getOrderHistory : function(req,res){
    	logger.info("inside getOrderHistory");

   		let userId = req.query.userId;

    	let concatOrderHistoryUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ORDER + constants.WCS_HISTORY;
        let getOrderHistoryDetailsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatOrderHistoryUrl,true);
        let methodForOrderHistory = 'GET';

        let messageData = {};

        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){

                logger.info("authTokens: "+JSON.stringify(authToken) + "getOrderHistoryDetailsUrl: "+ getOrderHistoryDetailsUrl);
                let requestCall = constructRequestWithToken(getOrderHistoryDetailsUrl,methodForOrderHistory,messageData,authToken)
                requestPromise(requestCall).then(function (body) {
                    let result = userProfileMapper.orderHistoryJSON(body); 
                    res.send({
                        "success": true ,
                        "result": result                                          
                    });
                    }).catch(function (error) {
                        logger.error('errors in service to getOrderHistory in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0]}); 
                    });
                });
        }
    },

   /*
    * Method to get My Account - Personal Information of an user in WCS 
    * Request params : userId 
    * Request Method : GET
    */

    getPersonalInformation : function(req,res){
    	logger.info("inside getPersonalInformation");

    	let userId = req.query.userId;

    	let concatPersonalInformationUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_PERSON + userId +constants.WCS_PROFILE_NAME;
        let getPersonalInformationDetailsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatPersonalInformationUrl,true);
        let methodForPersonalInformation = 'GET';

        let messageData = {};

        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){

                logger.info("authTokens: "+JSON.stringify(authToken) + "getPersonalInformationDetailsUrl: "+ getPersonalInformationDetailsUrl);
                let requestCall = constructRequestWithToken(getPersonalInformationDetailsUrl,methodForPersonalInformation,messageData,authToken)
                requestPromise(requestCall).then(function (body) {
                	let result = userProfileMapper.personalInformationJSON(body); 

                    res.send({
                        "success": true ,
                        "result": result                                          
                    });
                    }).catch(function (error) {
                        logger.error('errors in service to getPersonalInformation in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0]}); 
                    });
                });
        }
    }
};