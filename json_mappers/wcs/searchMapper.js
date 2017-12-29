import JM from 'json-mapper';

export default {

    /* 
     * JSON Mapper for mapping responses for search results page 
     */

    mapSearchResultJSON : function(body,messageData){
        let pageSize = Number(messageData.pageSize);
        let recordSetTotal = Number(body.recordSetTotal);
        let pages = Math.floor(recordSetTotal / pageSize) +1;
        let converter = JM.makeConverter({
            pagination: {
                pageSize: JM.helpers.def(messageData.pageSize),
                currentPageNumber: JM.helpers.def(messageData.currentPage),
                resultsTotal: 'recordSetTotal',
                resultsCurrentPage: 'recordSetCount',
                pages: JM.helpers.def(pages),
             },
            resourceIdentifier: 'resourceId',
            searchResults: ['catalogEntryView', JM.map({                                    
                     availability: 'uniqueID',
                     listPrice: 'price.0.value',
                     purchasePrice: 'price.1.value',
                     displayName: 'name',
                     code: 'partNumber',
                     store: 'storeID',
                     thumbnail : 'thumbnail',
                     attributes: ['attributes', JM.map({
                          displayable: 'displayable',
                          name: 'name',
                          identifier: 'identifier',
                          values: 'values.0.value', 

                     })],
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
}