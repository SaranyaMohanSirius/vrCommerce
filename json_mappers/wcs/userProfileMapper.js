import JM from 'json-mapper';

export default {

  /* 
   * JSON Mapper for generating response for Order History
   */

  orderHistoryJSON: function(body){
  		let converter = JM.makeConverter({
  				recordSetTotal : 'recordSetTotal',
			    resourceId: 'resourceId',
			    recordSetCount: 'recordSetCount',
			    recordSetComplete: 'recordSetComplete',
			    recordSetStartNumber: 'recordSetStartNumber',
			    Order: ['Order', JM.map({
			      storeId: 'storeUniqueID',
			      totalSalesTaxCurrency: 'totalSalesTaxCurrency',
			      totalAdjustment: 'totalAdjustment',
			      totalShippingTax: 'totalShippingTax',
			      placedDate: 'placedDate',
			      resourceId: 'resourceId',
			      adjustment: ['adjustment', JM.map({
			          amount: 'amount',
			          displayLevel: 'displayLevel',
			          usage: 'usage',
			          code: 'code',
			          currency: 'currency',
			      })],
			      totalProductPrice: 'totalProductPrice',
			      grandTotalCurrency: 'grandTotalCurrency',
			      orderId: 'orderId',
			      totalShippingTaxCurrency: 'totalShippingTaxCurrency',
			      totalShippingCharge: 'totalShippingCharge',
			      totalShippingChargeCurrency: 'totalShippingChargeCurrency',
			      grandTotal: 'grandTotal',
			      orderStatus: 'orderStatus',
			      totalSalesTax: 'totalSalesTax',
			      totalProductPriceCurrency: 'totalProductPriceCurrency',
			      totalAdjustmentCurrency: 'totalAdjustmentCurrency',
			    })],		
  		})

        let result = converter(body);
        return result;
  },

  /* 
   * JSON Mapper for generating response for personal information of an user
   */

  personalInformationJSON: function(body){

  	let converter = JM.makeConverter({
  		address: {
  			addressId: 'address.addressId',
  			addressLine1: 'address.address1',
  			addressLine2: 'address.address2',
  			addressType: 'address.addressType',
  			city: 'address.city',
  			country: 'address.country',
  			email1: 'address.email1',
  			mobilePhone1Country: 'address.mobilePhone1Country',
  			phone1: 'address.phone1',
  			state: 'address.state',
  			zipCode: 'address.zipCode',
  		},
  		userInfo: {
  			demographics: {
  				age: 'demographics.age',
  				dateOfBirth: 'demographics.dateOfBirth',
  				gender: 'demographics.gender',
  			},
  			firstName: 'address.firstName',
  			lastName: 'address.lastName',
  			logonId: 'logonId',
  			middleName: 'address.middleName',
  			nickName: 'address.nickName',
  			personTitle: 'personTitle',
  			userId: 'userId',
  		}
  	})
  	let result = converter(body);
    return result;
  }

};