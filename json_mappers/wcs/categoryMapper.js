
var JM = require('json-mapper');
var constants = require('../../constants/wcs/constants');

module.exports = {

	mapTopCategoryJSON: function(input){
		var converter = JM.makeConverter({
			TopCategories: ['catalogGroupView',JM.map({
					name : 'name',
					identifier : 'identifier',
					id: 'uniqueID',
					store : 'storeID',
					
			}) ],
			totalCount : 'recordSetCount',
			
		});
		var result = converter(input);
        return result;
		
		
	},
	mapSubCategoryJSON: function(input){
		var converter = JM.makeConverter({
			SubCategories: ['catalogGroupView',JM.map({
					name : 'name',
					identifier : 'identifier',
					id: 'uniqueID',
					store : 'storeID',
					
			}) ],
			totalCount : 'recordSetCount',
			
		});
		var result = converter(input);
        return result;
		
		
	},
	mapProductsListForCategoryJSON: function(body,req,messageData){
			 var totalCount = body.recordSetTotal;

			 var pageSize = messageData.pageSize;
			 var totalPages;
			 if(totalCount == pageSize){
			 	totalPages = (totalCount/pageSize);
			 }else{
			 	totalPages = Math.floor(totalCount/pageSize)+1;
			 }
			 var resultsCurrentPage;
			 if(messageData.currentPageNumber != totalPages){
			 	resultsCurrentPage = pageSize;
			 }else{
			 	resultsCurrentPage = totalCount%pageSize;
			 }


  			 var converter = JM.makeConverter({

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


          });

          var result = converter(body);
          return result;
  		}   
};