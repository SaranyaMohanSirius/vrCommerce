import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';


module.exports = {

  /*json Mapper for mapping the Top level categories for header in EP*/ 
  mapTopCategoriesJSON: function(body){
    
            let converter = JM.makeConverter({
                
                TopCategories: ['_element', JM.map({
                    name: 'display-name',
                    identifier: 'name',
                    id: 'self.uri',
                    store: JM.helpers.def(constants.EP_STORE)

                })],
                totalCount: ['_element', function(arr){
                  return arr.length;
                }]
            });

            let result = converter(body);
			return result;
  },


  /*json Mapper for mapping the Top level categories for header in EP*/ 
  mapSubCategoriesJSON: function(body,identifier){


              let converter = JM.makeConverter({
                
                SubCategories: ['_child', JM.map({
                    name: 'display-name',
                    identifier: 'name',
                    id: 'self.uri',
                    store: JM.helpers.def(constants.EP_STORE),
                    
                })],
                totalCount: ['_child', function(arr){
                  return arr.length;
                }],
            });

            let result = converter(body);
            return result;
  },

  /*json mapper for mapping the product list json for category landing page in EP*/
  mapProductsListForCategoryJSON: function(body){

  			 let converter = JM.makeConverter({

              pagination: {
                  pageSize: 'pagination.page-size',
                  currentPageNumber: 'pagination.current',
                  resultsTotal: 'pagination.results',
                  resultsCurrentPage: 'pagination.results-on-page',
                  pages: 'pagination.pages',

               },
              productsList: ['_element', JM.map({
                                       
                     availability: '_availability.0.state',
                     listPrice: '_price.0.list-price.0.display',
                     purchasePrice: '_price.0.purchase-price.0.display',
                     displayName: '_definition.0.display-name',
                     code: '_code.0.code',
                     uniqueID: '_code.0.links.0.uri',
                     store: JM.helpers.def(constants.EP_STORE),
                     thumbnail : ['_code.0.code',function(code){ 
                          let originalCode = code.split(".")[0];
                          return (constants.EP_AWS_IMAGE_PATH + originalCode + constants.EP_IMAGE_FMT ); 

                      }],


                     attributes: ['_definition.0.details', JM.map({
                          displayable: JM.helpers.def('true'),
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

          let result = converter(body);
          return result;
  }          

};
