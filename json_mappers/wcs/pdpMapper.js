import constants from '../../constants/elasticPath/constants';
import util from '../../util/elasticPath/util';
import JM from 'json-mapper';

export default {
  mapPdpJSON: function(body,inv){	
		let invAvailability = inv.InventoryAvailability[0].inventoryStatus;	
		let quantityAvailable = inv.InventoryAvailability[0].availableQuantity;	
		let converter = JM.makeConverter({
			catalogEntryView: ['catalogEntryView', JM.map({		
				hasSingleSKU: 'hasSingleSKU',
				catalogEntryTypeCode: 'catalogEntryTypeCode',				
				buyable: 'buyable',				
				store: 'storeID',			
				listPrice : 'price.0.value',			
				purchasePrice: 'price.1.value',			
				code: 'partNumber',			
				resourceId : 'resourceId',			
				displayName: 'name',	
				attributes: ['attributes', JM.map({
					  displayable: 'displayable',
					  name: 'name',
					  identifier: 'identifier',
					  values: ['values', JM.map({
						identifier: 'identifier',
                        uniqueID: 'uniqueID',
					  })], 
				})],
				merchandisingAssociations: ['merchandisingAssociations', JM.map({
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',				
					buyable: 'buyable',				
					store: 'storeID',			
					listPrice : 'price.0.value',			
					purchasePrice: 'price.1.value',			
					code: 'partNumber',			
					resourceId : 'resourceId',			
					displayName: 'name',	
					attributes: ['attributes', JM.map({
						  displayable: 'displayable',
						  name: 'name',
						  identifier: 'identifier',
						  values: ['values', JM.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
						  })], 
					})],
					thumbnail: 'thumbnail',
					fullImage: 'fullImage',			
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
		let result = converter(body);
		let jsonObj = result;
		jsonObj.catalogEntryView[0].availability = invAvailability;
		jsonObj.catalogEntryView[0].quantity = quantityAvailable;
        return jsonObj;
  }          
};
