import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';


module.exports = {

  /* Forming shipping address JSON */
  getAddressBookJSON: function(body){
            let converter = JM.makeConverter({
                resourceId: 'self.uri',
                addressList: ['_element', JM.map({
                          addressId: 'self.uri',
                          addressLine: {
                            addressLine1: 'address.street-address',
                            addressLine2: 'address.extended-address',
                          },
                          addressType: JM.helpers.def('ShippingAndBilling'),
                          country: 'address.country-name',
                          city: 'address.locality',
                          firstName: 'name.given-name',
                          lastName: 'name.family-name',                          
                          nickName: 'name.given-name', 
                          zipCode: 'address.postal-code',
                          state: 'address.region',
                          email1: JM.helpers.def(' '),
                          phone1: JM.helpers.def(' '),
                          primary: JM.helpers.def('false'),
                      })]
            });
            let result = converter(body);
            return result;
  },
    
};
