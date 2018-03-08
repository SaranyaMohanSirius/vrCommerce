import constants from '../../constants/wcs/constants';
import {getLogger,
        isJson,
        constructUrl,
        constructRequestWithoutToken,
       } from '../../util/wcs/util';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default {
    /**
     * Method for getting the espot Details
     * Request method - GET
     * Request body - emspotName
     */
	espotDetails: function(req,res){
	        
	        let emsName = req.query.emsName;
	        console.log("emsName::"+emsName);


	        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_ESPOT + emsName;
	        logger.info("EMSpot URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
	        let espotURL = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
	        let method ='GET';
	        let requestCall = constructRequestWithoutToken(espotURL,method,'');
	          
	        requestPromise(requestCall).then(function (data) {
	            var espotData = JSON.parse(data);
	            res.send(espotData);   
	          }).catch(function (error) {
	              if(error){
	                logger.error('errors in service for espotURL in WCS: ', error);
	                res.send({ "success": false, "error": error }); 
	              }
	          });
	        
	        


	  },
  

}