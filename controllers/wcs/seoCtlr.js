import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        constructRequestWithoutToken
       } from '../../util/wcs/util';
import database from '../../util/wcs/databaseUtil';
import requestPromise from 'request-promise';
import Promise from "bluebird";

let logger= getLogger();

export default {

   /* 
    * Method for SEO keyword in WCS
    * Request Method : GET
    * Request Body : type and uniqueId
    */
  
   getSEOKeyword: function(req,res){
        
        // let type = req.query.type;
        // let uniqueId = req.query.productId;
        // let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_SEO + "?type=" + type + "&uniqueId=" + uniqueId;
        // logger.info("SEOKeyword URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
        // let SEOKeywordUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
        // let method ='GET';
        // let requestCall = constructRequestWithoutToken(SEOKeywordUrl,method,'');
          
        // requestPromise(requestCall).then(function (data) {
        //     var seoData = JSON.parse(data);
        //     logger.info("SEO Keyword : "+ seoData.keyword);
        //     res.send({
        //             "type": seoData.type,
        //             "uniqueId": seoData.uniqueId,
        //             "keyword": seoData.keyword,                         
        //     });   

        //   }).catch(function (error) {
        //       if(error){
        //         logger.error('errors in service for SEOKeywordUrl in WCS: ', error);
        //         res.send({ "success": false, "error": error }); 
        //       }
        //   });

      database.getKeyword(req.query.uniqueId, req.query.tokenType).then(function(response) {
        logger.info("Response" + JSON.stringify(response));
        if (Object.keys(response[0]).length > 0) {
          var keyword = response[0].URLKEYWORD;
          var tokenType = response[0].TOKENNAME;
          var tokenValue = response[0].TOKENVALUE;
          res.send({ "success": true, "keyword": keyword, "tokenType": tokenType, "tokenValue": tokenValue});
        } else {
           res.send({ "success": false, "error": "No matching keyword found!" });
        }
    });


  },


   /* 
    * Method for SEO in WCS
    * Request Method : GET
    * Request Body : type and uniqueId
    */
  
   getSEODetails: function(req,res){

      database.getRecords(req.query.keyword).then(function(response) {
        logger.info("Response" + JSON.stringify(response));
        if (Object.keys(response[0]).length > 0) {
          var keyword = response[0].URLKEYWORD;
          var tokenType = response[0].TOKENNAME;
          var tokenValue = response[0].TOKENVALUE;
          res.send({ "success": true, "keyword": keyword, "tokenType": tokenType, "tokenValue": tokenValue});
        } else {
           res.send({ "success": false, "error": "No matching keyword found!" });
        }
    });


  }

};


