import constants from '../../constants/wcs/constants';
import {getLogger,
    isJson,
    constructUrl,
    constructRequestWithToken,
    requiredProtocolData,
    getTokens
   } from '../../util/wcs/util';
import requestPromise from 'request-promise';
import mapper from '../../json_mappers/wcs/paymentMapper';

let logger= getLogger();

export default{
    /**
     * Method for getting payment instruction
     * Request method - GET
     */
    getPaymentInstruction: function(req,res){
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_AT_SELF+constants.WCS_PAYMENT_INSTRUCTION;
        let getPaymentInstructionUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("Get payment instruction url = "+getPaymentInstructionUrl);
        let getPaymentInstructionCall = constructRequestWithToken(getPaymentInstructionUrl,'GET','',getTokens(req));
        requestPromise(getPaymentInstructionCall).then(function(body){
            if(isJson(body)) body = JSON.parse(body);
            let result = mapper.mapPaymentInstrutionJSON(body,requiredProtocolData(body));
            res.send({
                "success" : true,
                "result" : result
            })
        }).catch(function(error){
            logger.error('errors in service to getPaymentInstruction in WCS: ', error);
            res.send({ "success": false, "error": error.response.body });
        }) 
    },
    /**
     * Method for creating payment instruction
     * Request body - Refer artifacts
     * Request method - POST
     */
    createPaymentInstruction: function(msg){
        return new Promise(function(resolve,reject){
            let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_AT_SELF+constants.WCS_PAYMENT_INSTRUCTION;
            let createPaymentInstructionUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
    
            let messageData = msg;
            let createPaymentInstructionCall = constructRequestWithToken(createPaymentInstructionUrl,'POST',messageData,'');
            requestPromise(createPaymentInstructionCall).then(function(body){
                if(isJson(body)) body = JSON.parse(body);
                console.log("payment ins created = ",body);
                resolve(body);
            }).catch(function(error){
                logger.error('errors in service to createPaymentInstruction in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
                reject(false);
            })  
        })
    },
    /**
     * Method for updating payment instruction
     * Request body - Refer artifacts
     * Request method - PUT
     */
    putPaymentInstruction: function(req,res){
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_AT_SELF+constants.WCS_PAYMENT_INSTRUCTION;
        let updatePaymentInstructionUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("Update payment instruction url = "+ updatePaymentInstructionUrl);
        let messageData = req.body;
        let updatePaymentInstructionCall = constructRequestWithToken(updatePaymentInstructionUrl,'PUT',messageData,getTokens(req));
        requestPromise(updatePaymentInstructionCall).then(function(body){
            res.send({
                "success" : true,
                "result" : body
            })
        }).catch(function(error){
            logger.error('errors in service to updatePaymentInstruction in WCS: ', error);
            res.send({ "success": false, "error": error.response.body });
        })
    },
    /**
     * Method for deleting payment instruction
     * Request body - piId
     * Request method - DELETE
     */
    deletePaymentInstruction: function(req,res){
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_AT_SELF+constants.WCS_PAYMENT_INSTRUCTION+constants.SLASH+req.body.piId;
        let deletePaymentInstructionUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("delete payment instruction url = "+ deletePaymentInstructionUrl);
        let deletePaymentInstructionCall = constructRequestWithToken(deletePaymentInstructionUrl,'DELETE','',getTokens(req));
        requestPromise(deletePaymentInstructionCall).then(function(body){
            res.send({
                "success" : true,
                "result" : body
            })
        }).catch(function(error){
            logger.error('errors in service to deletePaymentInstruction in WCS: ', error);
            res.send({ "success": false, "error": error.response.body });
        })
    }
}