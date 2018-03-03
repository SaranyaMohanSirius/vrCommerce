import JM from 'json-mapper';
import constants from '../../constants/wcs9/constants';

export default {

    /* 
     * JSON Mapper for mapping responses for search results page 
     */

    mapSearchResultJSON : function(body,messageData){
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
            searchResults: ['CatalogEntryView', JM.map({                                    
                     uniqueID: 'uniqueID',
                     listPrice: 'Price.0.priceUsage',
                     purchasePrice: 'Price.0.priceValue',
                     displayName: 'name',
                     code: 'partNumber',
                     store: 'storeID',
                     seoKeyword: 'seo_token_ntk',
                     thumbnail : ['thumbnail',function(url){ 
                        if(url){
                          return (constants.WCS_DOUBLE_SLASH+constants.WCS_HOSTNAME_NOPORT+url); 
                        }
                     }],
                     attributes: ' ',
              })],
            facets: ['FacetView',JM.map({
                entry : ['Entry', JM.map({
                    count : 'count',
                    uniqueId : ' ',
                    label : 'label',
                    value : 'entryValue',
                    image : ['image',function(url){ 
                        if(url){
                          return (constants.WCS_DOUBLE_SLASH+constants.WCS_HOSTNAME_NOPORT+url); 
                        }
                    }],

                })],
                extendedData: ' '

            })], 
        });
        let result = converter(body);
        return result;
    }
}