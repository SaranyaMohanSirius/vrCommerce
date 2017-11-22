var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

module.exports = {


  /*json mapper for mapping the product list json for category landing page in EP*/
  mapSearchResultJSON: function(body){

  			 var converter = JM.makeConverter({

              pagination: {
                  pageSize: 'pagination.page-size',
                  currentPageNumber: 'pagination.current',
                  resultsTotal: 'pagination.results',
                  resultsCurrentPage: 'pagination.results-on-page',
                  pages: 'pagination.pages',

               },
              searchResults: ['_element', JM.map({
                                       
                     availability: '_availability.0.state',
                     listPrice: '_price.0.list-price.0.display',
                     purchasePrice: '_price.0.purchase-price.0.display',
                     displayName: '_definition.0.display-name',
                     code: '_code.0.code',
                     resourceIdentifier: '_code.0.links.0.uri',
                     store: JM.helpers.def(constants.EP_STORE),
                     thumbnail : ['_code.0.code',function(code){ 
                          var originalCode = code.split(".")[0];
                          return (constants.EP_AWS_IMAGE_PATH + originalCode + constants.EP_IMAGE_FMT ); 

                      }],


                     attributes: ['_definition.0.details', JM.map({
                          displayable: JM.helpers.def('true'),
                          usage: JM.helpers.def('Descriptive'),
                          name: 'display-name',
                          identifier: 'name',
                          values: 'value', 

                     })],

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
                    }]
              })],


          });

          var result = converter(body);
          return result;
  }          

};