var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');
var _ = require("underscore");


module.exports = {

  /* Normal Response for Adding address this needs to be refine */ 
  addShippingAddressJSON: function(){
            var jsonResponse = {userId: "",
                    addShippingAddressMsg: constants.EP_ADDRESS_ADDED
                   };      
			return JSON.parse(JSON.stringify(jsonResponse));
  },

  /* Forming shipping address JSON */
  getShippingAddressesJSON: function(body){
            var converter = JM.makeConverter({
                contact: ['_order.0._deliveries.0._element.0._destinationinfo', JM.map({
                      address:['_selector.0._choice',JM.map({
                          addressId: '_description.0.self.uri',
                          addressLine: '_description.0.address.street-address',
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
                      address1:['_selector.0._chosen',JM.map({
                          addressId: '_description.0.self.uri',
                          addressLine: '_description.0.address.street-address',
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
            var result = converter(body);
            return result;
  },

  /*Normal response for deleting address in EP*/
  deleteShippingAddressJSON: function(body){
                  var jsonResponse = {
                    deleteShippingAddressMsg: constants.EP_ADDRESS_DELETED
                   };      
      return JSON.parse(JSON.stringify(jsonResponse));
  }

    
};
