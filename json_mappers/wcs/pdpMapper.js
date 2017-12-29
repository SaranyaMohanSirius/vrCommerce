import JM from 'json-mapper';

export default {

  /* 
   * JSON Mapper for generating responses for PDP page 
   */

   mapPdpJSON: function(body,inv){	
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
				skus: ['sKUs',JM.map({
					
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
				})],
			})],	
		});    
		let result = converter(body);
		let jsonObj = result;
		
		for(let i=0 ; i<jsonObj.catalogEntryView.length ; i++){
			let invAvailability = inv.InventoryAvailability[i].inventoryStatus;	
			let quantityAvailable = inv.InventoryAvailability[i].availableQuantity;	
			
			jsonObj.catalogEntryView[i].availability = invAvailability;
			jsonObj.catalogEntryView[i].quantity = quantityAvailable;
		}	
        return jsonObj;
  },
    /* 
   * JSON Mapper for generating responses for Quick View page 
   */

  mapQuickViewJSON: function(body,inv){	
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
				skus: ['sKUs',JM.map({
					
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
				})],
			})],	
		});    
		let result = converter(body);
		let jsonObj = result;
		
		for(let i=0 ; i<jsonObj.catalogEntryView.length ; i++){
			let invAvailability = inv.InventoryAvailability[i].inventoryStatus;	
			let quantityAvailable = inv.InventoryAvailability[i].availableQuantity;	
			
			jsonObj.catalogEntryView[i].availability = invAvailability;
			jsonObj.catalogEntryView[i].quantity = quantityAvailable;
		}	
        return jsonObj;
  },
  mapRecentlyViewedProductsJSON: function(body){
	  let converter = JM.makeConverter({
		  resourceId: 'resourceId',
		  recentlyViewedProducts: [ 'MarketingSpotData.0.baseMarketingSpotActivityData', JM.map({
			catalogEntryTypeCode: 'catalogEntryTypeCode',
			currency: 'currency',
			partNumber: 'productPartNumber',
			productId: 'productId',
			purchasePrice: 'standardPrice',
			listPrice: 'listPrice',
			description: ['description', JM.map({
				thumbnail: 'thumbnail',
				shortDescription: 'shortDescription',
				longDescription: 'longDescription',
				language: 'language',
				productName: 'productName'
			})],
			attributes: ['attributes', JM.map({
				name: 'name',
				stringValue: 'stringValue'
			})]
		  })]

	  });
	  let result = converter(body);
	  return result;
  }        
};
