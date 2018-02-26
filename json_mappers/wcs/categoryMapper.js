
import JM from 'json-mapper';
import constants from '../../constants/wcs/constants';
import seoController from '../../controllers/wcs/seoCtlr';

export default {

	/* 
	 * JSON Mapper for generating responses for Top category
	 */

	mapTopCategoryJSON: function(input){
		let converter = JM.makeConverter({
			TopCategories: ['catalogGroupView',JM.map({
					name : 'name',
					identifier : 'identifier',
					id: 'uniqueID',
					seoKeyword: 'seo_token_ntk',
					store : 'storeID',
					
			}) ],
			totalCount : 'recordSetCount',
			
		});
		let result = converter(input);
        return result;
		
		
	},

	/* 
	 * JSON Mapper for generating responses for category
	 */

	mapCategoryJSON: function(input){
		let converter = JM.makeConverter({
			Category: ['catalogGroupView',JM.map({
				fullImage: 'fullImage',
				fullImageAltDescription: 'fullImageAltDescription',
				parentCatalogGroupID: 'parentCatalogGroupID',
				identifier: 'identifier',
				metaDescription: 'metaDescription',
				metaKeyword: 'metaKeyword',
				name: 'name',
				productsURL: 'productsURL',
				resourceId: 'resourceId',
				shortDescription: 'shortDescription',
				seoKeyword: 'seo_token_ntk',
				thumbnail: 'thumbnail',
				title: 'title',
				uniqueID: 'uniqueID'
			}) ],
			
		});
		let result = converter(input);
        return result;
		
		
	},

	 /* 
	  * JSON Mapper for generating responses for Sub Category
	  */

	mapSubCategoryJSON: function(input){
		let converter = JM.makeConverter({
			SubCategories: ['catalogGroupView',JM.map({
					name : 'name',
					identifier : 'identifier',
					id: 'uniqueID',
					store : 'storeID',
					seoKeyword: 'seo_token_ntk',
					thumbnail : ['thumbnail',function(url){ 
                        if(url){
                          return (constants.HTTP_URI_CONSTANT+constants.WCS_DOUBLE_SLASH+constants.WCS_HOSTNAME_NOPORT+url); 
                      	}
                    }],
			})],
			totalCount : 'recordSetCount',
			
		});
		let result = converter(input);
        return result;
		
		
	},

	  /* 
	   * JSON Mapper for generating responses for product list JSON for category landing page 
	   */

	mapProductsListForCategoryJSON: function(body,messageData){
			 let pageSize = Number(messageData.pageSize);
			 let recordSetTotal = Number(body.recordSetTotal);
			 let pages = Math.ceil(recordSetTotal / pageSize);
			 let converter = JM.makeConverter({
              pagination: {
                pageSize: JM.helpers.def(messageData.pageSize),
                currentPageNumber: JM.helpers.def(messageData.currentPage),
                resultsTotal: 'recordSetTotal',
                resultsCurrentPage: 'recordSetCount',
                pages: JM.helpers.def(pages),
			  },
			  resourceIdentifier: 'resourceId',
              productsList: ['catalogEntryView', JM.map({                     
                     availability: '',
                     listPrice : 'price.0.value',
					 purchasePrice: 'price.1.value',
                     displayName: 'name',
                     code: 'partNumber',
					 uniqueID: 'uniqueID',
                     store: 'storeID',
                     seoKeyword: 'seo_token_ntk',
                     thumbnail : ['thumbnail',function(url){ 
                        if(url){
                          return (constants.WCS_DOUBLE_SLASH+constants.WCS_HOSTNAME_NOPORT+url); 
                      	}
                     }],

                      attributes: ['attributes', JM.map({
						  displayable: 'displayable',
						  name: 'name',
						  identifier: 'identifier',
						  values: 'values.0.value',					  	 
					  })],
                    hasSingleSKU: 'hasSingleSKU',
                    catalogEntryTypeCode: 'catalogEntryTypeCode',
              })],
              facets: ['facetView',JM.map({
              	entry : ['entry', JM.map({
              		count : 'count',
              		uniqueId : function(input){
              			return input.extendedData.uniqueId;
              		},
              		label : 'label',
              		value : 'value',
              		image : ['image',function(url){ 
                          if(url){
                          return (constants.WCS_DOUBLE_SLASH+constants.WCS_HOSTNAME_NOPORT+url); 
                      }

                    }],
              	})],
              	extendedData: {
              		name: 'name',
              		value: 'value',
              		facet_id: 'extendedData.facet_id',
              		fdesc: 'extendedData.fdesc',
              		fname: 'extendedData.fname',
              		srchattr_id: 'extendedData.srchattr_id',
              		srchattridentifier: 'extendedData.srchattridentifier',
              		storeent_id: 'extendedData.storeent_id'
              	} 

              })],


          });

          let result = converter(body);
          return result;
  		}   
};