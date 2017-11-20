var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');
var _ = require("underscore");

var globalcount = 0;

module.exports = {

  /*json Mapper for mapping the Top level categories for header in EP*/ 
  mapTopCategoriesJSON: function(body,res){
    
            var converter = JM.makeConverter({
                
                Categories: ['_element', JM.map({
                    name: 'display-name',
                    identifier: 'name',
                    id: 'self.uri',
                    parentCategoryId: JM.helpers.def('-1'),
                    store: JM.helpers.def(constants.EP_STORE)

                })],
                totalCount: ['_element', function(arr){
                  return arr.length;
                }]
            });

            var result = converter(body);
			return result;
  },


  /*json Mapper for mapping the Top level categories for header in EP*/ 
  mapSubCategoriesJSON: function(body,res,identifier){


              var converter = JM.makeConverter({
                
                SubCategories: ['_child', JM.map({
                    name: 'display-name',
                    identifier: 'name',
                    id: 'self.uri',
                    parentCategoryId: JM.helpers.def(identifier),
                    store: JM.helpers.def(constants.EP_STORE),
                    
                })],
                totalCount: ['_child', function(arr){
                  return arr.length;
                }],
            });

            var result = converter(body);
            return result;
  },


  mapProductsListForCategoryJSON: function(body,res){

  			 var converter = JM.makeConverter({

              pagination: {
                  pageSize: 'pagination.page-size',
                  currentPageNumber: 'pagination.current',
                  resultsTotal: 'pagination.results',
                  resultsCurrentPage: 'pagination.results-on-page',

               },
              productsList: ['_element', JM.map({
                                       
                     availability: '_availability.0.state',
                     listPrice: '_price.0.list-price.0.display',
                     purchasePrice: '_price.0.purchase-price.0.display',
                     displayName: '_definition.0.display-name',
                     code: '_code.0.code',
                     resourceIdentifier: '_code.0.links.0.uri',
                     store: JM.helpers.def(constants.EP_STORE),


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
