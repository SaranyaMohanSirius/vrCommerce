import constants from '../../constants/wcs9/constants';
import promotionsMapper from '../../json_mappers/wcs9/promotionsMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";
import {getLogger,constructUrl,getTokens,constructRequestWithToken,isJson} from '../../util/wcs/util';

let logger = getLogger();

export default {

    
        /*
     * Method for getting promo codes applied in cart
     * Request Method : GET 
     */

    getPromoCodePromotionsAtCart: function(req,res){
        logger.info("inside getPromoCodePromotionsAtCart ctrl");
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_PROMOTIONS;
        let getPromoCodePromotionsAtCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("Get Promo codes in Cart URL" +getPromoCodePromotionsAtCartUrl);
        let requestCall = constructRequestWithToken(getPromoCodePromotionsAtCartUrl,'GET','',getTokens(req))
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
    },

    /*
     *  Method for applying promotion
     *  Request Body : promoCode
     *  Request Method : POST
     */

    apply: function(req,res){
        let promoCode = req.body.promoCode;
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_PROMOTIONS;
        logger.info("promocode = "+promoCode);
        let applyUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Apply Promotion URL"+ applyUrl);
        let messageData = {
            "promoCode": promoCode
        };  
        let requestCall = constructRequestWithToken(applyUrl,'POST',messageData,getTokens(req));
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
    },

    /*
     *  Method for deleting promotions
     *  Request Body : promoCode
     *  Request Method : DELETE
     */

    delete: function(req,res){
        let promoCode = req.body.promoCode;
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_PROMOTIONS+"/"+promoCode;
        logger.info("promocode = "+promoCode);
        let deleteUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Delete Promotion URL "+deleteUrl);
        let requestCall = constructRequestWithToken(deleteUrl,'DELETE','',getTokens(req));
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
            if(error.statusCode === 404 || error.statusCode === 400){
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            }else{
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] }); 
            } 
        });
    }
}