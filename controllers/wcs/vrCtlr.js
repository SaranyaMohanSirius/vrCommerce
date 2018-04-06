import constants from '../../constants/wcs/constants';
import {
  getLogger,
  isJson,
  constructUrl,
  constructRequestWithoutToken,
  constructRequestWithToken,
  getTokens
} from '../../util/wcs/util';
import pdpMapper from '../../json_mappers/wcs/pdpMapper';
import requestPromise from 'request-promise';
import Promise from "bluebird";
import seoController from '../wcs/seoCtlr';
import paymentController from './paymentCtlr';
import apiai from 'apiai';

const apiapp = apiai('3ccd4dd841d844228127611bec41a436');
const API_AI_SESSION_ID = 'tabby_cat';
let logger = getLogger();

module.exports =  {

  getProductDetails: function(req, res) {


    let keyWord = req.query.productId;
    let resourceName = req.query.resourceName;
    let result;
    let productId;

    logger.info("getProductDetails product KeyWord:" + keyWord);
    seoController.getIdByKeyword(keyWord, 'ProductToken').then(function(value) {
      productId = value;
      let path = constants.WCS_PRODUCT_DETAILS + constants.WCS_STORE_ID + constants.WCS_PRODUCT_DETAILS_APPEND + productId + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
      let pdpURL = constructUrl(constants.WCS_HOSTNAME, path, false);
      logger.info("getProductDetails url:" + pdpURL);
      let requestCall = constructRequestWithoutToken(pdpURL, 'GET', '');
      requestPromise(requestCall).then(function(result) {
        return requestFunction(result);
      }).catch(function(error) {
        if (error.statusCode === 404 || error.statusCode === 500) {
          logger.error('error in service to getProductDetails in WCS: ', error);
          res.send({
            "success": false,
            "error": error.response.body
          });
        } else {
          logger.error('errors in service to getProductDetails in WCS: ', error);
          res.send({
            "success": false,
            "error": error.response.body.errors[0]
          });
        }
      });

      let requestFunction = function(data) {
        return new Promise(function(resolve, reject) {
          if (isJson(data)) data = JSON.parse(data);
          let path = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_INV_AVL + productId;
          let invAvlURL = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, false);
          let requestCall = constructRequestWithoutToken(invAvlURL, 'GET', '');
          logger.info("request call = " + JSON.stringify(requestCall));
          if (data.catalogEntryView[0].catalogEntryTypeCode == "ProductBean") {
            if (resourceName == "pdp") {
              result = pdpMapper.mapPdpJSON(data, true);
            } else if (resourceName == "qv" || resourceName == "cart") {
              result = pdpMapper.mapQuickViewJSON(data, true);
            } else if (resourceName == "relatedProducts") {
              result = pdpMapper.mapRelatedProductsJSON(data, true);
            }
            res.send(
              result
            );
          } else {
            requestPromise(requestCall).then(function(body) {
              if (isJson(body)) body = JSON.parse(body);
              if (resourceName == "pdp") {
                result = pdpMapper.mapPdpJSON(data, body);
              } else if (resourceName == "qv" || resourceName == "cart") {
                result = pdpMapper.mapQuickViewJSON(data, body);
              }
              res.send(
                result
              );
            }).catch(function(error) {
              if (error.statusCode === 404 || error.statusCode === 500) {
                logger.error('error in service to getProductDetails in WCS: ', error);
                res.send({
                  "success": false,
                  "error": error.response.body
                });
              } else {
                logger.error('errors in service to getProductDetails in WCS: ', error);
                res.send({
                  "success": false,
                  "error": error.response.body.errors[0]
                });
              }
            });
          }
        });
      }
    });


  },
  /*
    * Method to add a product to cart in WCS
    * Request params : userId
    * Request Body : addToCart body as in WCS
	* {
		"userId" : "432554"
   "orderItem": [
      {
    "productId": "10641",
    "quantity": "2.0"
  }
   ]

   check for userid in body if not present call for guest identity handler.
}
    */

  addToCart: function(req, res) {
    logger.info("inside add to cart");
    let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART_EXT + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    let addToCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
    let messageData = req.body;
    let method = 'POST';
    logger.info("addToCartUrl:" + addToCartUrl + "messageData: " + JSON.stringify(messageData));

    let requestCall = constructRequestWithToken(addToCartUrl, method, messageData, getTokens(req));
    console.log("request call = ", requestCall);
    requestPromise(requestCall).then(function(result) {
      //let result = cartMapper.addToCartJSON(messageData);
      console.log("add to cart success = ", result);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function(error) {
      console.log("add to cart error = ", error);
      res.send({
        "success": false,
        "result": error
      })
    });
  },


  /*
   * Method for getting Shopping Cart Item in WCS
   * Request Params : userId
   * Request Method : GET
   */

  getCartDetails: function(req, res) {

    let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART_AT_SELF;

    logger.info("ShoppingCart URL" + constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true));
    let shoppingCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
    let method = 'GET';
    let messageData = {};
    let requestCall = constructRequestWithToken(shoppingCartUrl, method, messageData, getTokens(req));

    requestPromise(requestCall).then(function(data) {
      res.send({
        "success": true,
        "result": data
      });
    }).catch(function(error) {
      res.send({
        "success": false,
        "result": error
      });
    });
  },
  /*
   * Method for submitting order in WCS
   * Request Params : userId
   * Request Method : POST
   * Request Body:
   *   {
   *     "orderId": "21067"
   *   }
   */

  submitOrder: function(req, res) {
    /*
     * Method for preparing order for checkout in WCS
     * Request Method : PUT
     */

    let preCheckOut = function() {
      return new Promise(function(resolve, reject) {
        let requestCall = constructRequestWithToken('https://54.200.124.128/wcs/resources/store/10151/cart/@self/precheckout', 'PUT', '', '')

        logger.info("inside preCheckOut of submitOrder" + requestCall);
        requestPromise(requestCall).then(function(data) {
          console.log("precheckout ", data);
          resolve(data);
        }).catch(function(error) {
          if (error.statusCode === 404 || error.statusCode === 400) {
            logger.error('errors in service to preCheckOut of submitOrder in WCS: ', JSON.stringify(error));
            res.send({
              "success": false,
              "error": error.response.body
            });
          } else {
            logger.error('errors in service to preCheckOut of submitOrder in WCS: ', JSON.stringify(error));
            res.send({
              "success": false,
              "error": error.response.body.errors[0]
            });
          }
        });
      });
    }

    /*
     * Method for checkout in WCS
     * Request Method : POST
     */

    let checkOut = function(data) {
      return new Promise(function(resolve, reject) {

        let requestCall = constructRequestWithToken('https://54.200.124.128/wcs/resources/store/10151/cart/@self/checkout', 'POST', '', '')
        requestPromise(requestCall).then(function(result) {
          console.log("checked out = ", result);
          return getOrderConfirmationDetails(result, true);
        }).catch(function(error) {
          if (error.statusCode === 404 || error.statusCode === 400) {
            logger.error('errors in service to checkOut of submitOrder in WCS: ', JSON.stringify(error));
            res.send({
              "success": false,
              "error": error.response.body
            });
          } else {
            logger.error('errors in service to checkOut of submitOrder in WCS: ', JSON.stringify(error));
            res.send({
              "success": false,
              "error": error.response.body.errors[0]
            });
          }
        });
      });
    }

    /*
     * Method for Order Confirmation in WCS
     * Request Method : GET
     */

    let getOrderConfirmationDetails = function(data, boo) {
      return new Promise(function(resolve, reject) {
        let concatOrderDetailsUrl = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_ORDER + JSON.parse(data)['orderId'];
        let getOrderConfirmationDetailsUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatOrderDetailsUrl, true);
        let methodForConfirmationDetails = 'GET';

        logger.info("inside getOrderConfirmationDetails of submitOrder: " + getOrderConfirmationDetailsUrl);
        let messageBody = {};
        let requestCall = constructRequestWithToken(getOrderConfirmationDetailsUrl, methodForConfirmationDetails, messageBody, '')
        requestPromise(requestCall).then(function(result) {
          if (boo)
            res.send({
              "success": true,
              "result": result
            });
          else resolve(result);
        }).catch(function(error) {
          if (error.statusCode === 404 || error.statusCode === 400) {
            //logger.error('errors in service to getOrderConfirmationDetails of submitOrder in WCS: ', JSON.stringify(error));
            res.send({
              "success": false,
              "error": error.response.body
            });
          } else {
            //logger.error('errors in service to getOrderConfirmationDetails of submitOrder in WCS: ', JSON.stringify(error));
            res.send({
              "success": false,
              "error": error.response.body.errors[0]
            });
          }
        });
      });
    }
    preCheckOut().then(function(data) {
      console.log("precheckout = ", data);
      getOrderConfirmationDetails(data, false).then(function(orderDetails) {
        console.log("get order conf = ", orderDetails);
        let msg = {
          "account": "4012888888881881",
          "billing_address_id": "18624",
          "cc_brand": "VISA",
          "cc_cvc": "121",
          "expire_month": "11",
          "expire_year": "2019",
          "payMethodId": "VISA",
          "piAmount": orderDetails['grandTotal']
        }
        paymentController.createPaymentInstruction(msg).then(function(piId) {
          console.log("pi id = ", piId);
          preCheckOut().then(function(dim) {
            return checkOut(data);
          })
        })
      })
    });
  },

  /*
   * To get intent from watson
   */
  getIntent: function(req, res) {


    let customText = req.query.message;
    console.log("inside controller");
    let apiai = apiapp.textRequest(customText, {
      sessionId: API_AI_SESSION_ID // any arbitrary id
    });

    apiai.on('response', (response) => {
      console.log(response.result.metadata.intentName);
      res.send({
        intent: response.result.metadata.intentName
      });

    });
    apiai.on('error', (error) => {
      console.log("error ", error);
      res.end({
        isSuccess: false
      });

    });
    apiai.end();
  },

  buyItem: function(req, res) {
    let productId = req.query.productId;
    let concatURL = constants.WCS_REST_URL + constants.WCS_STORE_ID + constants.WCS_CART_EXT + "?catalogId=" + constants.WCS_CATALOG_ID + "&langId=" + constants.WCS_LANG_ID;
    let addToCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT, concatURL, true);
    let messageData = {
      "orderItem": [{
        "productId": productId,
        "quantity": "1"
      }]
    };

    let method = 'POST';
    let requestCall = constructRequestWithToken(addToCartUrl, method, messageData, getTokens(req));
    console.log("request call = ", requestCall);
    requestPromise(requestCall).then(function(result) {
      module.exports.submitOrder(req, res, false);
    }).catch(function(error) {
      console.log("error in cart ",error);
    })
  }

}
