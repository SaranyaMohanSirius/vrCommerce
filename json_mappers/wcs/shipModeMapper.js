var constants = require('../../constants/wcs/constants');
var util = require('../../util/wcs/util');
var JM = require('json-mapper');

var globalcount = 0;

module.exports = {

  /*json Mapper for mapping the Shipmodes in WCS*/ 
  mapShipModeJSON: function(body){
		
		var converter = JM.makeConverter({
		
			usableShippingMode: [{
				choice:['usableShippingMode', JM.map({
					carrier: 'field2',
					displayName: 'shipModeDescription',
					name: 'shipModeCode',
				})],
				
			}],
		});
	    
		var result = converter(body);
        return result;

  }          

};