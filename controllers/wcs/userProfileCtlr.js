import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        getTokens,
        constructRequestWithToken,
       } from '../../util/wcs/util';
import userProfileMapper from '../../json_mappers/wcs/userProfileMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default { 

   /*
    * Method to get Order History of an user in WCS 
    * Request Method : GET
    */
    
    getOrderHistory : function(req,res){
    	logger.info("inside getOrderHistory");

    	let concatOrderHistoryUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ORDER + constants.WCS_HISTORY;
        let getOrderHistoryDetailsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatOrderHistoryUrl,true);
        let methodForOrderHistory = 'GET';
        let messageData = {};

        logger.info("getOrderHistoryDetailsUrl: "+ getOrderHistoryDetailsUrl);
        let requestCall = constructRequestWithToken(getOrderHistoryDetailsUrl,methodForOrderHistory,messageData,getTokens(req))
        requestPromise(requestCall).then(function (body) {
            
            let result = userProfileMapper.orderHistoryJSON(body); 
            res.send({
                "success": true ,
                "result": result                                          
            });
            }).catch(function (error) {
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to getOrderHistory in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to getOrderHistory in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
        });
             
    },
    /*
    * Method to get Order Detail of an user in WCS 
    * Request Method : GET
    */
    getOrderDetails : function(req,res){
    	logger.info("inside getOrderDetails");
        let orderId = req.query.orderId;
    	let concatOrderDetailsUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ORDER + orderId;
        let getOrderDetailsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatOrderDetailsUrl,true);
        let methodForOrderDetails = 'GET';
        let messageData = {};

        logger.info("getOrderDetailsUrl: "+ getOrderDetailsUrl);
        let requestCall = constructRequestWithToken(getOrderDetailsUrl,methodForOrderDetails,messageData,getTokens(req))
        requestPromise(requestCall).then(function (body) {
            res.send({
                "success": true ,
                "result": body                                          
            });
            }).catch(function (error) {
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to getOrderDetail in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to getOrderDetail in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
        });          
    },

   /*
    * Method to get My Account - Personal Information of an user in WCS 
    * Request params : userId 
    * Request Method : GET
    */

    getPersonalInformation : function(req,res){
    	logger.info("inside getPersonalInformation");

        let userId = req.cookies.userId;   
    	let concatPersonalInformationUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_PERSON + userId +constants.WCS_PROFILE_NAME;
        let getPersonalInformationDetailsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatPersonalInformationUrl,true);
        let methodForPersonalInformation = 'GET';
        let messageData = {};

        logger.info("getPersonalInformationDetailsUrl: "+ getPersonalInformationDetailsUrl);
        let requestCall = constructRequestWithToken(getPersonalInformationDetailsUrl,methodForPersonalInformation,messageData,getTokens(req))
        requestPromise(requestCall).then(function (body) {
        	
            let result = userProfileMapper.personalInformationJSON(body); 
            res.send({
                "success": true ,
                "result": result                                          
            });
            }).catch(function (error) {
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to getPersonalInformation in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to getPersonalInformation in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
            });
    },

   /*
    * Method to get My Account - Address Book of an user in WCS 
    * Request Method : GET
    */

    getAddressBook : function(req,res){
        logger.info("inside getAddressBook");

        let concatAddressBookUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_PERSON_AT_SELF;
        let getAddressBookUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatAddressBookUrl,true);
        let methodForAddressBook = 'GET';
        let messageData = {};

        logger.info("getAddressBookUrl: "+ getAddressBookUrl);
        let requestCall = constructRequestWithToken(getAddressBookUrl,methodForAddressBook,messageData,getTokens(req))
        requestPromise(requestCall).then(function (body) {

            let result = userProfileMapper.addressBookJSON(body); 
            res.send({
                "success": true ,
                "result": result                                          
            });
            }).catch(function (error) {
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to getAddressBook in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to getAddressBook in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
            });
    }


};