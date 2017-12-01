import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';


module.exports = {

  /* Normal Response for Adding address this needs to be refine */ 
  addShippingAddressJSON: function(){
            let jsonResponse = {userId: "",
                    addShippingAddressMsg: constants.EP_ADDRESS_ADDED
                   };      
			return JSON.parse(JSON.stringify(jsonResponse));
  },

  /* Forming shipping address JSON */
  getShippingAddressesJSON: function(body){
            let converter = JM.makeConverter({
                contact: ['_element.0._destinationinfo.0._selector', JM.map({
                      address:['_choice',JM.map({
                          addressId: '_description.0.self.uri',
                          addressLine: {
                            addressLine1: '_description.0.address.street-address',
                            addressLine2: '_description.0.address.extended-address',
                          },
                          addressType: JM.helpers.def('ShippingAndBilling'),
                          country: '_description.0.address.country-name',
                          city: '_description.0.address.locality',
                          firstName: '_description.0.name.given-name',
                          lastName: '_description.0.name.family-name',                          
                          nickName: '_description.0.name.given-name', 
                          zipCode: '_description.0.address.postal-code',
                          state: '_description.0.address.region',
                          email1: JM.helpers.def(' '),
                          phone1: JM.helpers.def(' '),
                          primary: JM.helpers.def('false'),
                      })],
                      defaultAddress:['_chosen',JM.map({
                          addressId: '_description.0.self.uri',
                          addressLine: {
                            addressLine1: '_description.0.address.street-address',
                            addressLine2: '_description.0.address.extended-address',
                          },
                          addressType: JM.helpers.def('ShippingAndBilling'),
                          country: '_description.0.address.country-name',
                          city: '_description.0.address.locality',
                          firstName: '_description.0.name.given-name',
                          lastName: '_description.0.name.family-name',
                          nickName: '_description.0.name.given-name',
                          zipCode: '_description.0.address.postal-code',
                          state: '_description.0.address.region',
                          email1: JM.helpers.def(' '),
                          phone1: JM.helpers.def(' '),
                          primary: JM.helpers.def('true'),
                      })],
                      userId : JM.helpers.def(' '),  
                })],
            });
            let result = converter(body);
            return result;
  },

  /*Normal response for deleting address in EP*/
  deleteShippingAddressJSON: function(body){
                  let jsonResponse = {
                    deleteShippingAddressMsg: constants.EP_ADDRESS_DELETED
                   };      
      return JSON.parse(JSON.stringify(jsonResponse));
  },

  /*Normal response for updating address in EP*/
  updateShippingAddressJSON: function(body){
                  let jsonResponse = {
                    updateShippingAddressMsg: constants.EP_ADDRESS_UPDATED
                   };      
      return JSON.parse(JSON.stringify(jsonResponse));

  },

  /*Normal response for selecting address in EP*/
  selectShippingAddressJSON: function(body){
                   let jsonResponse = {
                    selectShippingAddressMsg: constants.EP_ADDRESS_SELECTED
                   };      
      return JSON.parse(JSON.stringify(jsonResponse));               
  }

    
};
