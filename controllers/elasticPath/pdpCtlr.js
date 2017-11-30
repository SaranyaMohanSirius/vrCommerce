var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var pdpMapper = require('../../json_mappers/elasticPath/pdpMapper');
var request = require('request');
var requestPromise = require('request-promise');

var logger= util.getLogger();

module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in EP*/
   getProductDetails: function(token,res,uri){
	   
    var concatURL = uri + constants.EP_PDP_ZOOM;   
    logger.info("getProductDetails post form url:" + util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false));	
	var messageData = {};
    var method = 'GET';
	var requestCall = util.constructRequest(util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false),method,messageData,token);
	requestPromise(requestCall).then(function (data) {
		  var body = data;
		  var code = body._code[0].code;
		  var imageName = (code.split("-")[0]).toUpperCase();
		  imageName = imageName.replace(".", "-");
		  var concatImageURL =  constants.EP_AWS_IMAGE_PATH + imageName + constants.EP_IMAGE_FMT;
		  logger.info('Image URL: '+concatImageURL);
		  var result = pdpMapper.mapPdpJSON(body,concatImageURL); 
		  res.send({
			"success": true ,
			"result": result,                                            
		  });                            
	}).catch(function (error) {
			if(error.response.body){
			  logger.error('errors in service hit to login service '+error.response.body);
              res.send({ "success": false, "error": error.response.body });
            }
           else {
            logger.error('errors in service hit to login service '+ error);
            res.send({ "success": false, "error": error });
          }
    });
   
 
  } 

};
