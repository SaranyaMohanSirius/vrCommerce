import constants from '../../constants/wcs9/constants';
import {getLogger,
        constructUrl,
        constructRequestWithoutToken
       } from '../../util/wcs/util';
import pdpMapper from '../../json_mappers/wcs9/pdpMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default {

  /* 
   *  Method for getting Product Details By Ids in WCS
   *  Request Params : id
   *  Request Method : GET
   */

	getProductDetailsByIds: function(req,res){
  	    let ids = req.query.id;
        let urlIds= "";
        for (let x of ids) { 
             urlIds = urlIds+"id="+x+"&";          
        }
        let concatURL = constants.WCS_PRODUCT_DETAILS+ constants.WCS_STORE_ID + constants.WCS_PRODUCT_BYIDS + urlIds ;
        logger.info("getProductDetailsByIds URL : "+constructUrl(constants.WCS_HOSTNAME_PORT,concatURL,false));
        logger.info("my URL : just checking ");
        let productByIdsUrl = constructUrl(constants.WCS_HOSTNAME_PORT,concatURL,false);
        let method ='GET';
        let messageData = {};
        let requestCall = constructRequestWithoutToken(productByIdsUrl,method,messageData);
        requestPromise(requestCall).then(function (data) {
              let body1 = data;
              let invAvlURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_INV_AVL + ids;
              logger.info("getInvAvl post form url : " + constructUrl(constants.WCS_HOSTNAME_NOPORT, invAvlURL, false)); 
              let secondRequestCall = constructRequestWithoutToken(constructUrl(constants.WCS_HOSTNAME_NOPORT, invAvlURL, false),"GET",messageData);
              requestPromise(secondRequestCall).then(function (data) {
                  let result = pdpMapper.mapPdpJSON(body1,data);
                  res.send({
                    "success": true ,
                    "result": result,
                  });     
              }).catch(function (error) {
                if(error){
                  logger.error('errors in service to get product details By Ids in WCS: ', error);                 
                  res.send({ "success": false, "error": error});
                }
        });  
        }).catch(function (error) {
              if(error){
                logger.error('errors in service to get product details By Ids in WCS', error);
                res.send({ "success": false, "error": error }); 
              }else{
                logger.error('errors in service to get product details By Ids in WCS', error);
                res.send({ "success": false, "error": error});
              }
        });

   
  },


  getProductDetailBySingleId: function(req,res){
  	   
    
    let id = req.query.id;
    let concatURL = constants.WCS_PRODUCT_DETAILS+ constants.WCS_STORE_ID + constants.WCS_PRODUCT_BY_SINGLE_ID+id;
    logger.info("my new URL : just checking ");
    let productBySingleIdUrl = constructUrl(constants.WCS_HOSTNAME_PORT,concatURL,false);
    let method ='GET';
    let messageData = {};
    let requestCall = constructRequestWithoutToken(productBySingleIdUrl,method,messageData);
    requestPromise(requestCall).then(function (data) {
      let result = pdpMapper.mapProductDetailBySingleIdJSON(data);
              res.send({
                "success": true ,
                "result": result,
              })     
          }).catch(function (error) {
          if(error.statusCode === 404){
              logger.error('errors in service to getProductDetailBySingleId in WCS: ', error);
              res.send({ "success": false, "error": error.response.body });
          }else{
              logger.error('errors in service to getProductDetailBySingleId in WCS: ', error);
              res.send({ "success": false, "error": error.response.body.errors[0] }); 
          }
      });
          
      }

}