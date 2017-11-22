var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

module.exports = {

  /*Normal Response for Add to Cart this needs to be refine*/ 
  addToCartJSON: function(){
            var jsonResponse = {orderItemId: "",
                    orderId: "",
                    addToCartMsg: constants.EP_PRODUCT_ADDED
                   };      
			return JSON.parse(JSON.stringify(jsonResponse));
  }
};
