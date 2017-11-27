var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');
var _ = require("underscore");


module.exports = {

  /*Normal Response for Add to Cart this needs to be refine*/ 
  addShippingAddressJSON: function(){
            var jsonResponse = {userId: "",
                    addShippingAddressMsg: constants.EP_ADDRESS_ADDED
                   };      
			return JSON.parse(JSON.stringify(jsonResponse));
  }

    
};
