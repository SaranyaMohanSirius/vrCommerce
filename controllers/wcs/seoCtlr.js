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
    * Method for SEO in WCS
    * Request Method : GET
    * Request Body : type and uniqueId
    */
  
   getSEOKeyword: function(req,res){
        
        let type = req.query.type;
        let uniqueId = req.query.productId;
        let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_SEO + "?type=" + type + "&uniqueId=" + uniqueId;
        logger.info("SEOKeyword URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        let SEOKeywordUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        let method ='GET';
        let requestCall = constructRequestWithoutToken(SEOKeywordUrl,method,'');
          
        requestPromise(requestCall).then(function (data) {
            var seoData = JSON.parse(data);
            logger.info("SEO Keyword : "+ seoData.keyword);
            res.send({
                    "type": seoData.type,
                    "uniqueId": seoData.uniqueId,
                    "keyword": seoData.keyword,                         
            });   

          }).catch(function (error) {
              if(error){
                logger.error('errors in service for SEOKeywordUrl in WCS: ', error);
                res.send({ "success": false, "error": error }); 
              }
          });


  },

  

};


