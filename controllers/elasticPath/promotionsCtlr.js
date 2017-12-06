import requestPromise from 'request-promise';
import constants from '../../constants/elasticPath/constants';
import promotionsMapper from '../../json_mappers/elasticPath/promotionsMapper';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
let logger=getLogger();


export default {

  /*Controller for applying coupon promotions in EP*/
  apply: function(token,req,res){

        let messageData = {
            "code" : req.body.promoCode
        };
        let orderId = req.body.orderId;
        let conCatUrl = constants.EP_APPLY_PROMO + orderId  + constants.EP_FOLLOW_LOCATION;
        let applyPromoURL = constructUrl(constants.EP_HOSTNAME_CORTEX,conCatUrl,false);

        logger.info('applyPromo url: ',  applyPromoURL);
        let method ='POST';
        let requestCall = constructRequest(applyPromoURL,method,messageData,token)
        requestPromise(requestCall).then(function (data) {
              res.send({
                "success": true ,
                "result": {
                      promoCode: data.code,
                      orderId: orderId
                }     
            });   
        }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to apply promo code in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to apply promo code in EP: ', error);
              res.send({ "success": false, "error": error});
            }
        });
    },

    /*Controller for getting promotions details at cart*/
    getPromotionsAtCart: function(token,req,res){

        let messageData = {};
        let orderId = req.query.orderId;
        let conCatUrl = constants.EP_APPLY_PROMO + orderId  + constants.EP_GET_PROMO_ZOOM;
        let getPromoURL = constructUrl(constants.EP_HOSTNAME_CORTEX,conCatUrl,false);

        logger.info('applyPromo url: ',  getPromoURL);
        let method ='GET';
        let requestCall = constructRequest(getPromoURL,method,messageData,token)
        requestPromise(requestCall).then(function (data) {
              let result = promotionsMapper.mapPromotionsResultJSON(data,orderId);
              res.send({
                "success": true ,
                "result": result
            });   
        }).catch(function (error) {
            if(error.response.body){
              logger.error('errors in service to get promotion details in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body }); 
            }else{
              logger.error('errors in service to get promotion details in EP: ', error);
              res.send({ "success": false, "error": error});
            }
        });

    }


};
