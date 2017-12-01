var JM = require('json-mapper');
var _ = require("underscore");
var extendify = require('extendify');

module.exports = {

  /*json Mapper for mapping the Addresses in WCS*/ 
  mapGetAddressJSON: function(addressResp,checkoutResp){
		var converter1 = JM.makeConverter({
			address: ['contact',JM.map({
					addressId : 'addressId',
					addressLine: {
                            addressLine1: 'addressLine.0',
                            addressLine2: 'addressLine.1',
                          },
					addressType: 'addressType',
					country : 'country',
					city : 'city',
					firstName : 'firstName',
					lastName : 'lastName',
					nickName : 'nickName',
					zipCode : 'zipCode',
					state : 'state',
					email1 : 'email1',
					phone1 : 'phone1',
					primary : 'primary'
					
			})]			
		});
		
		var converter = JM.makeConverter({
			defaultAddress: ['CheckoutProfile',JM.map({
					addressId : 'shipping_addressId',
					addressLine: {
                            addressLine1: 'shipping_addressLine.0',
                            addressLine2: 'shipping_addressLine.1',
                          },
					addressType: 'shipping_addressType',
					country : 'shipping_country',
					city : 'shipping_city',
					firstName : 'shipping_firstName',
					lastName : 'shipping_lastName',
					nickName : 'shipping_nickName',
					zipCode : 'shipping_zipCode',
					state : 'shipping_state',
					email1 : 'shipping_email1',
					phone1 : 'shipping_phone1',
					primary : 'shipping_primary'
					
			})]			
		});
		
		var defaultAddressResult = converter(checkoutResp);
		var addressResult = converter1(addressResp);
		
		_.extend = extendify({
			inPlace: false,
			arrays : 'replace',
			isDeep: true
		});
		
		var contact = _.extend(defaultAddressResult,addressResult);
		var result = { contact : [
			contact
		]};
		console.log(JSON.stringify(contact));	
		contact.userId = checkoutResp.userId;
        return result;

  },

  /* Normal Response for Adding address this needs to be refined */ 
  mapAddAddressJSON: function(body){
        var jsonResponse = {
			userId: body.userId,			
			addressId: body.addressId,
            addShippingAddressMsg: constants.WCS_ADDRESS_ADDED
        };      
		return JSON.parse(JSON.stringify(jsonResponse));
  }, 

  /* Normal Response for Updating address this needs to be refined */ 
  mapUpdateAddressJSON: function(body){
        var jsonResponse = {
			addressId: body.addressId,
            updateShippingAddressMsg: constants.WCS_ADDRESS_UPDATED
        };      
		return JSON.parse(JSON.stringify(jsonResponse));
  },   

  /* Normal Response for Deleting address this needs to be refined */ 
  mapDeleteAddressJSON: function(body){
        var jsonResponse = {
            deleteShippingAddressMsg: constants.WCS_ADDRESS_DELETED
        };      
		return JSON.parse(JSON.stringify(jsonResponse));
  },
  
  /* Normal Response for Selecting address this needs to be refined */ 
  mapSelectAddressJSON: function(body){
        var jsonResponse = {
            selectShippingAddressMsg: constants.WCS_ADDRESS_SELECTED
        };      
		return JSON.parse(JSON.stringify(jsonResponse));
  }, 

};
