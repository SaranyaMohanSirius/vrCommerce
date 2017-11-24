
var JM = require('json-mapper');

module.exports = {

	mapTopCategoryJSON: function(input){
		var converter = JM.makeConverter({
			TopCategories: ['catalogGroupView',JM.map({
					name : 'name',
					identifier : 'identifier',
					id: 'uniqueID',
					parentCategoryId :'parentCatalogGroupID',
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
					parentCategoryId :'parentCatalogGroupID',
					store : 'storeID',
					
			}) ],
			totalCount : 'recordSetCount',
			
		});
		var result = converter(input);
        return result;
		
		
	}
};