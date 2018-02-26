import constants from '../../constants/wcs/constants';
import {getLogger,
        constructUrl,
        constructRequestWithoutToken
       } from '../../util/wcs/util';
import database from '../../util/wcs/databaseUtil';
import requestPromise from 'request-promise';
import Promise from "bluebird";
import q from 'q';
let logger= getLogger();

export default {

	
	
	getSEOKeyword1: function(uniqueId, tokenType){
		console.log("inside the getSEOKeyword1");
		this.getSEOKeyword(uniqueId, tokenType);
	},
   /* 
    * Method for SEO keyword in WCS
    * Request Method : GET
    * Request Body : type and uniqueId
    */
  
   getSEOKeyword: function(uniqueId, tokenType){
        
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
	   
	   var que = null;
	   var deferred = q.defer();

	   console.log("categoryId::"+uniqueId +":::tokenType:::"+tokenType);
        database.getKeyword(uniqueId, tokenType,-1,10051).then(function(response) {
	        logger.info("Response" + JSON.stringify(response));
	        if (Object.keys(response[0]).length > 0) {
	          var keyword = response[0].URLKEYWORD;
	          var tokenType = response[0].TOKENNAME;
	          var tokenValue = response[0].TOKENVALUE;
	         
	          logger.info("keyword:",keyword);
	          $scope.que = keyword;
	          deferred.resolve(keyword);
	          	
	        } else {
	        	logger.info("No results fetched for categoryId:",uniqueId);
	        }
	        
	        
        });
        
        

         return  Promise.all("ssee");;

  },


   /* 
    * Method for SEO in WCS
    * Request Method : GET
    * Request Body : type and uniqueId
    */
  
   getSEODetails: function(req,res){
	   console.log("Request:"+req)

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


  },
  
  
  
  /* 
   * Method for SEO in WCS
   * Request Method : GET
   * Request Body : keyword
   * Response: TokenValue
   */
 
  getIdByKeyword(keyword,tokenName){
	   
	   logger.info("keyword::"+keyword+"---TokenName::"+tokenName);

	   var deferred = q.defer();
      if(isNaN(keyword)){
        logger.info("Param is  KeyWord ");
        database.getRecordsByKeyword(keyword, tokenName,-1, constants.WCS_CAS_STORE_ID).then(function(response) {
          logger.info("Response" + JSON.stringify(response));
          if (Object.keys(response[0]).length > 0) {
            var keyword = response[0].URLKEYWORD;
            var tokenType = response[0].TOKENNAME;
            var tokenValue = response[0].TOKENVALUE;
            deferred.resolve(tokenValue);
            //res.send({ "success": true, "keyword": keyword, "tokenType": tokenType, "tokenValue": tokenValue});
          } 
        });
      }else{
        logger.info("Param is  ProductId ");
        database.getRecordsByProductId(keyword, tokenName,-1, constants.WCS_CAS_STORE_ID).then(function(response) {
          logger.info("Response" + JSON.stringify(response));
          if (Object.keys(response[0]).length > 0) {
            var keyword = response[0].URLKEYWORD;
            var tokenType = response[0].TOKENNAME;
            var tokenValue = response[0].TOKENVALUE;
            deferred.resolve(tokenValue);
          } 
        });
      }
     
      return deferred.promise;
      
 }
};


