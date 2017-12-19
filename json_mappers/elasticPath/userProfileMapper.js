import {getLogger} from '../../util/elasticPath/util';
import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';
let logger=getLogger();

export default {
  /**
   * json mapper for mapping Order History JSON
   */
        getOrderHistoryJSON: function(body){
            let result="";
            //Condition for checking the empty Body            
		if(body._purchases){
			if(body._purchases[0]._element){
				let converter = JM.makeConverter({
					orderHistoryJSON: ['_purchases.0._element', JM.map({
						Order: [{
							storeId : JM.helpers.def(constants.EP_STORE),
							orderId : 'purchase-number',
							grandTotal : 'monetary-total.0.amount',
							orderStatus : 'status',
							resourceId : 'self.href',
							placedDate: 'purchase-date.display-value',
							totalAdjustment: 'tax-total.amount',
							totalSalesTaxCurrency: 'tax-total.currency',
							adjustment : ['_discount', JM.map({
								amount: 'discount.0.amount',
								displayLevel: JM.helpers.def('Order'),
								usage: JM.helpers.def('Discount'),
								currency: 'discount.0.currency'
							})],
							totalShippingCharge : '',
							totalShippingChargeCurrency : '',
							totalProductPrice : '_lineitems.0._element.0._list.0._element.0.line-extension-total.0.amount',
							totalProductPriceCurrency : '_lineitems.0._element.0._list.0._element.0.line-extension-total.0.currency',
							grandTotalCurrency : 'monetary-total.0.currency'
						}]
					})]	
							
				});
				result = converter(body);
				
			}                    
            }
         
            return result;
        },

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
  	}
       
                
};