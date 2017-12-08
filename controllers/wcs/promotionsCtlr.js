import constants from '../../constants/wcs/constants';
import promotionsMapper from '../../json_mappers/wcs/promotionsMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";
import {getLogger,constructUrl,getAuthTokensFromDB,constructRequestWithToken,isJson} from '../../util/wcs/util';

let logger = getLogger();

export default {

    /*
     * Method for getting promotions from cart
     * Request Method : GET 
     * Request Params : userId
     

    getPromotionsAtCart: function(req,res){
        logger.info("inside getPromotionsAtCart ctrl");
        let userId = req.query.userId;
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_AT_SELF;
        let getPromotionsAtCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("Get Promotion Cart URL" +getPromotionsAtCartUrl);
        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });
        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){
                let requestCall = constructRequestWithToken(getPromotionsAtCartUrl,'GET','',authToken)
                requestPromise(requestCall).then(function (body) {
                    if(isJson(body)) body = JSON.parse(body);
                    let result = promotionsMapper.mapPromotionsResultJSON(body);  
                    res.send({
                        "success": true,
                        "result": result
                    });
                    }).catch(function (error) {
                        if(error.statusCode === 404){
                            logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                            res.send({ "success": false, "error": error.response.body });
                        }else{
                            logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                            res.send({ "success": false, "error": error.response.body.errors[0] }); 
                        }
                    });
                });
        }

    }, */
        /*
     * Method for getting promo codes applied in cart
     * Request Method : GET 
     * Request Params : userId
     */

    getPromoCodePromotionsAtCart: function(req,res){
        logger.info("inside getPromoCodePromotionsAtCart ctrl");
        let userId = req.query.userId;
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_PROMOTIONS;
        let getPromoCodePromotionsAtCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("Get Promo codes in Cart URL" +getPromoCodePromotionsAtCartUrl);
        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });
        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){
                let requestCall = constructRequestWithToken(getPromoCodePromotionsAtCartUrl,'GET','',authToken)
                requestPromise(requestCall).then(function (body) {
                    if(isJson(body)) body = JSON.parse(body);
                    let result = promotionsMapper.mapPromoCodesResultJSON(body);  
                    res.send({
                        "success": true,
                        "result": result
                    });
                    }).catch(function (error) {
                        if(error.statusCode === 404){
                            logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                            res.send({ "success": false, "error": error.response.body });
                        }else{
                            logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                            res.send({ "success": false, "error": error.response.body.errors[0] }); 
                        }
                    });
                });
        }

    },

    /*
     *  Method for applying promotion
     *  Request Params : userId, promoCode
     *  Request Method : POST
     */

    apply: function(req,res){
        let promoCode = req.body.promoCode;
        let userId = req.body.userId;
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_PROMOTIONS;
        logger.info("promocode = "+promoCode);
        let applyUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Apply Promotion URL"+ applyUrl);
        let messageData = {
            "promoCode": promoCode
        };
        
        getAuthTokensFromDB(userId)
        .then(function(result){
            return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){
                let requestCall = constructRequestWithToken(applyUrl,'POST',messageData,authToken);
                requestPromise(requestCall).then(function(body){
                    if(isJson(body)) body = JSON.parse(body);
                    res.send({
                        "success": true ,
                        "result": {
                            "orderId": body.orderId,
                            "promoCode": promoCode
                        }                                            
                    });
                }).catch(function (error) {
                    if(error.statusCode === 404){
                        logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                        res.send({ "success": false, "error": error.response.body });
                    }else{
                        logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                        res.send({ "success": false, "error": error.response.body.errors[0] }); 
                    }
                });
            })
        }
    },

    /*
     *  Method for deleting promotions
     *  Request Params : promoCode,userId
     *  Request Method : DELETE
     */

    delete: function(req,res){
        let promoCode = req.body.promoCode;
        let userId = req.body.userId;
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_PROMOTIONS+"/"+promoCode;
        logger.info("promocode = "+promoCode);
        let deleteUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Delete Promotion URL "+deleteUrl);

        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });

        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){
                let requestCall = constructRequestWithToken(deleteUrl,'DELETE','',authToken);
                requestPromise(requestCall).then(function(body){
                    if(isJson(body)) body = JSON.parse(body);
                    res.send({
                        "success": true ,
                        "result": {
                            "orderId": body.orderId,
                            "promoCode": promoCode
                        }                                       
                    }); 
                }).catch(function (error) {
                    if(error.statusCode === 404){
                        logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                        res.send({ "success": false, "error": error.response.body });
                    }else{
                        logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                        res.send({ "success": false, "error": error.response.body.errors[0] }); 
                    } 
                });
            })
        }
    }
}