import Promise from 'bluebird';
import requestPromise from 'request-promise';
import cartMapper from '../../json_mappers/elasticPath/cartMapper';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
import constants from '../../constants/elasticPath/constants';
let logger=getLogger();

module.exports = {
  /**
   * Controller to add a product to cart  in EP  
   */
  addToCart: function(req,res){
	  let token=constants.EP_ACCESS_TOKEN;
	  if((undefined != req.body.swatches) && (null != req.body.swatches)){
		let swatches = req.body.swatches;
		for(let i = 0; i < swatches.length; i++) {
			  let uri = req.body.swatches[i].uri;
			  let concatURL = uri + constants.EP_FOLLOW_LOCATION;
			  let swatchSelectionUrl = constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false);
			  let method = "POST";
			  let messageData = {};
			  let requestCall = constructRequest(swatchSelectionUrl,method,messageData,token);
			  logger.info('Post add to cart url',  swatchSelectionUrl);
			  requestPromise(requestCall).then(function (data) {				 
					logger.info(constants.EP_SWATCH_SELECTED);
			  }).catch(function (error) {
					if(error.response.body){
					  logger.error('errors in selecting swatch in EP: ', error.response.body);
					  res.send({ "success": false, "error": error.response.body }); 
					}else{
					  logger.error('errors in selecting swatch in EP: ', error);
					  res.send({ "success": false, "error": error});
					}
			  });			
		}
	  }
	  let requests = [];
	  for(let i = 0; i < req.body.orderItem.length; i++) {
	  let concattUrl =  req.body.orderItem[i].productId + "?followlocation";
	  let addToCartUrl=constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false)
	  let messageData= {"quantity":req.body.orderItem[i].quantity};
	   requests.push(this.getAddToCartRequestPromise(token,JSON.parse(JSON.stringify(messageData)),addToCartUrl));
		}
	  Promise.all(requests).then(function(results) {
		let result = cartMapper.addToCartJSON(results); 
									  res.send({
										"success": true ,
										"result": result,                                            
									  }); 
	  }, function(err) {
				logger.error('errors in service hit to login service' + err);
				res.send({ "success": false, "error": err });
	  });

},

getAddToCartRequestPromise: function(authToken,data,url) {
  return new Promise(function(resolve,reject){
    let requestCall = constructRequest(url,"POST",data,authToken)
    requestPromise(requestCall).then(function (data) {
          let result = cartMapper.shoppingCartJSON(data); 
             return resolve({success:true, url:url,body:data});
      }).catch(function (error) {
          logger.error('errors in service to updateShoppingCartItem in EP: ', error);
          return resolve({success:false, error:error})
      }); 
    });
},

/**
 * Get Shopping Cart Details
 */

getShoppingCart: function(req,res){
    let token=constants.EP_ACCESS_TOKEN;
    let messageData = {};
    let concattUrl= constants.EP_SHOPPING_CART+constants.EP_SHOPPING_CART_ZOOM;
    let defaultCartURL = constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
    
    logger.info('Get shoppingCart form url',  defaultCartURL);
    let method ='GET';
    let requestCall = constructRequest(defaultCartURL,method,messageData,token)
    requestPromise(requestCall).then(function (data) {
          let result = cartMapper.shoppingCartJSON(data); 
              res.send({
                "success": true ,
                "result": result,                                            
            });   
      }).catch(function (error) {
          if(error.response.body){
            logger.error('errors in service to getShoppingCart in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body }); 
          }else{
            logger.error('errors in service to getShoppingCart in EP: ', error);
            res.send({ "success": false, "error": error});
          }
      });
    },
    /**
    *   Update Shopping Cart Item Details
    */

    updateShoppingCartItem: function(req,res){
      let token=constants.EP_ACCESS_TOKEN;
      let messageData = {"quantity":req.body.lineItem[0].quantity};
      let uri= req.body.lineItem[0].lineItemId;
      let updateCartItemURL = constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
      logger.info('updateShoppingCart form url',  updateCartItemURL);
      let method ='PUT';
      let requestCall = constructRequest(updateCartItemURL,method,messageData,token)
      requestPromise(requestCall).then(function (data) {
              let result = cartMapper.updateCartItemJSON(uri); 
              res.send({
                "success": true ,
                "result": result,                                            
              });   
        }).catch(function (error) {
          if(error.response.body){
            logger.error('errors in service to updateShoppingCartItem in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body }); 
          }else{
            logger.error('errors in service to updateShoppingCartItem in EP: ', error);
            res.send({ "success": false, "error": error});
          }
        });
      },
    /**
    *   Delete item from Shopping Cart 
    */

    deleteShoppingCartItem: function(req,res){
            let token=constants.EP_ACCESS_TOKEN;
            let messageData = {};
            let uri= req.body.lineItem[0].lineItemId;
            let deleteCartItemURL = constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
            logger.info('delete Item form url',  deleteCartItemURL);
            let method ='DELETE';
            let requestCall = constructRequest(deleteCartItemURL,method,messageData,token)
            requestPromise(requestCall).then(function (data) {
                let result = cartMapper.deleteCartItemJSON(); 
                res.send({
                  "success": true ,
                  "result": result,                                            
                });       
              }).catch(function (error) {
                if(error.response.body){
                  logger.error('errors in service to DeleteItem in EP: ', error.response.body);
                  res.send({ "success": false, "error": error.response.body }); 
                }else{
                  logger.error('errors in service to DeleteItem in EP: ', error);
                  res.send({ "success": false, "error": error});
                } 
              });
            },
            
      /**
      *   Delete All item from Shopping Cart 
      */

    deleteAllShoppingCartItem: function(req,res){
            let token=constants.EP_ACCESS_TOKEN;
            let messageData = {};
            let uri= req.body.cartLineItemId;
            let deleteAllCartItemURL = constructUrl(constants.EP_HOSTNAME_CORTEX, uri, false);   
            logger.info('delete All Item form url',  deleteAllCartItemURL);
            let method ='DELETE';
            let requestCall = constructRequest(deleteAllCartItemURL,method,messageData,token)
            requestPromise(requestCall).then(function (data) {
                let result = cartMapper.deleteAllCartItemJSON(); 
                res.send({
                  "success": true ,
                  "result": result,                                            
                });      
              }).catch(function (error) {
                  if(error.response.body){
                    logger.error('errors in service to DeleteAllItem in EP: ', error.response.body);
                    res.send({ "success": false, "error": error.response.body }); 
                  }else{
                    logger.error('errors in service to DeleteAllItem in EP: ', error);
                    res.send({ "success": false, "error": error});
                  }
              });
            }
};
