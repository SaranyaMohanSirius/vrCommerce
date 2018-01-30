import {getLogger} from '../../util/elasticPath/util';
import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';
let logger=getLogger();


export default {

  /*Normal Response for Add to Cart this needs to be refine*/ 
  addToCartJSON: function(results){
    let orderItem=[];
    let uri;
    for (let i = 0; i < results.length; i++) {
      if(results[i].success){
        orderItem.push({"orderItemId": results[i].body.self.uri});
        uri = results[i].body.links[3].uri;
      }else{
        logger.info('RequestFailed' + JSON.stringify(results[i].error.message));
        orderItem.push({"orderItemId": results[i].error.message});
      }
    }
      let result = {"orderId":uri ,"orderItem":orderItem} 
          return JSON.parse(JSON.stringify(result));
  },
  /**
   * json mapper for mapping the product list json for category landing page in EP
   */
  
  shoppingCartJSON: function(body){
             let currency = body._order[0]._total[0].cost[0].currency;

             let converter = JM.makeConverter({
              totalQuantity: 'total-quantity',

              adjustments : ['_appliedpromotions.0._element', JM.map({
                code:JM.helpers.def(''),
                currency: JM.helpers.def(currency),
                description: 'display-description',
                displayLevel:JM.helpers.def('Order'),
                usage:JM.helpers.def('Discount'),
               })], 


               grandTotal:'_order.0._total.0.cost.0.display',
               grandTotalCurrency:'_order.0_total.0.cost.0.currency',
               orderId:'_order.0._total.0.links.0.uri',
               cartLineItemId: '_lineitems.0.self.uri',
               orderItem : ['_lineitems.0._element', JM.map({
                currency:'_price.0.purchase-price.0.currency',
                freeGift:JM.helpers.def('false'),
                orderItemId:'self.uri',
                orderItemInventoryStatus:'_availability.0.state',
                orderItemPrice:'_total.0.cost.0.display',
                partNumber:'_item.0._code.0.code',
                productId:'_item.0._code.0.links.0.uri',
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
             recordSetCount: ['_lineitems.0._element', function(arr){
                if(arr){
                  return arr.length;
                }else{
                    return 0;
                }
             }],
             recordSetStartNumber:JM.helpers.def(''),
             recordSetTotal:JM.helpers.def(''),
             resourceId:JM.helpers.def(''),
             resourceName:JM.helpers.def('cart'),
             shipAsComplete:JM.helpers.def(''),
             storeNameIdentifier:JM.helpers.def(constants.EP_STORE),
             storeUniqueID:JM.helpers.def(constants.EP_STORE),
             totalAdjustment:'_discount.0.discount.0.display',
             totalAdjustmentCurrency:'_discount.0.discount.0.currency',
             totalProductPrice:'_total.0.cost.0.display',
             totalProductPriceCurrency:'_total.0.cost.0.currency',
             totalSalesTax:'_order.0._tax.0.cost.0.display',
             totalSalesTaxCurrency:'_order.0._tax.0.cost.0.currency',
             totalShippingCharge:JM.helpers.def(''),
             totalShippingChargeCurrency:JM.helpers.def(''),
             totalShippingTax:JM.helpers.def(''),
             totalShippingTaxCurrency:JM.helpers.def(''),
             });
              let result = converter(body);
              return result;
      },
      /**
       * UpdateItem in Cart
       */
      updateCartItemJSON: function(lineItemIdURI){
        let jsonResponse = {
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
        let jsonResponse = {
                orderId: "",
               };      
      return JSON.parse(JSON.stringify(jsonResponse));
    },
     /**
       * DeleteAllItem in Cart
       */
      deleteAllCartItemJSON: function(){
        let jsonResponse = {
                message: "All Cart Items are Deleted Successfully",
               };      
      return JSON.parse(JSON.stringify(jsonResponse));
    },

      /**
       * order Review 
       */
      mapOrderReviewJSON: function(body){

       
        let converter = JM.makeConverter({
  
              adjustment:['_cart.0._appliedpromotions.0._element',JM.map({
                  code:JM.helpers.def(''),
                  currency: JM.helpers.def('USD'),
                  description: 'display-description',
                  displayLevel:JM.helpers.def('Order'),
                  usage:JM.helpers.def('Discount'),
              })],
              grandTotal: '_total.0.cost.0.display',
              grandTotalCurrency: '_total.0.cost.0.currency',
              locked: JM.helpers.def(''),
              orderId: '_total.0.links.0.uri',
              lineItem:['_cart.0._lineitems.0._element',JM.map({
                  adjustment:['_appliedpromotions.0._element',JM.map({
                      code:JM.helpers.def(''),
                      currency: JM.helpers.def('USD'),
                      description: 'display-description',
                      usage:JM.helpers.def('Discount'),
                  })],  
                  currency: '_price.0.purchase-price.0.currency',
                  freeGift: JM.helpers.def('false'),
                  lineItemId: 'self.uri',
                  lineItemPrice: '_total.0.cost.0.display',
                  adjustedPrice: '_total.0.cost.0.display',
                  partNumber:'_item.0._code.0.code',
                  productId:'_item.0._code.0.links.0.uri',
                  quantity:'quantity',
                  unitPrice:'_price.0.purchase-price.0.display',
                  unitQuantity:JM.helpers.def('1'),
              })], 
              shipping: {
                  firstName: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.name.family-name',
                  lastName: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.name.given-name',
                  middleName: JM.helpers.def(' '),
                  email1: JM.helpers.def(' '),
                  addressId: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.self.uri',
                  addressLine: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.street-address',
                  city: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.locality',
                  state: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.region',
                  country: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.country-name',
                  postalCode: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.postal-code',
                  carrier: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.carrier',
                  expectedShipDate: JM.helpers.def(' '),
                  shipModeCode: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.name',
                  shipModeDescription: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.display-name',
                  shipModeId: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.self.uri', 
              },          
              paymentInstruction:['_paymentmethodinfo.0._paymentmethod',JM.map({
                    firstName: JM.helpers.def(''),
                    lastName: JM.helpers.def(''),
                    middleName: JM.helpers.def(''),
                    email1: JM.helpers.def(''),
                    addressId: JM.helpers.def(''),
                    addressLine: JM.helpers.def(''),
                    city: JM.helpers.def(''),
                    state: JM.helpers.def(''),
                    country: JM.helpers.def(''),
                    postalCode: JM.helpers.def(''),
                    payMethodId: 'self.uri',  
                    piId: 'token',    
                    piAmount: JM.helpers.def(''),
                    piCurrency: JM.helpers.def(''),
                    piDescription:'display-name', 
              })],  
              placedDate:JM.helpers.def(''),
              recordSetComplete:JM.helpers.def(''),
              recordSetCount: JM.helpers.def(''),
              recordSetStartNumber: JM.helpers.def(''),
              recordSetTotal: JM.helpers.def(''),
              resourceId: JM.helpers.def(''),
              totalAdjustment: '_cart.0._discount.0.discount.0.display',
              totalAdjustmentCurrency: '_cart.0._discount.0.discount.0.currency',
              totalProductPrice: '_cart.0._total.0.cost.0.display',
              totalProductPriceCurrency: '_cart.0._total.0.cost.0.currency',
              totalSalesTax: '_tax.0.cost.0.display',
              totalSalesTaxCurrency: '_tax.0.cost.0.currency',
              totalShippingCharge:'_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.cost.0.display',
              totalShippingChargeCurrency:'_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.cost.0.currency',
              totalShippingTax:JM.helpers.def(''),
              totalShippingTaxCurrency:JM.helpers.def(''),          

        });
  
      let result = converter(body);
      let jsonObj = result;
      return jsonObj; 
     
    },
     /**
       * Order Confirmation
      */
      mapOrderConfirmationJSON: function(body){
        let converter = JM.makeConverter({
  
              adjustment:['_appliedpromotions.0._element',JM.map({
                  code:JM.helpers.def(''),
                  currency: JM.helpers.def('USD'),
                  description: 'display-description',
                  displayLevel:JM.helpers.def('Order'),
                  usage:JM.helpers.def('Discount'),
              })],
              grandTotal: 'monetary-total.0.display',
              grandTotalCurrency: 'monetary-total.0.currency',
              locked: JM.helpers.def(''),
              orderId: 'purchase-number',
              lineItem:['_lineitems.0._element',JM.map({
                  adjustment:['_appliedpromotions.0._element',JM.map({
                      code:JM.helpers.def(''),
                      currency: JM.helpers.def('USD'),
                      description: 'display-description',
                      usage:JM.helpers.def('Discount'),
                  })],  
                  currency: 'line-extension-amount.0.currency',
                  freeGift: JM.helpers.def('false'),
                  lineItemId: 'self.uri',
                  lineItemPrice: 'line-extension-amount.0.display',
                  adjustedPrice: 'line-extension-amount.0.display',
                  partNumber:JM.helpers.def(''),
                  productId:JM.helpers.def(''),
                  quantity:'quantity',
                  unitPrice:JM.helpers.def(''),
                  unitQuantity:JM.helpers.def('1'),
              })],
              shipping: {
                  firstName: '_shipments.0._element.0._destination.0.name.family-name',
                  lastName: '_shipments.0._element.0._destination.0.name.given-name',
                  middleName: JM.helpers.def(' '),
                  email1: JM.helpers.def(' '),
                  addressId: '_shipments.0._element.0._destination.0.self.uri',
                  addressLine: '_shipments.0._element.0._destination.0.address.street-address',
                  city: '_shipments.0._element.0._destination.0.address.locality',
                  state: '_shipments.0._element.0._destination.0.address.region',
                  country: '_shipments.0._element.0._destination.0.address.country-name',
                  postalCode: '_shipments.0._element.0._destination.0.address.postal-code',
                  carrier: '_shipments.0._element.0._shippingoption.0.carrier',
                  expectedShipDate: JM.helpers.def(' '),
                  shipModeCode: '_shipments.0._element.0._shippingoption.0.name',
                  shipModeDescription: '_shipments.0._element.0._shippingoption.0.display-name',
                  shipModeId: '_shipments.0._element.0._shippingoption.0.self.uri', 
              },         
             paymentInstruction:[{
                    firstName: '_billingaddress.0.name.family-name',
                    lastName: '_billingaddress.0.name.given-name',
                    middleName: JM.helpers.def(''),
                    email1: JM.helpers.def(''),
                    addressId: JM.helpers.def(''),
                    addressLine: '_billingaddress.0.address.stree-address',
                    city: '_billingaddress.0.address.locality',
                    state: '_billingaddress.0.address.region',
                    country: '_billingaddress.0.address.country-name',
                    postalCode: '_billingaddress.0.address.postal-code',
                    payMethodId: '_paymentmeans.0._element.0.self.uri',  
                    piId: JM.helpers.def(''),    
                    piAmount: JM.helpers.def(''),
                    piCurrency: JM.helpers.def(''),
                    piDescription:'_paymentmeans.0._element.0.display-name', 
                  } ],  
              placedDate:'purchase-date.display-value',
              recordSetComplete: JM.helpers.def(''),
              recordSetCount: JM.helpers.def(''),
              recordSetStartNumber: JM.helpers.def(''),
              recordSetTotal: JM.helpers.def(''),
              resourceId: JM.helpers.def(''),
              totalAdjustment: '_discount.0.discount.0.display',
              totalAdjustmentCurrency: '_discount.0.discount.0.currency',
              totalProductPrice: JM.helpers.def(''), 
              totalProductPriceCurrency: JM.helpers.def(''), 
              totalSalesTax: '_shipments.0._element.0._tax.0.cost.0.display',
              totalSalesTaxCurrency: '_shipments.0._element.0._tax.0.cost.0.currency',
              totalShippingCharge:'_shipments.0._element.0._shippingoption.0.cost.0.display',
              totalShippingChargeCurrency:'_shipments.0._element.0._shippingoption.0.cost.0.currency',
              totalShippingTax:JM.helpers.def(''),
              totalShippingTaxCurrency:JM.helpers.def(''),      

        });
  
      let result = converter(body);
      let jsonObj = result;
      return jsonObj; 
     
    }

    
};
