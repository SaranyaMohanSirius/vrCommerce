import constants from '../../constants/wcs/constants';
import JM from 'json-mapper';

export default {

  /* 
   * JSON Mapper for generating response for ADD TO CART 
   */

  addToCartJSON: function(body){

  			let converter = JM.makeConverter({

  					orderItem: ['orderItem', JM.map({
						  orderItemId: "orderItemId"
						  })],
            		
                    orderId: "orderId",

                    addToCartMsg: constants.WCS_PRODUCT_ADDED
  			})

            let result = converter(body);
          	return result;
  },

  /* 
   * JSON Mapper for generating responses for shopping cart 
   */

  mapShoppingCartJSON : function (body){

    let converter = JM.makeConverter({
          adjustments:['adjustment',JM.map({
              // amount:'amount',
              code:'code',
              currency:'currency',
              description: 'description',
              displayLevel:'displayLevel'
            })
          ],
          grandTotal:'grandTotal',
          grandTotalCurrency:'grandTotalCurrency',
          orderId:'orderId',
          cartLineItemId:  JM.helpers.def(''), 
          orderItem:['orderItem',JM.map({
              currency:'currency',
              freeGift:'freeGift',
              orderItemId:'orderItemId',
              orderItemInventoryStatus:'orderItemInventoryStatus',
              orderItemPrice:'orderItemPrice',
              partNumber:'partNumber',
              productId:'productId',
              quantity:'quantity',
              salesTax:'salesTax',
              salesTaxCurrency:'salesTaxCurrency',
              shippingCharge:'shippingCharge',
              shippingChargeCurrency:'shippingChargeCurrency',
              shippingTax:'shippingTax',
              unitPrice:'unitPrice',
              unitQuantity:'unitQuantity',
              usableShippingChargePolicy:'usableShippingChargePolicy',
          })],
          orderStatus:'orderStatus',
          recordSetCount:'recordSetCount',
          recordSetStartNumber:'recordSetStartNumber',
          recordSetTotal:'recordSetTotal',
          resourceId:'resourceId',
          resourceName:'resourceName',
          shipAsComplete:'shipAsComplete',
          storeNameIdentifier:'storeNameIdentifier',
          storeUniqueID:'storeUniqueID',
          totalAdjustment:'totalAdjustment',
          totalAdjustmentCurrency:'totalAdjustmentCurrency',
          totalProductPrice:'totalProductPrice',
          totalProductPriceCurrency:'totalProductPriceCurrency',
          totalSalesTax:'totalSalesTax',
          totalSalesTaxCurrency:'totalSalesTaxCurrency',
          totalShippingCharge:'totalShippingCharge',
          totalShippingChargeCurrency:'totalShippingChargeCurrency',
          totalShippingTax:'totalShippingTax',
          totalShippingTaxCurrency:'totalShippingTaxCurrency',
    });
    let result = converter(body);
    return result;

  },

  /* 
   * JSON Mapper for generating request for update cart 
   */

  mapUpdateCartRequestJSON : function(body){
    let converter = JM.makeConverter({
          orderItem :  ['lineItem',JM.map({
            orderItemId : 'lineItemId',
            quantity : 'quantity',
          })],
          x_calculateOrder : JM.helpers.def(constants.WCS_UPDATECART_CALC_ORDER),
          x_calculationUsage : JM.helpers.def(constants.WCS_UPDATECART_CALC_USAGE),

    
    });
    let result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for update cart 
   */

  mapUpdateCartResponseJSON : function(body){
    let converter = JM.makeConverter({
          orderId : 'orderId',
          lineItem :  ['orderItem', JM.map({
            lineItemId : 'orderItemId',

          })]
    
    });
    let result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating request for delete cart 
   */

  mapDeleteCartRequestJSON : function(body){
    let converter = JM.makeConverter({
            orderItemId :'lineItem.0.lineItemId',
            
    });
    let result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for delete cart 
   */

  mapDeleteCartResponseJSON :  function(body){
    let converter = JM.makeConverter({
            orderId: ['orderId', function(arr){
                     return arr[0];
              }],
    });
    let result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for delete all items in cart 
   */

  mapDeleteAllCartJSON : function(body){
    let converter = JM.makeConverter({
            message: JM.helpers.def("All Cart Items are Deleted Successfully"),
            
    });
    let result = converter(body);
    return result;
  },


  /* 
   * JSON Mapper for generating response for order confirmation
   */

   mapOrderConfirmationResponseJSON : function(body,payment){
      let paymentsData = payment.totalPaymentDataArray;
      let converter = JM.makeConverter({

            adjustment:['adjustment',JM.map({
                code:'code',
                currency:'currency',
                description: 'description',
                displayLevel:'displayLevel',
                usage: 'usage',
            })],
            grandTotal: 'grandTotal',
            grandTotalCurrency: 'grandTotalCurrency',
            locked: 'locked',
            orderId: 'orderId',
            lineItem:['orderItem',JM.map({
                adjustment:['adjustment',JM.map({
                    code:'code',
                    currency:'currency',
                    description: 'description',
                    usage: 'usage',
                })], 
                currency: 'currency',
                freeGift: 'freeGift',
                lineItemId: 'orderItemId',
                lineItemPrice: 'orderItemPrice',
                adjustedPrice: function(input){
                  return (Number(input.orderItemPrice) + Number(input.totalAdjustment.value));
                },
                partNumber: 'partNumber',
                productId: 'productId',
                quantity: 'quantity',
                unitPrice: 'unitPrice',
                unitQuantity: 'unitQuantity',
            })], 
            shipping: {
                firstName: 'orderItem.0.firstName',
                lastName: 'orderItem.0.lastName',
                middleName: 'orderItem.0.middleName',
                email1: 'orderItem.0.email1',
                addressId: 'orderItem.0.addressId',
                addressLine: 'orderItem.0.addressLine',
                city: 'orderItem.0.city',
                state: 'orderItem.0.state',
                country: 'orderItem.0.country',
                postalCode: 'orderItem.0.postalCode',
                carrier: 'orderItem.0.carrier',
                expectedShipDate: 'orderItem.0.expectedShipDate',
                shipModeCode: 'orderItem.0.shipModeCode',
                shipModeDescription: 'orderItem.0.shipModeDescription',
                shipModeId: 'orderItem.0.shipModeId',
            },               
            paymentInstruction:['paymentInstruction',JM.map({
                  firstName: 'firstName',
                  lastName: 'lastName',
                  middleName: 'middleName',
                  email1: 'email1',
                  addressId: 'billing_address_id',
                  addressLine: 'addressLine',
                  city: 'city',
                  state: 'state',
                  country: 'country',
                  postalCode: 'postalCode',
                  payMethodId: 'payMethodId',      
                  piAmount: 'piAmount',
                  piCurrency: 'piCurrency',
                  piDescription: 'piDescription', 
            })],  
            placedDate: 'placedDate',
            recordSetComplete: 'recordSetComplete',
            recordSetCount: 'recordSetCount',
            recordSetStartNumber: 'recordSetStartNumber',
            recordSetTotal: 'recordSetTotal',
            resourceId: 'resourceId',
            totalAdjustment: 'totalAdjustment',
            totalAdjustmentCurrency: 'totalAdjustmentCurrency',
            totalProductPrice: 'totalProductPrice',
            totalProductPriceCurrency: 'totalProductPriceCurrency',
            totalSalesTax: 'totalSalesTax',
            totalSalesTaxCurrency: 'totalSalesTaxCurrency',
            totalShippingCharge: 'totalShippingCharge',
            totalShippingChargeCurrency: 'totalShippingChargeCurrency',
            totalShippingTax: 'totalShippingTax',
            totalShippingTaxCurrency: 'totalShippingTaxCurrency',           
      });

    let result = converter(body);
    let jsonObj = result;
    
    for(let i=0 ; i<paymentsData.length ; i++){
      let paymentInst = paymentsData[i];
      jsonObj.paymentInstruction[i].paymentData = paymentInst;
    }
    return jsonObj; 
   
   }

};
