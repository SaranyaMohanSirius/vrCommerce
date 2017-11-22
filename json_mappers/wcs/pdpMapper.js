var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

module.exports = {

  /*json Mapper for mapping the PDP header in WCS*/ 
  mapPdpJSON: function(body){
		
		var converter = JM.makeConverter({
		
			catalogEntryView: ['catalogEntryView', JM.map({
				
				hasSingleSKU: 'hasSingleSKU',

				catalogEntryTypeCode: 'catalogEntryTypeCode',
				
				buyable: 'buyable',
				
				store: 'storeID',

				availability: '_availability.0.state',
				
				listPrice : 'price.0.value',
				
				purchasePrice: 'price.1.value',
				
				code: 'partNumber',
				
				resourceId : 'resourceId',
				
				displayName: 'name',
				
				attributes: ['attributes', JM.map({
					  displayable: 'displayable',
					  usage: 'usage',
					  name: 'name',
					  identifier: 'identifier',
					  values: ['values', JM.map({
						identifier: 'identifier',
                        uniqueID: 'uniqueID',
					  })], 

				})],
				
				swatches: ['sKUs', JM.map({					
					options: {
						SKU: 'uniqueID',
						partNumber: 'partNumber',
						attributes: ['attributes', JM.map({
							name: 'name',
							value: 'values.0.value',
							image1: 'image1',
						})],
					},
				})],
				
				thumbnail: 'thumbnail',
				fullImage: 'fullImage',
			})],
		});
	    
		var result = converter(body);
        return result;

  }          

};
