import storeConstants from './storeConstants';

let storeName = storeConstants.EP_STORE;

export default {

  "EP_HOSTNAME" : storeConstants.EP_HOSTNAME,
  "EP_HOSTNAME_CORTEX" : storeConstants.EP_HOSTNAME_CORTEX,
  "EP_STORE" : storeName,
  "EP_LOG_DIR" : "log/elasticPath/trace.log",

  //All Definite Url Contansts Goes Here
  "EP_GUEST_LOGIN" : "/cortex/oauth2/tokens?grant_type=password&role=PUBLIC&scope="+storeName,
  "EP_TOP_CATEGORIES" : "/cortex/navigations/"+storeName+"?zoom=element",
  "EP_PRODUCTS_FROM_CATEGORIES_NAV" : "/searches/"+storeName+"/navigations/items/",
  "EP_SEARCH" : "/cortex/searches/"+storeName+"/keywords/items?followlocation",
  "EP_ADD_SHIPPING_ADDRESS" : "/cortex/addresses/"+storeName+"?followlocation",  
  "EP_DEFAULT_CART" : "/cortex/carts/"+storeName+"/default",
  "EP_SHOPPING_CART" : "/carts/"+storeName+"/default",
  "EP_CART" : "/carts/"+storeName+"/default",
  "EP_CURRENT_ORDER" : "/orders/"+storeName+"/g5qwknzvgq4wkljqgfrtaljuga4dgllbmqytcljqmjstsntbg5rtqojsgq=",  
  "EP_WHISHLIST_URL" : "/wishlists/"+storeName+"/default" ,
  "EP_APPLY_PROMO"  : "/coupons",


  // All additional params for Url Goes here
  "EP_GET_BILLING_ADDRESS_SELECTOR": "/billingaddressinfo/selector",
  "EP_FOLLOW_LOCATION": "?followlocation",
  "EP_WHISHLIST": "/wishlists",
  "HTML_DIR" : "WebContent/html/",
  "EP_FORM": "/form",
  "EP_AWS_IMAGE_PATH" : "http://s3.ap-south-1.amazonaws.com/sirius-ep-images/",
  "EP_IMAGE_FMT": ".jpg",


  // All Zoom Constant Goes Here
  "EP_SUB_CATEGORIES_ZOOM" : "?zoom=child",
  "EP_SEARCH_ZOOM" : "?zoom=element:availability,element:code,element:definition,element:price",
  "EP_PDP_ZOOM" : "?zoom=availability,code,definition,definition:options:element,definition:options:element:selector:choice:description,definition:options:element:selector:chosen:description,price",
  "EP_SHOPPING_CART_ZOOM": "?zoom=discount,lineitems,lineitems:element,lineitems:element:availability,lineitems:element:item:code,lineitems:element:price,lineitems:element:total,order:tax,order:total,total",
  "EP_GET_BILLING_ADDRESS_ZOOM": "/billingaddressinfo?zoom=selector:choice:description,selector:chosen:description",
  "EP_GET_SHIPPING_ADDRESS_ZOOM": "/deliveries?zoom=element:destinationinfo:selector:chosen:description,element:destinationinfo:selector:choice:description",
  "EP_SHIPMODE_ZOOM" : "?zoom=order:deliveries:element:shippingoptioninfo:selector:choice:description,order:deliveries:element:shippingoptioninfo:selector:chosen:description",  
  "EP_GET_SHIPPING_ADDRESS_SELECTOR_ZOOM" : "/deliveries?zoom=element:destinationinfo:selector",
  "EP_WHISHLIST_CART_ZOOM" :"",



  // All Custome Message Goes Here
  "EP_PRODUCT_ADDED" : "Product Added Successfully",
  "EP_ADDRESS_ADDED" : "Address Added Successfully",
  "EP_ADDRESS_DELETED" : "Address Deleted Successfully",
  "EP_ADDRESS_UPDATED"  : "Address Updated Successfully",
  "EP_ADDRESS_SELECTED" : "Address Selected Successfully",
  "EP_SHIPMODE_SELECTED" : "Ship mode updated successfully",
 
  

  //constants that needs to removed & got from the app
  "EP_ACCESS_TOKEN" : storeConstants.EP_ACCESS_TOKEN

};
