var constants = require('../../constants/elasticPath/constants');
var util = require('../../util/elasticPath/util');
var JM = require('json-mapper');
var _ = require("underscore");


module.exports = {

  /*Normal Response for Add to Cart this needs to be refine*/ 
  addToCartJSON: function(){
            var jsonResponse = {orderItemId: "",
                    orderId: "",
                    addToCartMsg: constants.EP_PRODUCT_ADDED
                   };      
			return JSON.parse(JSON.stringify(jsonResponse));
  },
  /**
   * json mapper for mapping the product list json for category landing page in EP
   */
  shoppingCartJSON: function(body){
             
             var converter = JM.makeConverter({

              totalQuantity: 'total-quantity',
              
              adjustments : ['_discount.0.discount', JM.map({
                amount: 'display',
                code:JM.helpers.def(''),
                currency: 'currency',
                description:JM.helpers.def(''),
                displayLevel:JM.helpers.def(''),
                usage:JM.helpers.def('Discount'),
               })],
               grandTotal:'_total.0.cost.0.display',
               grandTotalCurrency:'_total.0.cost.0.currency',
               orderId:JM.helpers.def(''),
               orderItem : ['_lineitems.0._element', JM.map({

                currency:'_price.0.purchase-price.0.currency',
                freeGift:JM.helpers.def('false'),
                orderItemId:'self.uri',
                orderItemInventoryStatus:'_availability.0.state',
                orderItemPrice:'_price.0.purchase-price.0.display',//Need to multiply wih Item Quantity
                partNumber:'_item.0._code.0.code',
                productId:'_item.0.self.uri',
                quantity:'quantity',
                salesTax:JM.helpers.def(''),
                salesTaxCurrency:JM.helpers.def(''),
                shippingCharge:JM.helpers.def(''),
                shippingChargeCurrency:JM.helpers.def(''),
                shippingTax:JM.helpers.def(''),
                shippingTaxCurrency:JM.helpers.def(''),
                unitPrice:'_price.0.purchase-price.0.display',
                unitQuantity:JM.helpers.def('1'),
                usableShippingChargePolicy:[  
                   {  
                      name:JM.helpers.def(''),
                      type: JM.helpers.def(''),
                      uniqueID: JM.helpers.def(''),
                  }
                ]
             })],

             orderStatus:JM.helpers.def(''),
             recordSetCount:JM.helpers.def(''),
             recordSetStartNumber:JM.helpers.def(''),
             recordSetTotal:JM.helpers.def(''),
             resourceId:JM.helpers.def(''),
             resourceName:JM.helpers.def('cart'),
             shipAsComplete:JM.helpers.def(''),
             storeNameIdentifier:JM.helpers.def(''),
             storeUniqueID:JM.helpers.def(''),
             totalAdjustment:'_discount.0.discount.0.display',
             totalAdjustmentCurrency:'_discount.0.discount.0.currency',
             totalProductPrice:JM.helpers.def(''),
             totalProductPriceCurrency:JM.helpers.def(''),
             totalSalesTax:JM.helpers.def(''),
             totalSalesTaxCurrency:JM.helpers.def(''),
             totalShippingCharge:JM.helpers.def(''),
             totalShippingChargeCurrency:JM.helpers.def(''),
             totalShippingTax:JM.helpers.def(''),
             totalShippingTaxCurrency:JM.helpers.def(''),

             });
              var result = converter(body);
              return result;
      },
      /**
       * UpdateItem in Cart
       */
      updateCartItemJSON: function(lineItemIdURI){
        var jsonResponse = {orderId: "",
                orderId: "",
                lineItem: [ {
                  lineItemId:lineItemIdURI
                }]
               };      
      return JSON.parse(JSON.stringify(jsonResponse));
    },
      /**
       * DeleteItem in Cart
       */
      deleteCartItemJSON: function(){
        var jsonResponse = {orderId: "",
                lineItem: [ {
                  lineItemId:"", //Need to finalize
                }],
                message: "Item Deleted Successfully",
               };      
      return JSON.parse(JSON.stringify(jsonResponse));
    }

    
};
