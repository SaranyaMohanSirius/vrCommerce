module.exports = {

  "EP_HOSTNAME" : "4c00070e.ngrok.io",
  "EP_HOSTNAME_CORTEX" : "4c00070e.ngrok.io/cortex",
  "EP_STORE" : "britney",
  "EP_GUEST_LOGIN" : "/cortex/oauth2/tokens?grant_type=password&role=PUBLIC&scope=britney",
  "EP_TOP_CATEGORIES" : "/cortex/navigations/britney?zoom=element",
  "EP_SUB_CATEGORIES_ZOOM" : "?zoom=child",
  "EP_PRODUCTS_FROM_CATEGORIES_NAV" : "/searches/britney/navigations/items/",
  
  "EP_SEARCH_ZOOM" : "?zoom=element:availability,element:code,element:definition,element:element,element:price",
  "EP_SEARCH" : "/cortex/searches/britney/keywords/items?followlocation",

  "EP_PDP_ZOOM" : "?zoom=availability,code,definition,definition:options:element,definition:options:element:selector:choice:description,definition:options:element:selector:chosen:description,price",
  
  "EP_PRODUCT_ADDED" : "Product Added Successfully",
  "EP_AWS_IMAGE_PATH" : "http://s3.ap-south-1.amazonaws.com/sirius-ep-images/",
  "EP_IMAGE_FMT": ".jpg",
  
  "EP_CURRENT_ORDER" : "/orders/britney/g5qwknzvgq4wkljqgfrtaljuga4dgllbmqytcljqmjstsntbg5rtqojsgq=",
  "EP_SHIPMODE_ZOOM" : "deliveries:element:shippingoptioninfo:selector:choice:description,deliveries:element:shippingoptioninfo:selector:chosen:description",
  "EP_LOG_DIR" : "log/elasticPath/trace.log",
  "EP_SHOPPING_CART" : "/carts/britney/default",
  "EP_SHOPPING_CART_ZOOM": "?zoom=discount,lineitems:element,lineitems:element:availability,lineitems:element:item,lineitems:element:price,lineitems:element:item:code,total",
  
  "HTML_DIR" : "WebContent/html/",

  //constants that needs to removed & got from the app
  "EP_ACCESS_TOKEN" : "3edefe2f-8112-499a-94b2-9d26b61edbac"
  


};
