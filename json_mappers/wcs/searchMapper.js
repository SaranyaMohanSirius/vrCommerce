var JM = require('json-mapper');

module.exports = {
    mapSearchResultJSON : function(body,messageData){
        let tbody = JSON.parse(body);
        let pageSize = Number(messageData.pageSize);
        let recordSetTotal = Number(tbody.recordSetTotal);
        let pages = Math.floor(recordSetTotal / pageSize) +1;
        var converter = JM.makeConverter({
            pagination: {
                pageSize: JM.helpers.def(messageData.pageSize),
                currentPageNumber: JM.helpers.def(messageData.currentPage),
                resultsTotal: 'recordSetTotal',
                resultsCurrentPage: 'recordSetCount',
                pages: JM.helpers.def(pages),
             },
            searchResults: ['catalogEntryView', JM.map({                                    
                     availability: 'uniqueID',
                     listPrice: 'price.0.value',
                     purchasePrice: 'price.1.value',
                     displayName: 'name',
                     code: 'partNumber',
                     resourceIdentifier: 'resourceId',
                     store: 'storeID',
                     thumbnail : 'thumbnail',
                     attributes: ['attributes', JM.map({
                          displayable: 'displayable',
                          usage: 'usage',
                          name: 'name',
                          identifier: 'identifier',
                          values: 'values.0.value', 

                     })],
              })], 
        });
        var result = converter(tbody);
        return result;
    }
}