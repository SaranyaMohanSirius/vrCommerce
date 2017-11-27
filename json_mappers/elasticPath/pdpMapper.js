var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');



module.exports = {

  /*json Mapper for mapping the PDP header in EP*/ 
  mapPdpJSON: function(body, concatImageURL){
		
		var converter = JM.makeConverter({
		
			catalogEntryView: [{
				
				hasSingleSKU: ['_definition.0.links', function(arr){
					  if(arr.length >= 3)
						return false;
					  else
						return true;
				}],

				catalogEntryTypeCode: ['_definition.0.links', function(arr){
					  if(arr.length >= 3)
						return 'ProductBean';
					  else
						return 'ItemBean';
				}],
				
				buyable: JM.helpers.def('true'),
				
				store: JM.helpers.def(constants.EP_STORE),

				availability: '_availability.0.state',
				
				listPrice : '_price.0.list-price.0.display',
				purchasePrice: '_price.0.purchase-price.0.display',
				
				code: '_code.0.code',
				
				resourceId : '_code.0.links.0.uri',
				
				displayName: '_definition.0.display-name',
				
				attributes: ['_definition.0.details', JM.map({
					  displayable: JM.helpers.def('true'),
					  usage: JM.helpers.def('Descriptive'),
					  name: 'display-name',
					  identifier: 'name',
					  values: 'value', 

				})],
				
				swatches: ['_definition.0._options.0._element', JM.map({
					displayName: 'display-name',
					options: ['_selector', JM.map({
						choice: ['_choice', JM.map({
							name: '_description.0.display-name',
							href: JM.helpers.def(' '),
						})],
						chosen: ['_chosen', JM.map({
							name: '_description.0.display-name',
							href: JM.helpers.def(' '),
						})],
					})],
				})],
				
				thumbnail: JM.helpers.def(concatImageURL),
				fullImage: JM.helpers.def(concatImageURL),
			}],
		});
	    
		var result = converter(body);
        return result;

  }          

};
