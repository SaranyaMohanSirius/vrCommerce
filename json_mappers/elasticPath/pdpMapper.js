import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';

module.exports = {

  /*json Mapper for mapping the PDP header in EP*/ 
  mapPdpJSON: function(body, recommendations){
		
		let converter = JM.makeConverter({
		
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
							unniqueId: '_description.0.self.uri',
						})],
						chosen: ['_chosen', JM.map({
							name: '_description.0.display-name',
							uniqueId: '_description.0.self.uri',
						})],
					})],
				})],
				
				thumbnail : ['_code.0.code',function(code){ 
				    let imageName = (code.split("-")[0]).toUpperCase();
				    imageName = imageName.replace(".", "-");
				    let concatImageURL =  constants.EP_AWS_IMAGE_PATH + imageName + constants.EP_IMAGE_FMT;		  
					return concatImageURL;
				}],

				fullImage : ['_code.0.code',function(code){ 
				    let imageName = (code.split("-")[0]).toUpperCase();
				    imageName = imageName.replace(".", "-");
				    let concatImageURL =  constants.EP_AWS_IMAGE_PATH + imageName + constants.EP_IMAGE_FMT;		  
					return concatImageURL;
				}],
				
			}],
		});
		
		let result = converter(body);
		
		result.catalogEntryView.merchandisingAssociations = recommendations;
		
        return result;

  },

	convertMerchAssoc: function(body){
				  
		let converter = JM.makeConverter({
				
			hasSingleSKU: ['_definition.0.details', function(arr){
				  if(arr.length >= 3)
					return false;
				  else
					return true;
			}],

			catalogEntryTypeCode: ['_definition.0.details', function(arr){
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
			
			thumbnail : ['_code.0.code',function(code){ 
				let imageName = (code.split("-")[0]).toUpperCase();
				imageName = imageName.replace(".", "-");
				let concatImageURL =  constants.EP_AWS_IMAGE_PATH + imageName + constants.EP_IMAGE_FMT;		  
				return concatImageURL;
			}],

			fullImage : ['_code.0.code',function(code){ 
				let imageName = (code.split("-")[0]).toUpperCase();
				imageName = imageName.replace(".", "-");
				let concatImageURL =  constants.EP_AWS_IMAGE_PATH + imageName + constants.EP_IMAGE_FMT;		  
				return concatImageURL;
			}],
			
		});
		
		let result = converter(body);
        return result;

	}
  

};
