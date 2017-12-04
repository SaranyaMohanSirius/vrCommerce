import constants from '../../constants/wcs/constants';
import JM from 'json-mapper';

module.exports = {

  addToCartJSON: function(body,req){

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
  mapShoppingCartJSON : function (body){

    let converter = JM.makeConverter({
          adjustment:['adjustment',JM.map({
              amount:'amount',
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
  mapDeleteCartRequestJSON : function(body){
    let converter = JM.makeConverter({
            orderItemId :'lineItem.0.lineItemId',
            
    });
    let result = converter(body);
    return result;
  },
  mapDeleteCartResponseJSON :  function(body){
    let converter = JM.makeConverter({
            orderId: ['orderId', function(arr){
                     return arr[0];
              }],
    });
    let result = converter(body);
    return result;
  },
  mapDeleteAllCartJSON : function(body){
    let converter = JM.makeConverter({
            message: JM.helpers.def("All Cart Items are Deleted Successfully"),
            
    });
    let result = converter(body);
    return result;
  },

};
