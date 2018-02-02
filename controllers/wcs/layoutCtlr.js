import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        constructRequestWithoutToken
       } from '../../util/wcs/util';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default {

   /* 
    * Method for layout in WCS
    * Request Method : GET
    * Request Body : objectId, device and pageGroup
    */
  
   getLayoutDetails: function(req,res){
        
        let objectId = req.query.objectId;
        let deviceClass = req.query.device;
        let pageGroup = req.query.pageGroup;
        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_LAYOUT + "&objectIdentifier=" + objectId + "&deviceClass=" + deviceClass + "&pageGroup=" + pageGroup;
        logger.info("Layout URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let layoutUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='GET';
        let requestCall = constructRequestWithoutToken(layoutUrl,method,'');
          
        requestPromise(requestCall).then(function (data) {
            var layoutData = JSON.parse(data);
            res.send(layoutData);   
          }).catch(function (error) {
              if(error){
                logger.error('errors in service for layoutUrl in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }
          });


  },

  /* 
    * Method for Espot in WCS
    * Request Method : GET
    * Request Body : emsName
    */
  
   getEspotDetails: function(req,res){
        
        let emsName = req.body.emsName;
        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_ESPOT + emsName;
        logger.info("espot URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let espotUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='GET';
        let requestCall = constructRequestWithoutToken(espotUrl,method,'');
          
        requestPromise(requestCall).then(function (data) {
            var layoutData = JSON.parse(data);
            res.send(layoutData);   
          }).catch(function (error) {
              if(error){
                logger.error('errors in service for espotUrl in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }
          });


  },
  

};


