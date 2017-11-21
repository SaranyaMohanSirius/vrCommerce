var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var pdpMapper = require('../../json_mappers/elasticPath/pdpMapper');
var request = require('request');
var q = require('q');
var gampee = require("gampee");
var rp = require('request-promise');
var Promise = require('promise');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in EP*/
   getProductDetails: function(token,res,uri){
	   
    var concatURL = uri + constants.EP_PDP_ZOOM;   
    console.log("getProductDetails post form url:" + util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false));	
	messageData = {};
    request({
      url: util.constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false),
      method: 'GET',
      json: messageData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      },
    }, function(error, response, body) {
          if (!error) {
            if (!body.errors) {
				  var code = body._code[0].code;
				  var imageName = (code.split("-")[0]).toUpperCase();
				  imageName = imageName.replace(".", "-");
				  var concatImageURL =  constants.EP_AWS_IMAGE_PATH + imageName + constants.EP_IMAGE_FMT;
				  console.log('Image URL: '+concatImageURL);
				  var result = pdpMapper.mapPdpJSON(body,concatImageURL); 
                  res.send({
                    "success": true ,
                    "result": result,                                            
                  });                            

			}
            else {
              console.log('errors in service hit to login service');
              console.log(body.errors);
              res.send({ "success": false, "error": body.errors });
            }
          } else {
            console.log('commerce error');
            console.log(error);
            res.send({ "success": false, "error": error });
          }
    });
   
 
  } 

};
