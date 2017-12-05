
import JM from 'json-mapper';
import constants from '../../constants/wcs/constants';

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
					store : 'storeID',
					
			}) ],
			totalCount : 'recordSetCount',
			
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
					
			}) ],
			totalCount : 'recordSetCount',
			
		});
		let result = converter(input);
        return result;
		
		
	},

	  /* 
	   * JSON Mapper for generating responses for product list JSON for category landing page 
	   */

	mapProductsListForCategoryJSON: function(body,req,messageData){
			 let totalCount = body.recordSetTotal;
			 console.log("totalCount: "+totalCount + "messageData: " + messageData);
			 let pageSize = messageData.pageSize;
			 let totalPages;
			 if(totalCount == pageSize){
			 	totalPages = (totalCount/pageSize);
			 }else{
			 	totalPages = Math.floor(totalCount/pageSize)+1;
			 }
			 let resultsCurrentPage;
			 if(messageData.currentPageNumber != totalPages){
			 	resultsCurrentPage = pageSize;
			 }else{
			 	resultsCurrentPage = totalCount%pageSize;
			 }


  			 let converter = JM.makeConverter({

              pagination: {
                  pageSize: JM.helpers.def(messageData.pageSize),
                  currentPageNumber: JM.helpers.def(messageData.currentPageNumber),
                  resultsTotal: JM.helpers.def(totalCount.toString()),
                  resultsCurrentPage: JM.helpers.def(resultsCurrentPage.toString()),
                  pages: JM.helpers.def(totalPages.toString()),

               },
              productsList: ['catalogEntryView', JM.map({
                                       
                     availability: '',

                     listPrice : 'price.0.value',
				
					 purchasePrice: 'price.1.value',

                     displayName: 'name',

                     code: 'partNumber',

                     uniqueID: 'uniqueID',

                     store: 'storeID',

                     thumbnail : ['thumbnail',function(url){ 
                          
                          return (constants.WCS_HOSTNAME_NOPORT+url); 

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