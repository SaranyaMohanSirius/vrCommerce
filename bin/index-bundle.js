/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storeConstants = __webpack_require__(23);

var _storeConstants2 = _interopRequireDefault(_storeConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeName = _storeConstants2.default.EP_STORE;

exports.default = {

  "EP_HOSTNAME": _storeConstants2.default.EP_HOSTNAME,
  "EP_HOSTNAME_CORTEX": _storeConstants2.default.EP_HOSTNAME_CORTEX,
  "EP_STORE": storeName,
  "EP_LOG_DIR": "log/elasticPath/trace.log",
  "EP_COOKIE_NAME": "access_token",
  "EP_USER_NAME": "&username=",
  "EP_PASSWORD": "&password=",

  //All Definite Url Contansts Goes Here
  "EP_GUEST_LOGIN": "/cortex/oauth2/tokens?grant_type=password&role=PUBLIC&scope=" + storeName,
  "EP_LOGIN": "/cortex/oauth2/tokens?grant_type=password&role=REGISTERED&scope=" + storeName,
  "EP_LOGOUT": "/cortex/oauth2/tokens",
  "EP_REGISTER": "/cortex/registrations/" + storeName + "/newaccount/form?followlocation",
  "EP_TOP_CATEGORIES": "/cortex/navigations/" + storeName + "?zoom=element",
  "EP_PRODUCTS_FROM_CATEGORIES_NAV": "/searches/" + storeName + "/navigations/items/",
  "EP_SEARCH": "/cortex/searches/" + storeName + "/keywords/items?followlocation",
  "EP_ADD_SHIPPING_ADDRESS": "/cortex/addresses/" + storeName + "?followlocation",
  "EP_DEFAULT_CART": "/cortex/carts/" + storeName + "/default",
  "EP_DEFAULT_PROFILE": "/profiles/" + storeName + "/default",
  "EP_SHOPPING_CART": "/carts/" + storeName + "/default",
  "EP_CART": "/carts/" + storeName + "/default",
  "EP_CURRENT_ORDER": "/orders/" + storeName + "/g5qwknzvgq4wkljqgfrtaljuga4dgllbmqytcljqmjstsntbg5rtqojsgq=",
  "EP_WHISHLIST_URL": "/wishlists/" + storeName + "/default",
  "EP_APPLY_PROMO": "/coupons",
  "EP_ADDRESS_BOOK": "/cortex/addresses/" + storeName,
  "EP_PURCHASES": "/purchases",

  // All additional params for Url Goes here
  "EP_GET_BILLING_ADDRESS_SELECTOR": "/billingaddressinfo/selector",
  "EP_FOLLOW_LOCATION": "?followlocation",
  "EP_WHISHLIST": "/wishlists",
  "HTML_DIR": "WebContent/html/",
  "EP_FORM": "/form",
  "EP_CARTS": "/carts",
  "EP_AWS_IMAGE_PATH": "http://s3.ap-south-1.amazonaws.com/sirius-ep-images/",
  "EP_IMAGE_FMT": ".jpg",

  // All Zoom Constant Goes Here
  "EP_SUB_CATEGORIES_ZOOM": "?zoom=child",
  "EP_SEARCH_ZOOM": "?zoom=element:availability,element:code,element:definition,element:price",
  /* Zoom query with upsell functionality
  "EP_PDP_ZOOM" : "?zoom=availability,code,price,definition,definition:options:element:selector:choice:description,definition:options:element:selector:chosen:description,recommendations:upsell:element:availability,recommendations:upsell:element:code,recommendations:upsell:element:definition,recommendations:upsell:element:price,recommendations:crosssell:element:availability,recommendations:crosssell:element:code,recommendations:crosssell:element:definition,recommendations:crosssell:element:price",
  */
  "EP_PDP_ZOOM": "?zoom=availability,code,price,definition,definition:options:element:selector:choice:description,definition:options:element:selector:chosen:description,recommendations:crosssell:element:availability,recommendations:crosssell:element:code,recommendations:crosssell:element:definition,recommendations:crosssell:element:price",
  "EP_SHOPPING_CART_ZOOM": "?zoom=discount,lineitems,lineitems:element,lineitems:element:availability,lineitems:element:item:code,lineitems:element:price,lineitems:element:total,order:tax,order:total,total,appliedpromotions:element",
  "EP_GET_BILLING_ADDRESS_ZOOM": "/billingaddressinfo?zoom=selector:choice:description,selector:chosen:description",
  "EP_GET_SHIPPING_ADDRESS_ZOOM": "/deliveries?zoom=element:destinationinfo:selector:chosen:description,element:destinationinfo:selector:choice:description",
  "EP_SHIPMODE_ZOOM": "?zoom=order:deliveries:element:shippingoptioninfo:selector:choice:description,order:deliveries:element:shippingoptioninfo:selector:chosen:description",
  "EP_GET_SHIPPING_ADDRESS_SELECTOR_ZOOM": "/deliveries?zoom=element:destinationinfo:selector",
  "EP_WHISHLIST_CART_ZOOM": "?zoom=lineitems:element,lineitems:element:item:code",
  "EP_GET_COUPON_PROMO_ZOOM": "?zoom=order:couponinfo:coupon,order:couponinfo:coupon:appliedpromotions:element",
  "EP_GET_PROMO_ZOOM": "?zoom=appliedpromotions:element",
  "EP_ADDRESS_BOOK_ZOOM": "?zoom=element",
  "EP_GET_PERSONAL_INFO_ZOOM": "?zoom=addresses:billingaddresses:default,emails:element",
  "EP_GET_ORDER_HISTORY_ZOOM": "?zoom=purchases:element,purchases:element:appliedpromotions:element,purchases:element:discount,purchases:element:lineitems:element:list:element",
  "EP_GET_ORDER_REVIEW": "?zoom=cart:appliedpromotions:element,cart:discount,cart:lineitems,cart:lineitems:element,cart:lineitems:element:item:code,cart:lineitems:element:price,cart:lineitems:element:total,cart:total,deliveries:element:destinationinfo:selector:chosen:description,deliveries:element:shippingoptioninfo:selector:chosen:description,paymentmethodinfo:paymentmethod,tax,total",
  "EP_PURCHASE_ZOOM": "?zoom=billingaddress,discount,lineitems,lineitems:element,paymentmeans:element,shipments:element:destination,shipments:element:shippingoption,shipments:element:tax",
  // All Custome Message Goes Here
  "EP_PRODUCT_ADDED": "Product Added Successfully",
  "EP_ADDRESS_ADDED": "Address Added Successfully",
  "EP_ADDRESS_DELETED": "Address Deleted Successfully",
  "EP_ADDRESS_UPDATED": "Address Updated Successfully",
  "EP_ADDRESS_SELECTED": "Address Selected Successfully",
  "EP_SHIPMODE_SELECTED": "Ship mode updated successfully",

  "EP_TOKEN_EXPIRATION_TIME": _storeConstants2.default.EP_TOKEN_EXPIRATION_TIME

};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("json-mapper");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  "WCS_HOSTNAME": "54.200.124.128",
  "WCS_HOSTNAME_NOPORT": "54.200.124.128",
  "WCS_AWS_IMAGE_PATH": "http://s3.ap-south-1.amazonaws.com/sirius-ep-images/",
  "WCS_IMAGE_FMT": ".jpg",
  "WCS_PRODUCT_DETAILS": "/search/resources/store/",
  "WCS_PRODUCT_DETAILS_APPEND": "/productview/byId/",
  "WCS_CATEGORY_TOP": "/categoryview/@top",
  "WCS_CATEGORY": "/categoryview/byId/",
  "WCS_SUB_CATEGORY": "/categoryview/byParentCategory/",
  "WCS_CATEGORY_DETAILS_APPEND": "/productview/byCategory/",
  "WCS_REST_URL": "/wcs/resources/store/",
  "WCS_GUEST_IDENTITY": "/guestidentity",
  "WCS_LOGIN_IDENTITY": "/loginidentity",
  "WCS_KEYWORD_SUGGESTION": "/sitecontent/keywordSuggestionsByTerm/",
  "WCS_STORE_ID": "10151",
  "WCS_CAS_STORE_ID": "10051",
  "WCS_CATALOG_ID": "10052",
  "WCS_CART": "/cart/",
  "WCS_CART_EXT": "/cart",
  "WCS_DEFAULT": "/@default",
  "WCS_WISHLIST": "/wishlist",
  "WCS_WISHLIST_DELETE": "/wishlist/",
  "WCS_LANG_ID": "-1",
  "WCS_SHIPMODES_APPEND": "/cart/shipping_modes",
  "WCS_INV_AVL": "/inventoryavailability/",
  "WCS_UPDATE_SHIP_INFO": "/cart/@self/shipping_info",
  "WCS_LOG_DIR": "log/wcs/trace.log",
  "HTML_DIR": "WebContent/html/",
  "WCS_PRODUCT_SEARCH_BY_KEYWORD": "/productview/bySearchTerm/",
  "WCS_ADDRESS_DETAILS": "/person/@self/contact",
  "WCS_CHECKOUT_PROFILE": "/person/@self/checkoutProfile",
  "WCS_PRODUCT_ADDED": "Product Added Successfully",
  "SLASH": "/",
  "SHIP_CALC_USAGE": "-1,-2,-3,-4,-5,-6,-7",
  "WCS_SHIP_INFO": "/cart/@self/shipping_info",
  "MONGO_DB_URL": "mongodb://admin:passw0rd@ds121716.mlab.com:21716/projectc",
  "MONGO_DB_COLLECTION_USERS": "users",
  "WCS_GET_SHOPPINGCART": "/@self",
  "WCS_AT_SELF": "/@self",
  "WCS_UPDATE_CART": "/update_order_item",
  "WCS_DELETE_CART": "/delete_order_item",
  "WCS_UPDATECART_CALC_USAGE": "-1,-2,-3,-4,-5,-6,-7",
  "WCS_UPDATECART_CALC_ORDER": "1",
  "WCS_CART_AT_SELF": "/cart/@self",
  "WCS_CART_PROMOTIONS": "/cart/@self/assigned_promotion_code",
  "WCS_ITEM": "item",
  "WCS_PRODUCT_BYIDS": "/productview/byIds?",
  "WCS_PRODUCT_BY_SINGLE_ID": "/productview/byId/",
  "WCS_CART_PRECHECKOUT": "/precheckout",
  "WCS_CART_CHECKOUT": "/checkout",
  "WCS_ORDER": "/order/",
  "WCS_HISTORY": "@history",
  "WCS_PERSON": "/person/",
  "WCS_PROFILE_NAME": "?profileName=IBM_User_Registration_Details",
  "WCS_ACCESS_TOKEN": "access_token",
  "WCS_TRUSTED_ACCESS_TOKEN": "WCTrustedToken",
  "WCS_USER_ID": "userId",
  "WCS_PERSONALIZATION_ID": "personalizationID",
  "WCS_TOKEN_EXPIRATION_TIME": "1800000",
  "WCS_REGISTRATION": "/person?mode=self",
  "WCS_PERSON_AT_SELF": "/person/@self",
  "WCS_ESPOT_RECENTLY_VIEWED_PRODUCTD": "/espot/RecViewed_CatEntries",
  "WCS_PAYMENT_INSTRUCTION_MASKED": "/payment_instruction/sensitive_data_mask_by_plain_string",
  "WCS_PAYMENT_INSTRUCTION": "/payment_instruction",
  "HTTP_URI_CONSTANT": "http:",
  "WCS_SEO": "/seo/seoKeyword",
  "WCS_LAYOUT": "/page_design?q=byObjectIdentifier",
  "WCS_ESPOT": "/espot/",
  "WCS_COOKIE_DOMAIN": ".herokuapp.com",

  "WCS_ADDRESS_ADDED": "Address Added Successfully",
  "WCS_ADDRESS_DELETED": "Address Deleted Successfully",
  "WCS_ADDRESS_UPDATED": "Address Updated Successfully",
  "WCS_ADDRESS_SELECTED": "Address Selected Successfully",
  "WCS_SHIPMODE_SELECTED": "Ship mode updated successfully",

  /*To be got from the UI*/
  "WCS_AUTH_TOKEN": "12022%2C16Y0w9HO0rAvYKi42p4R3in9WzOQPJ2r8TMIejt6MF%2B4Skkt9f%2F%2FKf71IjRZHCf2cYp2UYzx2i3BGMwV9r5PzWAX5FGAZDsQhAErIsRZEEqWwLMXy6h6ethm5ngU0ijtNQaniaD%2FTOlllsVOreE4PYegQVzOkaXtACIhtQWUZr2RbaMC80nqEG6ORDp6CfKqua3wmqRUbHyqdRhmceBeMDfCs3OziIpsrO7tKefTyJQ%3D",
  "WCS_TRUSTED_TOKEN": "12022%2CR97hA7x3qfhBXYmRxOYjCaldMf8A9E2b%2BeLYoYpCneY%3D",
  "WCS_DOUBLE_SLASH": "//",

  "DB_URL": "mongodb://HeadStart:Headless1@ds125628.mlab.com:25628/headstartdb"

};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _mongodb = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	constructUrl: function constructUrl(hostname, path, isHttp) {
		if (!isHttp) {
			return "http://" + hostname + path;
		} else {
			return "https://" + hostname + path;
		}
	},

	sendErrorMessage: function sendErrorMessage(res, errorMessage) {
		console.log("ERROR LOGGED: ", errorMessage);
		var error = {
			error: true,
			errorMessage: errorMessage
		};

		res.send(error);
	},

	getLogger: function getLogger() {
		var winston = __webpack_require__(13);
		var logger = new winston.Logger({
			transports: [new winston.transports.Console(), new winston.transports.File({ filename: _constants2.default.WCS_LOG_DIR })]
		});
		return logger;
	},

	constructRequest: function constructRequest(uri, method, data) {
		return {
			url: uri,
			method: method,
			json: data,
			headers: {
				'Content-Type': 'application/json',
				'WCToken': _constants2.default.WCS_AUTH_TOKEN,
				'WCTrustedToken': _constants2.default.WCS_TRUSTED_TOKEN

			}
		};
	},

	constructRequestWithToken: function constructRequestWithToken(uri, method, data, tokens) {
		return {
			url: uri,
			method: method,
			json: data,
			headers: {
				'Content-Type': 'application/json',
				'WCToken': tokens.WCToken,
				'WCTrustedToken': tokens.WCTrustedToken
			}
		};
	},

	constructRequestWithoutToken: function constructRequestWithoutToken(uri, method, data) {
		return {
			url: uri,
			method: method,
			json: data,
			headers: {
				'Content-Type': 'application/json'
			}
		};
	},
	getTokens: function getTokens(req) {
		var authToken = {
			"WCToken": req.cookies.access_token,
			"WCTrustedToken": req.cookies.WCTrustedToken
		};
		return authToken;
	},
	isJson: function isJson(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	},
	requiredProtocolData: function requiredProtocolData(body) {

		var paymentDataArray = ["account", "cc_cvc", "expire_month", "cc_brand", "payment_method", "expire_year"];
		var objectToBePassed = {
			totalPaymentDataArray: []
		};
		body.paymentInstruction.filter(function (paymentInstructionData) {
			var protocolArray = paymentInstructionData.protocolData;
			var totalPaymentArray = protocolArray.filter(function (paymentData) {
				if (paymentDataArray.indexOf(paymentData.name) > -1) return paymentData;
			});
			objectToBePassed.totalPaymentDataArray.push(totalPaymentArray);
		});
		return objectToBePassed;
	}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	constructUrl: function constructUrl(hostname, path, isHttp) {
		if (!isHttp) {
			if (hostname.startsWith("http://")) {
				return hostname + path;
			} else {
				return "http://" + hostname + path;
			}
		} else {
			if (hostname.startsWith("https://")) {
				return hostname + path;
			} else {
				return "https://" + hostname + path;
			}
		}
	},

	sendErrorMessage: function sendErrorMessage(res, errorMessage) {
		console.log("ERROR LOGGED: ", errorMessage);
		var error = {
			error: true,
			errorMessage: errorMessage
		};

		res.send(error);
	},

	getLogger: function getLogger() {
		var winston = __webpack_require__(13);
		var logger = new winston.Logger({
			transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'trace.log' })]
		});
		return logger;
	},

	constructRequest: function constructRequest(uri, method, data, token) {
		return {
			uri: uri,
			method: method,
			json: data,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'bearer ' + token
			}
		};
	},
	constructRequestForLogin: function constructRequestForLogin(uri, method, data, token) {
		if (token == undefined) token = '';
		return {
			uri: uri,
			method: method,
			json: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'bearer ' + token
			}
		};
	},

	constructRequestWithoutToken: function constructRequestWithoutToken(uri, method, data) {
		return {
			uri: uri,
			method: method,
			json: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};
	}

};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

module.exports = {

        /*Function to authenticate for a guest user*/
        checkAndGetAuthToken: function checkAndGetAuthToken(req, res, callBack) {

                var token = req.cookies.access_token;

                if (token == undefined) {
                        var messageData = {};
                        var guestLoginURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, _constants2.default.EP_GUEST_LOGIN, false);
                        logger.info('guestLoginURL: ', guestLoginURL);

                        var method = 'POST';
                        var requestCall = (0, _util.constructRequestWithoutToken)(guestLoginURL, method, messageData);
                        (0, _requestPromise2.default)(requestCall).then(function (result) {
                                res.cookie(_constants2.default.EP_COOKIE_NAME, result.access_token, { httpOnly: false });
                                return callBack(result.access_token);
                        });
                } else {
                        return callBack(token);
                }
        },

        /*Controller for login a registered user*/
        loginIdentityHandler: function loginIdentityHandler(req, res) {

                var token = req.cookies.access_token;
                var messageData = {};
                var username = req.body.logonId;
                var password = req.body.logonPassword;
                var concatURL = _constants2.default.EP_LOGIN + _constants2.default.EP_USER_NAME + username + _constants2.default.EP_PASSWORD + password;

                var logonURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, concatURL, false);
                logger.info('logon url: ', logonURL);
                var method = 'POST';

                var requestCall = (0, _util.constructRequestForLogin)(logonURL, method, messageData, token);

                (0, _requestPromise2.default)(requestCall).then(function (result) {
                        res.cookie(_constants2.default.EP_COOKIE_NAME, result.access_token, { httpOnly: false });
                        res.send({
                                "success": true
                        });
                }).catch(function (error) {
                        if (error.response.body) {
                                logger.error('errors in service to logon in EP: ', error.response.body);
                                res.send({ "success": false, "error": error.response.body });
                        } else {
                                logger.error('errors in service to logon in EP: ', error);
                                res.send({ "success": false, "error": error });
                        }
                });
        },

        /*Controller for logging out an EP user*/
        logout: function logout(req, res) {

                var messageData = {};

                var logoutURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, _constants2.default.EP_LOGOUT, false);
                logger.info('logout url: ', logoutURL);
                var method = 'DELETE';

                var requestCall = (0, _util.constructRequestWithoutToken)(logoutURL, method, messageData);

                (0, _requestPromise2.default)(requestCall).then(function (result) {
                        res.clearCookie(_constants2.default.EP_COOKIE_NAME, { path: '/' });
                        res.send({
                                "success": true
                        });
                }).catch(function (error) {
                        if (error.response.body) {
                                logger.error('errors in service to logout in EP: ', error.response.body);
                                res.send({ "success": false, "error": error.response.body });
                        } else {
                                logger.error('errors in service to logout in EP: ', error);
                                res.send({ "success": false, "error": error });
                        }
                });
        }

};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _databaseUtil = __webpack_require__(56);

var _databaseUtil2 = _interopRequireDefault(_databaseUtil);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _q = __webpack_require__(18);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

  getSEOKeyword1: function getSEOKeyword1(uniqueId, tokenType) {
    console.log("inside the getSEOKeyword1");
    this.getSEOKeyword(uniqueId, tokenType);
  },
  /* 
   * Method for SEO keyword in WCS
   * Request Method : GET
   * Request Body : type and uniqueId
   */

  getSEOKeyword: function getSEOKeyword(uniqueId, tokenType) {

    // let type = req.query.type;
    // let uniqueId = req.query.productId;
    // let concatURL = constants.WCS_REST_URL+ constants.WCS_STORE_ID + constants.WCS_SEO + "?type=" + type + "&uniqueId=" + uniqueId;
    // logger.info("SEOKeyword URL"+constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true));
    // let SEOKeywordUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,concatURL,true);
    // let method ='GET';
    // let requestCall = constructRequestWithoutToken(SEOKeywordUrl,method,'');

    // requestPromise(requestCall).then(function (data) {
    //     var seoData = JSON.parse(data);
    //     logger.info("SEO Keyword : "+ seoData.keyword);
    //     res.send({
    //             "type": seoData.type,
    //             "uniqueId": seoData.uniqueId,
    //             "keyword": seoData.keyword,                         
    //     });   

    //   }).catch(function (error) {
    //       if(error){
    //         logger.error('errors in service for SEOKeywordUrl in WCS: ', error);
    //         res.send({ "success": false, "error": error }); 
    //       }
    //   });

    var que = null;
    var deferred = _q2.default.defer();

    console.log("categoryId::" + uniqueId + ":::tokenType:::" + tokenType);
    _databaseUtil2.default.getKeyword(uniqueId, tokenType, -1, 10051).then(function (response) {
      logger.info("Response" + JSON.stringify(response));
      if (Object.keys(response[0]).length > 0) {
        var keyword = response[0].URLKEYWORD;
        var tokenType = response[0].TOKENNAME;
        var tokenValue = response[0].TOKENVALUE;

        logger.info("keyword:", keyword);
        $scope.que = keyword;
        deferred.resolve(keyword);
      } else {
        logger.info("No results fetched for categoryId:", uniqueId);
      }
    });

    return _bluebird2.default.all("ssee");;
  },

  /* 
   * Method for SEO in WCS
   * Request Method : GET
   * Request Body : type and uniqueId
   */

  getSEODetails: function getSEODetails(req, res) {
    console.log("Request:" + req);

    _databaseUtil2.default.getRecords(req.query.keyword).then(function (response) {
      logger.info("Response" + JSON.stringify(response));
      if (Object.keys(response[0]).length > 0) {
        var keyword = response[0].URLKEYWORD;
        var tokenType = response[0].TOKENNAME;
        var tokenValue = response[0].TOKENVALUE;
        res.send({ "success": true, "keyword": keyword, "tokenType": tokenType, "tokenValue": tokenValue });
      } else {
        res.send({ "success": false, "error": "No matching keyword found!" });
      }
    });
  },

  /* 
   * Method for SEO in WCS
   * Request Method : GET
   * Request Body : keyword
   * Response: TokenValue
   */

  getIdByKeyword: function getIdByKeyword(keyword, tokenName) {

    logger.info("keyword::" + keyword + "---TokenName::" + tokenName);

    var deferred = _q2.default.defer();
    if (isNaN(keyword)) {
      logger.info("Param is  KeyWord ");
      _databaseUtil2.default.getRecordsByKeyword(keyword, tokenName, -1, _constants2.default.WCS_CAS_STORE_ID).then(function (response) {
        logger.info("Response" + JSON.stringify(response));
        if (Object.keys(response[0]).length > 0) {
          var keyword = response[0].URLKEYWORD;
          var tokenType = response[0].TOKENNAME;
          var tokenValue = response[0].TOKENVALUE;
          deferred.resolve(tokenValue);
          //res.send({ "success": true, "keyword": keyword, "tokenType": tokenType, "tokenValue": tokenValue});
        }
      });
    } else {
      logger.info("Param is  ProductId ");
      _databaseUtil2.default.getRecordsByProductId(keyword, tokenName, -1, _constants2.default.WCS_CAS_STORE_ID).then(function (response) {
        logger.info("Response" + JSON.stringify(response));
        if (Object.keys(response[0]).length > 0) {
          var keyword = response[0].URLKEYWORD;
          var tokenType = response[0].TOKENNAME;
          var tokenValue = response[0].TOKENVALUE;
          deferred.resolve(tokenValue);
        }
      });
    }

    return deferred.promise;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  /* 
   * JSON Mapper for generating response for ADD TO CART 
   */

  addToCartJSON: function addToCartJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({

      orderItem: ['orderItem', _jsonMapper2.default.map({
        orderItemId: "orderItemId"
      })],

      orderId: "orderId",

      addToCartMsg: _constants2.default.WCS_PRODUCT_ADDED
    });

    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating responses for shopping cart 
   */

  mapShoppingCartJSON: function mapShoppingCartJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({
      adjustments: ['adjustment', _jsonMapper2.default.map({
        // amount:'amount',
        code: 'code',
        currency: 'currency',
        description: 'description',
        displayLevel: 'displayLevel'
      })],
      grandTotal: 'grandTotal',
      grandTotalCurrency: 'grandTotalCurrency',
      orderId: 'orderId',
      cartLineItemId: _jsonMapper2.default.helpers.def(''),
      orderItem: ['orderItem', _jsonMapper2.default.map({
        currency: 'currency',
        freeGift: 'freeGift',
        orderItemId: 'orderItemId',
        orderItemInventoryStatus: 'orderItemInventoryStatus',
        orderItemPrice: 'orderItemPrice',
        partNumber: 'partNumber',
        productId: 'productId',
        quantity: 'quantity',
        salesTax: 'salesTax',
        salesTaxCurrency: 'salesTaxCurrency',
        shippingCharge: 'shippingCharge',
        shippingChargeCurrency: 'shippingChargeCurrency',
        shippingTax: 'shippingTax',
        unitPrice: 'unitPrice',
        unitQuantity: 'unitQuantity',
        usableShippingChargePolicy: 'usableShippingChargePolicy'
      })],
      orderStatus: 'orderStatus',
      recordSetCount: 'recordSetCount',
      recordSetStartNumber: 'recordSetStartNumber',
      recordSetTotal: 'recordSetTotal',
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      shipAsComplete: 'shipAsComplete',
      storeNameIdentifier: 'storeNameIdentifier',
      storeUniqueID: 'storeUniqueID',
      totalAdjustment: 'totalAdjustment',
      totalAdjustmentCurrency: 'totalAdjustmentCurrency',
      totalProductPrice: 'totalProductPrice',
      totalProductPriceCurrency: 'totalProductPriceCurrency',
      totalSalesTax: 'totalSalesTax',
      totalSalesTaxCurrency: 'totalSalesTaxCurrency',
      totalShippingCharge: 'totalShippingCharge',
      totalShippingChargeCurrency: 'totalShippingChargeCurrency',
      totalShippingTax: 'totalShippingTax',
      totalShippingTaxCurrency: 'totalShippingTaxCurrency'
    });
    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating request for update cart 
   */

  mapUpdateCartRequestJSON: function mapUpdateCartRequestJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      orderItem: ['lineItem', _jsonMapper2.default.map({
        orderItemId: 'lineItemId',
        quantity: 'quantity'
      })],
      x_calculateOrder: _jsonMapper2.default.helpers.def(_constants2.default.WCS_UPDATECART_CALC_ORDER),
      x_calculationUsage: _jsonMapper2.default.helpers.def(_constants2.default.WCS_UPDATECART_CALC_USAGE)

    });
    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for update cart 
   */

  mapUpdateCartResponseJSON: function mapUpdateCartResponseJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      orderId: 'orderId',
      lineItem: ['orderItem', _jsonMapper2.default.map({
        lineItemId: 'orderItemId'

      })]

    });
    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating request for delete cart 
   */

  mapDeleteCartRequestJSON: function mapDeleteCartRequestJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      orderItemId: 'lineItem.0.lineItemId'

    });
    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for delete cart 
   */

  mapDeleteCartResponseJSON: function mapDeleteCartResponseJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      orderId: ['orderId', function (arr) {
        return arr[0];
      }]
    });
    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for delete all items in cart 
   */

  mapDeleteAllCartJSON: function mapDeleteAllCartJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      message: _jsonMapper2.default.helpers.def("All Cart Items are Deleted Successfully")

    });
    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for order confirmation
   */

  mapOrderConfirmationResponseJSON: function mapOrderConfirmationResponseJSON(body, payment) {
    var paymentsData = payment.totalPaymentDataArray;
    var converter = _jsonMapper2.default.makeConverter({

      adjustment: ['adjustment', _jsonMapper2.default.map({
        code: 'code',
        currency: 'currency',
        description: 'description',
        displayLevel: 'displayLevel',
        usage: 'usage'
      })],
      grandTotal: 'grandTotal',
      grandTotalCurrency: 'grandTotalCurrency',
      locked: 'locked',
      orderId: 'orderId',
      lineItem: ['orderItem', _jsonMapper2.default.map({
        adjustment: ['adjustment', _jsonMapper2.default.map({
          code: 'code',
          currency: 'currency',
          description: 'description',
          usage: 'usage'
        })],
        currency: 'currency',
        freeGift: 'freeGift',
        lineItemId: 'orderItemId',
        lineItemPrice: 'orderItemPrice',
        adjustedPrice: function adjustedPrice(input) {
          return Number(input.orderItemPrice) + Number(input.totalAdjustment.value);
        },
        partNumber: 'partNumber',
        productId: 'productId',
        quantity: 'quantity',
        unitPrice: 'unitPrice',
        unitQuantity: 'unitQuantity'
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
        shipModeId: 'orderItem.0.shipModeId'
      },
      paymentInstruction: ['paymentInstruction', _jsonMapper2.default.map({
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
        piId: 'piId',
        piAmount: 'piAmount',
        piCurrency: 'piCurrency',
        piDescription: 'piDescription'
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
      totalShippingTaxCurrency: 'totalShippingTaxCurrency'
    });

    var result = converter(body);
    var jsonObj = result;

    for (var i = 0; i < paymentsData.length; i++) {
      var paymentInst = paymentsData[i];
      jsonObj.paymentInstruction[i].paymentData = paymentInst;
    }
    return jsonObj;
  },

  /* 
   * JSON Mapper for generating response for orderPaymentSummary
   */

  mapOrderPaymentSummaryJSON: function mapOrderPaymentSummaryJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({
      shipAsComplete: 'shipAsComplete',
      storeUniqueID: 'storeUniqueID',
      totalAdjustment: 'totalAdjustment',
      totalAdjustmentCurrency: 'totalAdjustmentCurrency',
      totalProductPrice: 'totalProductPrice',
      totalProductPriceCurrency: 'totalProductPriceCurrency',
      totalSalesTax: 'totalSalesTax',
      totalSalesTaxCurrency: 'totalSalesTaxCurrency',
      totalShippingCharge: 'totalShippingCharge',
      totalShippingChargeCurrency: 'totalShippingChargeCurrency',
      totalShippingTax: 'totalShippingTax',
      totalShippingTaxCurrency: 'totalShippingTaxCurrency'
    });
    var result = converter(body);
    return result;
  }

};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  "WCS_HOSTNAME": "35.164.254.111",
  "WCS_HOSTNAME_NOPORT": "35.164.254.111",
  "WCS_PRODUCT_DETAILS_APPEND": "/productview/byId/",
  "WCS_CATEGORY_TOP": "/categoryview/@top",
  "WCS_CATEGORY": "/categoryview/byId/",
  "WCS_SUB_CATEGORY": "/categoryview/byParentCategory/",
  "WCS_CATEGORY_DETAILS_APPEND": "/productview/byCategory/",
  "WCS_REST_URL": "/wcs/resources/store/",
  "WCS_GUEST_IDENTITY": "/guestidentity",
  "WCS_LOGIN_IDENTITY": "/loginidentity",
  "WCS_KEYWORD_SUGGESTION": "/sitecontent/keywordSuggestionsByTerm/",
  "WCS_STORE_ID": "1",
  "WCS_CATALOG_ID": "10502",
  "WCS_CART": "/cart/",
  "WCS_CART_EXT": "/cart",
  "WCS_DEFAULT": "/@default",
  "WCS_WISHLIST": "/wishlist",
  "WCS_WISHLIST_DELETE": "/wishlist/",
  "WCS_LANG_ID": "-1",
  "WCS_SHIPMODES_APPEND": "/cart/shipping_modes",
  "WCS_INV_AVL": "/inventoryavailability/",
  "WCS_UPDATE_SHIP_INFO": "/cart/@self/shipping_info",
  "WCS_LOG_DIR": "log/wcs/trace.log",
  "HTML_DIR": "WebContent/html/",
  "WCS_PRODUCT_SEARCH_BY_KEYWORD": "/productview/bySearchTerm/",
  "WCS_ADDRESS_DETAILS": "/person/@self/contact",
  "WCS_CHECKOUT_PROFILE": "/person/@self/checkoutProfile",
  "WCS_PRODUCT_ADDED": "Product Added Successfully",
  "SLASH": "/",
  "SHIP_CALC_USAGE": "-1,-2,-3,-4,-5,-6,-7",
  "WCS_SHIP_INFO": "/cart/@self/shipping_info",
  "MONGO_DB_URL": "mongodb://admin:passw0rd@ds121716.mlab.com:21716/projectc",
  "MONGO_DB_COLLECTION_USERS": "users",
  "WCS_GET_SHOPPINGCART": "/@self",
  "WCS_AT_SELF": "/@self",
  "WCS_UPDATE_CART": "/update_order_item",
  "WCS_DELETE_CART": "/delete_order_item",
  "WCS_UPDATECART_CALC_USAGE": "-1,-2,-3,-4,-5,-6,-7",
  "WCS_UPDATECART_CALC_ORDER": "1",
  "WCS_CART_AT_SELF": "/cart/@self",
  "WCS_CART_PROMOTIONS": "/cart/@self/assigned_promotion_code",
  "WCS_ITEM": "item",
  "WCS_PRODUCT_BYIDS": "/productview/byIds?",
  "WCS_PRODUCT_BY_SINGLE_ID": "/productview/byId/",
  "WCS_CART_PRECHECKOUT": "/precheckout",
  "WCS_CART_CHECKOUT": "/checkout",
  "WCS_ORDER": "/order/",
  "WCS_HISTORY": "@history",
  "WCS_PERSON": "/person/",
  "WCS_PROFILE_NAME": "?profileName=IBM_User_Registration_Details",
  "WCS_ACCESS_TOKEN": "access_token",
  "WCS_TRUSTED_ACCESS_TOKEN": "WCTrustedToken",
  "WCS_USER_ID": "userId",
  "WCS_PERSONALIZATION_ID": "personalizationID",
  "WCS_TOKEN_EXPIRATION_TIME": "1800000",
  "WCS_REGISTRATION": "/person?mode=self",
  "WCS_PERSON_AT_SELF": "/person/@self",
  "WCS_ESPOT_RECENTLY_VIEWED_PRODUCTD": "/espot/RecViewed_CatEntries",
  "WCS_PAYMENT_INSTRUCTION_MASKED": "/payment_instruction/sensitive_data_mask_by_plain_string",
  "WCS_PAYMENT_INSTRUCTION": "/payment_instruction",
  "HTTP_URI_CONSTANT": "http:",
  "WCS_SEO": "/seo/seoKeyword",
  "WCS_LAYOUT": "/page_design?q=byObjectIdentifier",
  "WCS_ESPOT": "/espot/",
  "WCS_COOKIE_DOMAIN": ".herokuapp.com",

  "WCS_ADDRESS_ADDED": "Address Added Successfully",
  "WCS_ADDRESS_DELETED": "Address Deleted Successfully",
  "WCS_ADDRESS_UPDATED": "Address Updated Successfully",
  "WCS_ADDRESS_SELECTED": "Address Selected Successfully",
  "WCS_SHIPMODE_SELECTED": "Ship mode updated successfully",

  /*To be got from the UI*/
  "WCS_AUTH_TOKEN": "12022%2C16Y0w9HO0rAvYKi42p4R3in9WzOQPJ2r8TMIejt6MF%2B4Skkt9f%2F%2FKf71IjRZHCf2cYp2UYzx2i3BGMwV9r5PzWAX5FGAZDsQhAErIsRZEEqWwLMXy6h6ethm5ngU0ijtNQaniaD%2FTOlllsVOreE4PYegQVzOkaXtACIhtQWUZr2RbaMC80nqEG6ORDp6CfKqua3wmqRUbHyqdRhmceBeMDfCs3OziIpsrO7tKefTyJQ%3D",
  "WCS_TRUSTED_TOKEN": "12022%2CR97hA7x3qfhBXYmRxOYjCaldMf8A9E2b%2BeLYoYpCneY%3D",
  "WCS_DOUBLE_SLASH": "//",

  "DB_URL": "mongodb://HeadStart:Headless1@ds125628.mlab.com:25628/headstartdb"

};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	/* 
  * JSON Mapper for generating responses for PDP page 
  */

	mapPdpJSON: function mapPdpJSON(body, inv) {
		var converter = _jsonMapper2.default.makeConverter({
			catalogEntryView: ['catalogEntryView', _jsonMapper2.default.map({
				hasSingleSKU: function hasSingleSKU(input) {
					if (inv == true) {
						return input.hasSingleSKU;
					}
					return;
				},
				uniqueId: 'uniqueID',
				parentCatalogGroupID: 'parentCatalogGroupID',
				catalogEntryTypeCode: 'catalogEntryTypeCode',
				buyable: 'buyable',
				store: 'storeID',
				listPrice: 'price.0.value',
				purchasePrice: 'price.1.value',
				code: 'partNumber',
				resourceId: 'resourceId',
				displayName: 'name',
				manufacturer: 'manufacturer',
				seoKeyword: 'seo_token_ntk',
				attributes: ['attributes', _jsonMapper2.default.map({
					displayable: 'displayable',
					name: 'name',
					identifier: 'identifier',
					values: ['values', _jsonMapper2.default.map({
						value: 'value',
						identifier: 'identifier',
						uniqueID: 'uniqueID',
						image: ['image1path', function (url) {
							if (url) {
								return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
							}
						}]
					})],
					usage: 'usage',
					sequence: 'sequence'
				})],
				merchandisingAssociations: ['merchandisingAssociations', _jsonMapper2.default.map({
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					uniqueID: 'uniqueID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					seoKeyword: 'seo_token_ntk',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})]
					})],

					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}],
					fullImage: ['fullImage', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				skus: ['sKUs', _jsonMapper2.default.map({
					skuId: 'uniqueID',
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					seoKeyword: 'seo_token_ntk',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})],
						usage: 'usage',
						sequence: 'sequence'
					})],
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}],
				fullImage: ['fullImage', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}]
			})]
		});
		var result = converter(body);
		var jsonObj = result;

		if (inv != true) {
			for (var i = 0; i < jsonObj.catalogEntryView.length; i++) {
				var invAvailability = inv.InventoryAvailability[i].inventoryStatus;
				var quantityAvailable = inv.InventoryAvailability[i].availableQuantity;

				jsonObj.catalogEntryView[i].availability = invAvailability;
				jsonObj.catalogEntryView[i].quantity = quantityAvailable;
			}
		}
		return jsonObj;
	},
	/* 
 * JSON Mapper for generating responses for Quick View page 
 */

	mapQuickViewJSON: function mapQuickViewJSON(body, inv) {
		var converter = _jsonMapper2.default.makeConverter({
			catalogEntryView: ['catalogEntryView', _jsonMapper2.default.map({
				hasSingleSKU: 'hasSingleSKU',
				uniqueId: 'uniqueID',
				catalogEntryTypeCode: 'catalogEntryTypeCode',
				buyable: 'buyable',
				store: 'storeID',
				listPrice: 'price.0.value',
				purchasePrice: 'price.1.value',
				code: 'partNumber',
				resourceId: 'resourceId',
				displayName: 'name',
				seoKeyword: 'seo_token_ntk',
				attributes: ['attributes', _jsonMapper2.default.map({
					displayable: 'displayable',
					name: 'name',
					identifier: 'identifier',
					values: ['values', _jsonMapper2.default.map({
						identifier: 'identifier',
						uniqueID: 'uniqueID',
						image: ['image1path', function (url) {
							if (url) {
								return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
							}
						}]
					})]
				})],
				skus: ['sKUs', _jsonMapper2.default.map({
					skuId: 'uniqueID',
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					seoKeyword: 'seo_token_ntk',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})]
					})],
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}],
				fullImage: ['fullImage', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}]
			})]
		});
		var result = converter(body);
		var jsonObj = result;

		for (var i = 0; i < jsonObj.catalogEntryView.length; i++) {
			var invAvailability = inv.InventoryAvailability[i].inventoryStatus;
			var quantityAvailable = inv.InventoryAvailability[i].availableQuantity;

			jsonObj.catalogEntryView[i].availability = invAvailability;
			jsonObj.catalogEntryView[i].quantity = quantityAvailable;
		}
		return jsonObj;
	},
	mapRecentlyViewedProductsJSON: function mapRecentlyViewedProductsJSON(body) {
		var converter = _jsonMapper2.default.makeConverter({
			resourceId: 'resourceId',
			recentlyViewedProducts: ['MarketingSpotData.0.baseMarketingSpotActivityData', _jsonMapper2.default.map({
				catalogEntryTypeCode: 'catalogEntryTypeCode',
				currency: 'currency',
				partNumber: 'productPartNumber',
				productId: 'productId',
				purchasePrice: 'standardPrice',
				listPrice: 'listPrice',
				seoKeyword: 'seo_token_ntk',
				description: ['description', _jsonMapper2.default.map({
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}],
					shortDescription: 'shortDescription',
					longDescription: 'longDescription',
					language: 'language',
					productName: 'productName'
				})],
				attributes: ['attributes', _jsonMapper2.default.map({
					name: 'name',
					stringValue: 'stringValue'
				})]
			})]

		});
		var result = converter(body);
		return result;
	},

	mapProductDetailBySingleIdJSON: function mapProductDetailBySingleIdJSON(body) {

		var converter = _jsonMapper2.default.makeConverter({
			catalogEntryView: ['catalogEntryView', _jsonMapper2.default.map({
				hasSingleSKU: 'hasSingleSKU',
				uniqueId: 'uniqueID',
				catalogEntryTypeCode: 'catalogEntryTypeCode',
				buyable: 'buyable',
				store: 'storeID',
				listPrice: 'price.0.value',
				purchasePrice: 'price.1.value',
				code: 'partNumber',
				resourceId: 'resourceId',
				displayName: 'name',
				seoKeyword: 'seo_token_ntk',
				attributes: ['attributes', _jsonMapper2.default.map({
					displayable: 'displayable',
					name: 'name',
					identifier: 'identifier',
					values: ['values', _jsonMapper2.default.map({
						identifier: 'identifier',
						uniqueID: 'uniqueID',
						image: ['image1path', function (url) {
							if (url) {
								return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
							}
						}]
					})]
				})],
				skus: ['sKUs', _jsonMapper2.default.map({
					skuId: 'uniqueID',
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					seoKeyword: 'seo_token_ntk',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})]
					})],
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}],
				fullImage: ['fullImage', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}]
			})]

		});
		var result = converter(body);
		return result;
	}
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("q");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {
    /**
     * Method for logging in
     * Request method - POST
     * Request body - logonId,logonPassword
     */
    loginIdentityHandler: function loginIdentityHandler(req, res) {
        var concatUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_LOGIN_IDENTITY;
        var loginUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatUrl, true);
        logger.info("Login url = " + loginUrl);
        var method = 'POST';
        var messageData = {
            "logonId": req.body.logonId,
            "logonPassword": req.body.logonPassword
        };
        logger.info("messageData = " + req.body.logonId + "|" + req.body.logonPassword);
        var logonCall = (0, _util.constructRequestWithoutToken)(loginUrl, method, messageData, '');
        (0, _requestPromise2.default)(logonCall).then(function (result) {
            res.cookie(_constants2.default.WCS_ACCESS_TOKEN, result.WCToken);
            res.cookie(_constants2.default.WCS_TRUSTED_ACCESS_TOKEN, result.WCTrustedToken);
            res.cookie(_constants2.default.WCS_PERSONALIZATION_ID, result.personalizationID);
            res.cookie(_constants2.default.WCS_USER_ID, result.userId);
            res.send({
                "success": true
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('errors in service to loginIdentityHandler in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to loginIdentityHandler in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },
    /**
     * Method for creating guest user
     * Request method - POST
     */
    guestIdentityHandler: function guestIdentityHandler(req, res) {
        logger.info("inside guestIdentityHandler");
        return new _bluebird2.default(function (resolve, reject) {
            var concatUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_GUEST_IDENTITY;
            var guestIdentityUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatUrl, true);
            logger.info("GuestIdentityUrl = " + guestIdentityUrl);
            var method = 'POST';
            var guestCall = (0, _util.constructRequestWithoutToken)(guestIdentityUrl, method, '');
            (0, _requestPromise2.default)(guestCall).then(function (result) {
                result = JSON.parse(result);
                res.cookie(_constants2.default.WCS_ACCESS_TOKEN, result.WCToken);
                res.cookie(_constants2.default.WCS_PERSONALIZATION_ID, result.personalizationID);
                res.cookie(_constants2.default.WCS_USER_ID, result.userId);
                res.cookie(_constants2.default.WCS_TRUSTED_ACCESS_TOKEN, result.WCTrustedToken);
                res.send({
                    "success": true
                });
            }).catch(function (error) {
                if (error.statusCode === 404) {
                    logger.error('errors in service to guestIdentityHandler in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body });
                } else {
                    logger.error('errors in service to guestIdentityHandler in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body.errors[0] });
                }
            });
        });
    },

    /**
     * Method for creating guest user
     * Request method - DELETE
     */
    logoutUser: function logoutUser(req, res) {
        logger.info("inside logout user");
        return new _bluebird2.default(function (resolve, reject) {
            var concatUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_LOGIN_IDENTITY + _constants2.default.WCS_AT_SELF;
            var logoutUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatUrl, true);
            logger.info("Logout user = " + logoutUrl);
            var method = 'DELETE';
            var messageData = {};
            var guestCall = (0, _util.constructRequestWithoutToken)(logoutUrl, method, messageData);
            (0, _requestPromise2.default)(guestCall).then(function (result) {
                res.clearCookie(_constants2.default.WCS_ACCESS_TOKEN);
                res.clearCookie(_constants2.default.WCS_TRUSTED_ACCESS_TOKEN);
                res.clearCookie(_constants2.default.WCS_PERSONALIZATION_ID);
                res.clearCookie(_constants2.default.WCS_USER_ID);
                res.send({
                    "success": true
                });
            }).catch(function (error) {
                if (error.statusCode === 404) {
                    logger.error('errors in service to logout in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body });
                } else {
                    logger.error('errors in service to logout in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body.errors[0] });
                }
            });
        });
    }

};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _util = __webpack_require__(6);

var _epIndex = __webpack_require__(21);

var _epIndex2 = _interopRequireDefault(_epIndex);

var _wcsIndex = __webpack_require__(53);

var _wcsIndex2 = _interopRequireDefault(_wcsIndex);

var _wcs9Index = __webpack_require__(94);

var _wcs9Index2 = _interopRequireDefault(_wcs9Index);

var _cookieParser = __webpack_require__(101);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var app = (0, _express2.default)();

app.use(_express2.default.static('WebContent'));
app.set('port', process.env.PORT || 5000);
app.use((0, _cookieParser2.default)());

//To Allow Cross Domain
var allowCrossDomain = function allowCrossDomain(req, res, next) {
  var allowedOrigins = ['http://localhost:4200', 'http://project-c-web-app.herokuapp.com', 'https://project-c-web-app.herokuapp.com', 'http://127.0.0.1:4200', 'http://34.216.254.83:4200', 'http://34.216.254.83:5000'];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Cookie');
  res.header('Access-Control-Allow-Credentials', true);

  next();
};

app.use(allowCrossDomain);

// Process application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));
// Process application/json
app.use(_bodyParser2.default.json());

/**
 * App includes all the Routes
 */
app.all('/ep/*', _epIndex2.default);
app.all('/wcs/*', _wcsIndex2.default);
app.all('/wcs9/*', _wcs9Index2.default);

// Spin up the server
app.listen(app.get('port'), function () {
  logger.info('running on port', app.get('port'));
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _loginRoutes = __webpack_require__(22);

var _loginRoutes2 = _interopRequireDefault(_loginRoutes);

var _searchRoutes = __webpack_require__(24);

var _searchRoutes2 = _interopRequireDefault(_searchRoutes);

var _categoryRoutes = __webpack_require__(27);

var _categoryRoutes2 = _interopRequireDefault(_categoryRoutes);

var _pdpRoutes = __webpack_require__(30);

var _pdpRoutes2 = _interopRequireDefault(_pdpRoutes);

var _cartRoutes = __webpack_require__(33);

var _cartRoutes2 = _interopRequireDefault(_cartRoutes);

var _shipModeRoutes = __webpack_require__(36);

var _shipModeRoutes2 = _interopRequireDefault(_shipModeRoutes);

var _addressRoutes = __webpack_require__(39);

var _addressRoutes2 = _interopRequireDefault(_addressRoutes);

var _wishListRoutes = __webpack_require__(42);

var _wishListRoutes2 = _interopRequireDefault(_wishListRoutes);

var _promotionsRoutes = __webpack_require__(45);

var _promotionsRoutes2 = _interopRequireDefault(_promotionsRoutes);

var _registerRoutes = __webpack_require__(48);

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

var _userProfileRoutes = __webpack_require__(50);

var _userProfileRoutes2 = _interopRequireDefault(_userProfileRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/ep/login', _loginRoutes2.default);
app.use('/ep/search', _searchRoutes2.default);
app.use('/ep/category', _categoryRoutes2.default);
app.use('/ep/PDP', _pdpRoutes2.default);
app.use('/ep/cart', _cartRoutes2.default);
app.use('/ep/shipModes', _shipModeRoutes2.default);
app.use('/ep/address', _addressRoutes2.default);
app.use('/ep/wishlist/', _wishListRoutes2.default);
app.use('/ep/promotions/', _promotionsRoutes2.default);
app.use('/ep/register/', _registerRoutes2.default);
app.use('/ep/userProfile/', _userProfileRoutes2.default);

exports.default = app;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _loginCtlr = __webpack_require__(8);

var _loginCtlr2 = _interopRequireDefault(_loginCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.use(_bodyParser2.default.json());

/**
 * router for login
 */
router.post('/loginIdentityHandler', function (req, res) {
  _loginCtlr2.default.loginIdentityHandler(req, res);
});

/**
* router for logging out a user	
*/
router.delete('/logout', function (req, res) {
  _loginCtlr2.default.logout(req, res);
});

exports.default = router;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = {
      "EP_STORE": "britney",
      "EP_HOSTNAME": "34.216.223.217:9080",
      "EP_HOSTNAME_CORTEX": "34.216.223.217:9080/cortex",
      "EP_TOKEN_EXPIRATION_TIME": "1800000"
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _searchCtlr = __webpack_require__(25);

var _searchCtlr2 = _interopRequireDefault(_searchCtlr);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
 * get Search Results
 */
router.get('/getSearchResults', function (req, res) {
  _searchCtlr2.default.getSearchResults(req, res);
});

exports.default = router;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(6);

var _searchMapper = __webpack_require__(26);

var _searchMapper2 = _interopRequireDefault(_searchMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _loginCtlr = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

module.exports = {

  /*Controller for getting the Search results for a given keyword in EP*/
  getSearchResults: function getSearchResults(req, res) {

    var requestFunction = function requestFunction(token) {
      return new Promise(function (resolve, reject) {

        var keyword = req.query.keyword;
        var pageSize = req.query.pageSize;

        var messageData = {
          "keywords": keyword,
          "page-size": pageSize
        };
        var keywordSearchURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, _constants2.default.EP_SEARCH, false);
        logger.info('getSearchResults post form url', keywordSearchURL);
        var method = 'POST';
        var requestCall = (0, _util.constructRequest)(keywordSearchURL, method, messageData, token);
        logger.info("requestCAll " + requestCall);
        (0, _requestPromise2.default)(requestCall).then(function (data) {
          var uri = data.self.uri;
          var concatURL = uri + _constants2.default.EP_SEARCH_ZOOM;
          var searchUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false);
          var messageData = {};
          logger.info("getSearchResults resource url:" + searchUrl);
          var secondRequestCall = (0, _util.constructRequest)(searchUrl, "GET", messageData, token);
          return (0, _requestPromise2.default)(secondRequestCall).then(function (data) {
            var result = _searchMapper2.default.mapSearchResultJSON(data);
            res.send({
              "success": true,
              "result": result
            });
          }).catch(function (error) {
            if (error.response.body) {
              logger.error('errors in service to getSearchResults in EP: ', error.response.body);
              res.send({ "success": false, "error": error.response.body });
            } else {
              logger.error('errors in service to getSearchResults in EP: ', error);
              res.send({ "success": false, "error": error });
            }
          });
        }).catch(function (error) {
          if (error.response.body) {
            logger.error('errors in service to getSearchResults in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body });
          } else {
            logger.error('errors in service to getSearchResults in EP: ', error);
            res.send({ "success": false, "error": error });
          }
        });
      });
    };
    /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
    (0, _loginCtlr.checkAndGetAuthToken)(req, res, function (access_token) {
      requestFunction(access_token);
    });
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  /*json mapper for mapping the product list json for category landing page in EP*/
  mapSearchResultJSON: function mapSearchResultJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({

      pagination: {
        pageSize: 'pagination.page-size',
        currentPageNumber: 'pagination.current',
        resultsTotal: 'pagination.results',
        resultsCurrentPage: 'pagination.results-on-page',
        pages: 'pagination.pages'

      },
      searchResults: ['_element', _jsonMapper2.default.map({

        availability: '_availability.0.state',
        listPrice: '_price.0.list-price.0.display',
        purchasePrice: '_price.0.purchase-price.0.display',
        displayName: '_definition.0.display-name',
        code: '_code.0.code',
        uniqueID: '_code.0.links.0.uri',
        store: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE),
        thumbnail: ['_code.0.code', function (code) {
          var originalCode = code.split(".")[0];
          return _constants2.default.EP_AWS_IMAGE_PATH + originalCode + _constants2.default.EP_IMAGE_FMT;
        }],

        attributes: ['_definition.0.details', _jsonMapper2.default.map({
          displayable: _jsonMapper2.default.helpers.def('true'),
          usage: _jsonMapper2.default.helpers.def('Descriptive'),
          name: 'display-name',
          identifier: 'name',
          values: 'value'

        })],

        hasSingleSKU: ['_definition.0.links', function (arr) {
          if (arr.length >= 3) return false;else return true;
        }],

        catalogEntryTypeCode: ['_definition.0.links', function (arr) {
          if (arr.length >= 3) return 'ProductBean';else return 'ItemBean';
        }]
      })]

    });

    var result = converter(body);
    return result;
  }

};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _categoryCtlr = __webpack_require__(28);

var _categoryCtlr2 = _interopRequireDefault(_categoryCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/*App needs to pass EP access token*/
router.get('/getTopCategories', function (req, res) {
	_categoryCtlr2.default.getTopCategories(req, res);
});

/*App needs to pass EP access token & category Identifier*/
router.get('/getSubCategories', function (req, res) {
	_categoryCtlr2.default.getSubCategories(req, res);
});

/*App needs to pass EP access token & category Identifier*/
router.get('/getProductsListForCategory', function (req, res) {
	_categoryCtlr2.default.getProductsListForCategory(req, res);
});

exports.default = router;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _categoryMapper = __webpack_require__(29);

var _categoryMapper2 = _interopRequireDefault(_categoryMapper);

var _util = __webpack_require__(6);

var _loginCtlr = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

module.exports = {

  /*Controller for getting the Top level categories for header in EP*/
  getTopCategories: function getTopCategories(req, res) {

    var requestFunction = function requestFunction(token) {
      return new Promise(function (resolve, reject) {
        var messageData = {};
        var topCategoriesURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, _constants2.default.EP_TOP_CATEGORIES, false);
        logger.info('Top categories EP url: ', topCategoriesURL);
        var method = 'GET';
        var requestCall = (0, _util.constructRequest)(topCategoriesURL, method, messageData, token);

        (0, _requestPromise2.default)(requestCall).then(function (data) {

          var result = _categoryMapper2.default.mapTopCategoriesJSON(data);
          res.send({
            "success": true,
            "result": result
          });
        }).catch(function (error) {
          if (error.response.body) {
            logger.error('errors in service to get Top categories in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body });
          } else {
            logger.error('errors in service to get Top categories in EP: ', error);
            res.send({ "success": false, "error": error });
          }
        });
      });
    };
    /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
    (0, _loginCtlr.checkAndGetAuthToken)(req, res, function (access_token) {
      requestFunction(access_token);
    });
  },

  /*Controller for getting the Sub categories for header nav menu in EP*/
  getSubCategories: function getSubCategories(req, res) {

    var requestFunction = function requestFunction(token) {
      return new Promise(function (resolve, reject) {

        var messageData = {};
        var identifier = req.query.identifier;
        var concattUrl = identifier + _constants2.default.EP_SUB_CATEGORIES_ZOOM;
        var subCategoriesURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
        logger.info('Sub Categories EP url:', subCategoriesURL);
        var method = 'GET';
        var requestCall = (0, _util.constructRequest)(subCategoriesURL, method, messageData, token);

        (0, _requestPromise2.default)(requestCall).then(function (data) {
          var result = _categoryMapper2.default.mapSubCategoriesJSON(data, identifier);
          res.send({
            "success": true,
            "result": result
          });
        }).catch(function (error) {
          if (error.response.body) {
            logger.error('errors in service to get Sub categories in EP:', error.response.body);
            res.send({ "success": false, "error": error.response.body });
          } else {
            logger.error('errors in service to get Sub categories in EP:', error);
            res.send({ "success": false, "error": error });
          }
        });
      });
    };

    /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
    (0, _loginCtlr.checkAndGetAuthToken)(req, res, function (access_token) {
      requestFunction(access_token);
    });
  },

  /*Controller for getting the products list for a given category/subcategory in EP*/
  getProductsListForCategory: function getProductsListForCategory(req, res) {

    var requestFunction = function requestFunction(token) {
      return new Promise(function (resolve, reject) {

        var messageData = {};

        var identifier = req.query.identifier;
        var n = identifier.split("/");
        var categoryIdentifier = n[n.length - 1];
        var concatURL = _constants2.default.EP_PRODUCTS_FROM_CATEGORIES_NAV + categoryIdentifier + _constants2.default.EP_SEARCH_ZOOM;
        var productListUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false);
        logger.info('Categories page Product List EP url:', productListUrl);
        var method = 'GET';
        var requestCall = (0, _util.constructRequest)(productListUrl, method, messageData, token);

        (0, _requestPromise2.default)(requestCall).then(function (data) {
          var result = _categoryMapper2.default.mapProductsListForCategoryJSON(data);
          res.send({
            "success": true,
            "result": result
          });
        }).catch(function (error) {
          if (error.response.body) {
            logger.error('errors in service to get products list for category in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body });
          } else {
            logger.error('errors in service to get products list for category in EP: ', error);
            res.send({ "success": false, "error": error });
          }
        });
      });
    };

    /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
    (0, _loginCtlr.checkAndGetAuthToken)(req, res, function (access_token) {
      requestFunction(access_token);
    });
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  /*json Mapper for mapping the Top level categories for header in EP*/
  mapTopCategoriesJSON: function mapTopCategoriesJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({

      TopCategories: ['_element', _jsonMapper2.default.map({
        name: 'display-name',
        identifier: 'name',
        id: 'self.uri',
        store: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE)

      })],
      totalCount: ['_element', function (arr) {
        return arr.length;
      }]
    });

    var result = converter(body);
    return result;
  },

  /*json Mapper for mapping the Top level categories for header in EP*/
  mapSubCategoriesJSON: function mapSubCategoriesJSON(body, identifier) {

    var converter = _jsonMapper2.default.makeConverter({

      SubCategories: ['_child', _jsonMapper2.default.map({
        name: 'display-name',
        identifier: 'name',
        id: 'self.uri',
        store: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE)

      })],
      totalCount: ['_child', function (arr) {
        return arr.length;
      }]
    });

    var result = converter(body);
    return result;
  },

  /*json mapper for mapping the product list json for category landing page in EP*/
  mapProductsListForCategoryJSON: function mapProductsListForCategoryJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({

      pagination: {
        pageSize: 'pagination.page-size',
        currentPageNumber: 'pagination.current',
        resultsTotal: 'pagination.results',
        resultsCurrentPage: 'pagination.results-on-page',
        pages: 'pagination.pages'

      },
      productsList: ['_element', _jsonMapper2.default.map({

        availability: '_availability.0.state',
        listPrice: '_price.0.list-price.0.display',
        purchasePrice: '_price.0.purchase-price.0.display',
        displayName: '_definition.0.display-name',
        code: '_code.0.code',
        uniqueID: '_code.0.links.0.uri',
        store: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE),
        thumbnail: ['_code.0.code', function (code) {
          var originalCode = code.split(".")[0];
          return _constants2.default.EP_AWS_IMAGE_PATH + originalCode + _constants2.default.EP_IMAGE_FMT;
        }],

        attributes: ['_definition.0.details', _jsonMapper2.default.map({
          displayable: _jsonMapper2.default.helpers.def('true'),
          name: 'display-name',
          identifier: 'name',
          values: 'value'

        })],

        hasSingleSKU: ['_definition.0.links', function (arr) {
          if (arr.length >= 3) return false;else return true;
        }],

        catalogEntryTypeCode: ['_definition.0.links', function (arr) {
          if (arr.length >= 3) return 'ProductBean';else return 'ItemBean';
        }]
      })]

    });

    var result = converter(body);
    return result;
  }

};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _pdpCtlr = __webpack_require__(31);

var _pdpCtlr2 = _interopRequireDefault(_pdpCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
 * Get Product Details
 */
router.get('/getProductDetails', function (req, res) {
  _pdpCtlr2.default.getProductDetails(req, res);
});

exports.default = router;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(6);

var _loginCtlr = __webpack_require__(8);

var _pdpMapper = __webpack_require__(32);

var _pdpMapper2 = _interopRequireDefault(_pdpMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

var _underscore = __webpack_require__(14);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();


module.exports = {

	/*Controller for getting the Product details to be displayed in the PDP page in EP*/
	getProductDetails: function getProductDetails(req, res) {

		var requestFunction = function requestFunction(token) {
			return new Promise(function (resolve, reject) {

				var uri = req.query.productId;
				var concatURL = uri + _constants2.default.EP_PDP_ZOOM;
				var pdpUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false);
				logger.info("getProductDetails post form url:" + pdpUrl);
				var messageData = {};
				var method = 'GET';
				var requestCall = (0, _util.constructRequest)(pdpUrl, method, messageData, token);
				(0, _requestPromise2.default)(requestCall).then(function (data) {
					var crossellData = [];
					var upsellData = [];

					if (typeof data._recommendations != "undefined") {
						var merchAssoc = data._recommendations[0]._crosssell[0]._element;
						var merchAssocSize = merchAssoc.length;
						for (var i = 0; i < merchAssocSize; i++) {
							crossellData[i] = _pdpMapper2.default.convertMerchAssoc(data._recommendations[0]._crosssell[0]._element[i]);
						}
					}
					/*
     Taking out the upsell functionality
     
     if(typeof data._recommendations != "undefined"){
      let merchAssoc = data._recommendations[0]._upsell[0]._element;
      let merchAssocSize = merchAssoc.length;
      for(let i=0; i< merchAssocSize; i++){
     upsellData[i] = pdpMapper.convertMerchAssoc(data._recommendations[0]._upsell[0]._element[i]);
      }
     }	
     
     let recommendations = crossellData.concat(upsellData);
     */
					var recommendations = crossellData.concat(upsellData);
					var result = _pdpMapper2.default.mapPdpJSON(data, recommendations);
					res.send({
						"success": true,
						"result": result
					});
				}).catch(function (error) {
					logger.error('errors in service to getProduct Details in EP: ', error);
					res.send({ "success": false, "error": error });
				});
			});
		};

		/*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
		(0, _loginCtlr.checkAndGetAuthToken)(req, res, function (access_token) {
			requestFunction(access_token);
		});
	}

};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

	/*json Mapper for mapping the PDP header in EP*/
	mapPdpJSON: function mapPdpJSON(body, recommendations) {

		var converter = _jsonMapper2.default.makeConverter({

			catalogEntryView: [{

				hasSingleSKU: ['_definition.0.links', function (arr) {
					if (arr.length >= 3) return false;else return true;
				}],

				catalogEntryTypeCode: ['_definition.0.links', function (arr) {
					if (arr.length >= 3) return 'ProductBean';else return 'ItemBean';
				}],

				buyable: _jsonMapper2.default.helpers.def('true'),

				store: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE),

				availability: '_availability.0.state',

				listPrice: '_price.0.list-price.0.display',
				purchasePrice: '_price.0.purchase-price.0.display',

				code: '_code.0.code',

				resourceId: '_code.0.links.0.uri',

				displayName: '_definition.0.display-name',

				attributes: ['_definition.0.details', _jsonMapper2.default.map({
					displayable: _jsonMapper2.default.helpers.def('true'),
					usage: _jsonMapper2.default.helpers.def('Descriptive'),
					name: 'display-name',
					identifier: 'name',
					values: 'value'

				})],

				swatches: ['_definition.0._options.0._element', _jsonMapper2.default.map({
					displayName: 'display-name',
					options: ['_selector', _jsonMapper2.default.map({
						choice: ['_choice', _jsonMapper2.default.map({
							name: '_description.0.display-name',
							unniqueId: '_description.0.self.uri'
						})],
						chosen: ['_chosen', _jsonMapper2.default.map({
							name: '_description.0.display-name',
							uniqueId: '_description.0.self.uri'
						})]
					})]
				})],

				thumbnail: ['_code.0.code', function (code) {
					var imageName = code.split("-")[0].toUpperCase();
					imageName = imageName.replace(".", "-");
					var concatImageURL = _constants2.default.EP_AWS_IMAGE_PATH + imageName + _constants2.default.EP_IMAGE_FMT;
					return concatImageURL;
				}],

				fullImage: ['_code.0.code', function (code) {
					var imageName = code.split("-")[0].toUpperCase();
					imageName = imageName.replace(".", "-");
					var concatImageURL = _constants2.default.EP_AWS_IMAGE_PATH + imageName + _constants2.default.EP_IMAGE_FMT;
					return concatImageURL;
				}]

			}]
		});

		var result = converter(body);

		result.catalogEntryView.merchandisingAssociations = recommendations;

		return result;
	},

	convertMerchAssoc: function convertMerchAssoc(body) {

		var converter = _jsonMapper2.default.makeConverter({

			hasSingleSKU: ['_definition.0.details', function (arr) {
				if (arr.length >= 3) return false;else return true;
			}],

			catalogEntryTypeCode: ['_definition.0.details', function (arr) {
				if (arr.length >= 3) return 'ProductBean';else return 'ItemBean';
			}],

			buyable: _jsonMapper2.default.helpers.def('true'),

			store: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE),

			availability: '_availability.0.state',

			listPrice: '_price.0.list-price.0.display',
			purchasePrice: '_price.0.purchase-price.0.display',

			code: '_code.0.code',

			resourceId: '_code.0.links.0.uri',

			displayName: '_definition.0.display-name',

			attributes: ['_definition.0.details', _jsonMapper2.default.map({
				displayable: _jsonMapper2.default.helpers.def('true'),
				usage: _jsonMapper2.default.helpers.def('Descriptive'),
				name: 'display-name',
				identifier: 'name',
				values: 'value'

			})],

			thumbnail: ['_code.0.code', function (code) {
				var imageName = code.split("-")[0].toUpperCase();
				imageName = imageName.replace(".", "-");
				var concatImageURL = _constants2.default.EP_AWS_IMAGE_PATH + imageName + _constants2.default.EP_IMAGE_FMT;
				return concatImageURL;
			}],

			fullImage: ['_code.0.code', function (code) {
				var imageName = code.split("-")[0].toUpperCase();
				imageName = imageName.replace(".", "-");
				var concatImageURL = _constants2.default.EP_AWS_IMAGE_PATH + imageName + _constants2.default.EP_IMAGE_FMT;
				return concatImageURL;
			}]

		});

		var result = converter(body);
		return result;
	}

};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _cartCtlr = __webpack_require__(34);

var _cartCtlr2 = _interopRequireDefault(_cartCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
 *  Add a Product to a Cart
 */
router.post('/addToCart', function (req, res) {
  _cartCtlr2.default.addToCart(req, res);
});
/**
 * Get Shopping Cart Details.
 */
router.get('/shoppingCart', function (req, res) {
  _cartCtlr2.default.getShoppingCart(req, res);
});
/**
 * Update Item Shopping Cart .
 */
router.put('/updateShoppingCartItem', function (req, res) {
  _cartCtlr2.default.updateShoppingCartItem(req, res);
});

/**
 * Delete Item from  Shopping Cart .
 */
router.delete('/deleteShoppingCartItem', function (req, res) {
  _cartCtlr2.default.deleteShoppingCartItem(req, res);
});

/**
 * DeleteAll Item from  Shopping Cart .
 */
router.delete('/deleteAllShoppingCartItem', function (req, res) {
  _cartCtlr2.default.deleteAllShoppingCartItem(req, res);
});

/**
 * Order Review
 */
router.post('/orderReview', function (req, res) {
  _cartCtlr2.default.orderReview(req, res);
});

/* 
 * router for submitting order
 */

router.post('/submitOrder', function (req, res) {
  _cartCtlr2.default.submitOrder(req, res);
});

exports.default = router;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _cartMapper = __webpack_require__(35);

var _cartMapper2 = _interopRequireDefault(_cartMapper);

var _util = __webpack_require__(6);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

module.exports = {
  /**
   * Controller to add a product to cart  in EP  
   */
  addToCart: function addToCart(req, res) {
    var token = req.cookies.access_token;
    if (undefined != req.body.swatches && null != req.body.swatches) {
      var swatches = req.body.swatches;
      for (var i = 0; i < swatches.length; i++) {
        var uri = req.body.swatches[i].uri;
        var concatURL = uri + _constants2.default.EP_FOLLOW_LOCATION;
        var swatchSelectionUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false);
        var method = "POST";
        var messageData = {};
        var requestCall = (0, _util.constructRequest)(swatchSelectionUrl, method, messageData, token);
        logger.info('Post add to cart url', swatchSelectionUrl);
        (0, _requestPromise2.default)(requestCall).then(function (data) {
          logger.info(_constants2.default.EP_SWATCH_SELECTED);
        }).catch(function (error) {
          if (error.response.body) {
            logger.error('errors in selecting swatch in EP: ', error.response.body);
            res.send({ "success": false, "error": error.response.body });
          } else {
            logger.error('errors in selecting swatch in EP: ', error);
            res.send({ "success": false, "error": error });
          }
        });
      }
    }
    var requests = [];
    for (var _i = 0; _i < req.body.orderItem.length; _i++) {
      var concattUrl = req.body.orderItem[_i].productId + "?followlocation";
      var addToCartUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
      var _messageData = { "quantity": req.body.orderItem[_i].quantity };
      requests.push(this.getAddToCartRequestPromise(token, JSON.parse(JSON.stringify(_messageData)), addToCartUrl));
    }
    _bluebird2.default.all(requests).then(function (results) {
      var result = _cartMapper2.default.addToCartJSON(results);
      res.send({
        "success": true,
        "result": result
      });
    }, function (err) {
      logger.error('errors in service hit to Add to Cart service' + err);
      res.send({ "success": false, "error": err });
    });
  },

  getAddToCartRequestPromise: function getAddToCartRequestPromise(authToken, data, url) {
    return new _bluebird2.default(function (resolve, reject) {
      var requestCall = (0, _util.constructRequest)(url, "POST", data, authToken);
      (0, _requestPromise2.default)(requestCall).then(function (data) {
        return resolve({ success: true, url: url, body: data });
      }).catch(function (error) {
        logger.error('errors in service to Add to Cart in EP: ', error);
        return resolve({ success: false, error: error });
      });
    });
  },

  /**
   * Get Shopping Cart Details
   */

  getShoppingCart: function getShoppingCart(req, res) {
    var token = req.cookies.access_token;
    var messageData = {};
    var concattUrl = _constants2.default.EP_SHOPPING_CART + _constants2.default.EP_SHOPPING_CART_ZOOM;
    var defaultCartURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);

    logger.info('Get shoppingCart form url', defaultCartURL);
    var method = 'GET';
    var requestCall = (0, _util.constructRequest)(defaultCartURL, method, messageData, token);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _cartMapper2.default.shoppingCartJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to getShoppingCart in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to getShoppingCart in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },
  /**
  *   Update Shopping Cart Item Details
  */

  updateShoppingCartItem: function updateShoppingCartItem(req, res) {
    var token = req.cookies.access_token;
    var messageData = { "quantity": req.body.lineItem[0].quantity };
    var uri = req.body.lineItem[0].lineItemId;
    var updateCartItemURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, uri, false);
    logger.info('updateShoppingCart form url', updateCartItemURL);
    var method = 'PUT';
    var requestCall = (0, _util.constructRequest)(updateCartItemURL, method, messageData, token);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _cartMapper2.default.updateCartItemJSON(uri);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {

      if (error.response.body) {
        logger.error('errors in service to updateShoppingCartItem in EP: ', error.response.body);
        res.send({ "success": false, "error": error });
      } else {
        logger.error('errors in service to updateShoppingCartItem in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },
  /**
  *   Delete item from Shopping Cart 
  */

  deleteShoppingCartItem: function deleteShoppingCartItem(req, res) {
    var token = req.cookies.access_token;
    var messageData = {};
    var uri = req.body.lineItem[0].lineItemId;
    var deleteCartItemURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, uri, false);
    logger.info('delete Item form url', deleteCartItemURL);
    var method = 'DELETE';
    var requestCall = (0, _util.constructRequest)(deleteCartItemURL, method, messageData, token);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _cartMapper2.default.deleteCartItemJSON();
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to DeleteItem in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to DeleteItem in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /**
  *   Delete All item from Shopping Cart 
  */

  deleteAllShoppingCartItem: function deleteAllShoppingCartItem(req, res) {
    var token = req.cookies.access_token;
    var messageData = {};
    var uri = req.body.cartLineItemId;
    var deleteAllCartItemURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, uri, false);
    logger.info('delete All Item form url', deleteAllCartItemURL);
    var method = 'DELETE';
    var requestCall = (0, _util.constructRequest)(deleteAllCartItemURL, method, messageData, token);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _cartMapper2.default.deleteAllCartItemJSON();
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to DeleteAllItem in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to DeleteAllItem in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /**
  *  Order Review 
  */

  orderReview: function orderReview(req, res) {
    var token = req.cookies.access_token;
    var messageData = {};
    var uri = req.body.orderId + _constants2.default.EP_GET_ORDER_REVIEW;
    var orderReviewURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, uri, false);
    logger.info('Order Review', orderReviewURL);
    var method = 'GET';
    var requestCall = (0, _util.constructRequest)(orderReviewURL, method, messageData, token);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _cartMapper2.default.mapOrderReviewJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to order Review in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to order Review in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },
  /**
   * Submit Order
   */
  submitOrder: function submitOrder(req, res) {
    var token = req.cookies.access_token;
    var messageData = {};
    var concattUrl = _constants2.default.EP_PURCHASES + req.body.orderId + _constants2.default.EP_FOLLOW_LOCATION;
    var orderSubmitURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
    logger.info('Order Review', orderSubmitURL);
    var method = 'POST';
    var requestCall = (0, _util.constructRequest)(orderSubmitURL, method, messageData, token);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var uri = data.self.uri;
      var concatURL = uri + _constants2.default.EP_PURCHASE_ZOOM;
      var orderConfirmURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false);
      var messageData = {};
      logger.info("order Confirmation resource url:" + orderConfirmURL);
      var secondRequestCall = (0, _util.constructRequest)(orderConfirmURL, "GET", messageData, token);
      return (0, _requestPromise2.default)(secondRequestCall).then(function (data) {
        var result = _cartMapper2.default.mapOrderConfirmationJSON(data);
        res.send({
          "success": true,
          "result": result
        });
      }).catch(function (error) {
        if (error.response.body) {
          logger.error('errors in service to orderConfirmation in EP: ', error.response.body);
          res.send({ "success": false, "error": error.response.body });
        } else {
          logger.error('errors in service to orderConfirmation in EP: ', error);
          res.send({ "success": false, "error": error });
        }
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to Submit Order in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to Submit Order in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  }

};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(6);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*Normal Response for Add to Cart this needs to be refine*/
    addToCartJSON: function addToCartJSON(results) {
        var orderItem = [];
        var uri = void 0;
        for (var i = 0; i < results.length; i++) {
            if (results[i].success) {
                orderItem.push({ "orderItemId": results[i].body.self.uri });
                uri = results[i].body.links[3].uri;
            } else {
                logger.info('RequestFailed' + JSON.stringify(results[i].error.message));
                orderItem.push({ "orderItemId": results[i].error.message });
            }
        }
        var result = { "orderId": uri, "orderItem": orderItem };
        return JSON.parse(JSON.stringify(result));
    },
    /**
     * json mapper for mapping the product list json for category landing page in EP
     */

    shoppingCartJSON: function shoppingCartJSON(body) {
        var currency = body._order[0]._total[0].cost[0].currency;

        var converter = _jsonMapper2.default.makeConverter({
            totalQuantity: 'total-quantity',

            adjustments: ['_appliedpromotions.0._element', _jsonMapper2.default.map({
                code: _jsonMapper2.default.helpers.def(''),
                currency: _jsonMapper2.default.helpers.def(currency),
                description: 'display-description',
                displayLevel: _jsonMapper2.default.helpers.def('Order'),
                usage: _jsonMapper2.default.helpers.def('Discount')
            })],

            grandTotal: '_order.0._total.0.cost.0.display',
            grandTotalCurrency: '_order.0_total.0.cost.0.currency',
            orderId: '_order.0._total.0.links.0.uri',
            cartLineItemId: '_lineitems.0.self.uri',
            orderItem: ['_lineitems.0._element', _jsonMapper2.default.map({
                currency: '_price.0.purchase-price.0.currency',
                freeGift: _jsonMapper2.default.helpers.def('false'),
                orderItemId: 'self.uri',
                orderItemInventoryStatus: '_availability.0.state',
                orderItemPrice: '_total.0.cost.0.display',
                partNumber: '_item.0._code.0.code',
                productId: '_item.0._code.0.links.0.uri',
                quantity: 'quantity',
                salesTax: _jsonMapper2.default.helpers.def(''),
                salesTaxCurrency: _jsonMapper2.default.helpers.def(''),
                shippingCharge: _jsonMapper2.default.helpers.def(''),
                shippingChargeCurrency: _jsonMapper2.default.helpers.def(''),
                shippingTax: _jsonMapper2.default.helpers.def(''),
                shippingTaxCurrency: _jsonMapper2.default.helpers.def(''),
                unitPrice: '_price.0.purchase-price.0.display',
                unitQuantity: _jsonMapper2.default.helpers.def('1'),
                usableShippingChargePolicy: [{
                    name: _jsonMapper2.default.helpers.def(''),
                    type: _jsonMapper2.default.helpers.def(''),
                    uniqueID: _jsonMapper2.default.helpers.def('')
                }]
            })],

            orderStatus: _jsonMapper2.default.helpers.def(''),
            recordSetCount: ['_lineitems.0._element', function (arr) {
                if (arr) {
                    return arr.length;
                } else {
                    return 0;
                }
            }],
            recordSetStartNumber: _jsonMapper2.default.helpers.def(''),
            recordSetTotal: _jsonMapper2.default.helpers.def(''),
            resourceId: _jsonMapper2.default.helpers.def(''),
            resourceName: _jsonMapper2.default.helpers.def('cart'),
            shipAsComplete: _jsonMapper2.default.helpers.def(''),
            storeNameIdentifier: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE),
            storeUniqueID: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE),
            totalAdjustment: '_discount.0.discount.0.display',
            totalAdjustmentCurrency: '_discount.0.discount.0.currency',
            totalProductPrice: '_total.0.cost.0.display',
            totalProductPriceCurrency: '_total.0.cost.0.currency',
            totalSalesTax: '_order.0._tax.0.cost.0.display',
            totalSalesTaxCurrency: '_order.0._tax.0.cost.0.currency',
            totalShippingCharge: _jsonMapper2.default.helpers.def(''),
            totalShippingChargeCurrency: _jsonMapper2.default.helpers.def(''),
            totalShippingTax: _jsonMapper2.default.helpers.def(''),
            totalShippingTaxCurrency: _jsonMapper2.default.helpers.def('')
        });
        var result = converter(body);
        return result;
    },
    /**
     * UpdateItem in Cart
     */
    updateCartItemJSON: function updateCartItemJSON(lineItemIdURI) {
        var jsonResponse = {
            orderId: "",
            lineItem: [{
                lineItemId: lineItemIdURI
            }]
        };
        return JSON.parse(JSON.stringify(jsonResponse));
    },
    /**
     * DeleteItem in Cart
     */
    deleteCartItemJSON: function deleteCartItemJSON() {
        var jsonResponse = {
            orderId: ""
        };
        return JSON.parse(JSON.stringify(jsonResponse));
    },
    /**
      * DeleteAllItem in Cart
      */
    deleteAllCartItemJSON: function deleteAllCartItemJSON() {
        var jsonResponse = {
            message: "All Cart Items are Deleted Successfully"
        };
        return JSON.parse(JSON.stringify(jsonResponse));
    },

    /**
     * order Review 
     */
    mapOrderReviewJSON: function mapOrderReviewJSON(body) {

        var converter = _jsonMapper2.default.makeConverter({

            adjustment: ['_cart.0._appliedpromotions.0._element', _jsonMapper2.default.map({
                code: _jsonMapper2.default.helpers.def(''),
                currency: _jsonMapper2.default.helpers.def('USD'),
                description: 'display-description',
                displayLevel: _jsonMapper2.default.helpers.def('Order'),
                usage: _jsonMapper2.default.helpers.def('Discount')
            })],
            grandTotal: '_total.0.cost.0.display',
            grandTotalCurrency: '_total.0.cost.0.currency',
            locked: _jsonMapper2.default.helpers.def(''),
            orderId: '_total.0.links.0.uri',
            lineItem: ['_cart.0._lineitems.0._element', _jsonMapper2.default.map({
                adjustment: ['_appliedpromotions.0._element', _jsonMapper2.default.map({
                    code: _jsonMapper2.default.helpers.def(''),
                    currency: _jsonMapper2.default.helpers.def('USD'),
                    description: 'display-description',
                    usage: _jsonMapper2.default.helpers.def('Discount')
                })],
                currency: '_price.0.purchase-price.0.currency',
                freeGift: _jsonMapper2.default.helpers.def('false'),
                lineItemId: 'self.uri',
                lineItemPrice: '_total.0.cost.0.display',
                adjustedPrice: '_total.0.cost.0.display',
                partNumber: '_item.0._code.0.code',
                productId: '_item.0._code.0.links.0.uri',
                quantity: 'quantity',
                unitPrice: '_price.0.purchase-price.0.display',
                unitQuantity: _jsonMapper2.default.helpers.def('1')
            })],
            shipping: {
                firstName: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.name.family-name',
                lastName: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.name.given-name',
                middleName: _jsonMapper2.default.helpers.def(' '),
                email1: _jsonMapper2.default.helpers.def(' '),
                addressId: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.self.uri',
                addressLine: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.street-address',
                city: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.locality',
                state: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.region',
                country: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.country-name',
                postalCode: '_deliveries.0._element.0._destinationinfo.0._selector.0._chosen.0._description.0.address.postal-code',
                carrier: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.carrier',
                expectedShipDate: _jsonMapper2.default.helpers.def(' '),
                shipModeCode: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.name',
                shipModeDescription: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.display-name',
                shipModeId: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.self.uri'
            },
            paymentInstruction: ['_paymentmethodinfo.0._paymentmethod', _jsonMapper2.default.map({
                firstName: _jsonMapper2.default.helpers.def(''),
                lastName: _jsonMapper2.default.helpers.def(''),
                middleName: _jsonMapper2.default.helpers.def(''),
                email1: _jsonMapper2.default.helpers.def(''),
                addressId: _jsonMapper2.default.helpers.def(''),
                addressLine: _jsonMapper2.default.helpers.def(''),
                city: _jsonMapper2.default.helpers.def(''),
                state: _jsonMapper2.default.helpers.def(''),
                country: _jsonMapper2.default.helpers.def(''),
                postalCode: _jsonMapper2.default.helpers.def(''),
                payMethodId: 'self.uri',
                piId: 'token',
                piAmount: _jsonMapper2.default.helpers.def(''),
                piCurrency: _jsonMapper2.default.helpers.def(''),
                piDescription: 'display-name'
            })],
            placedDate: _jsonMapper2.default.helpers.def(''),
            recordSetComplete: _jsonMapper2.default.helpers.def(''),
            recordSetCount: _jsonMapper2.default.helpers.def(''),
            recordSetStartNumber: _jsonMapper2.default.helpers.def(''),
            recordSetTotal: _jsonMapper2.default.helpers.def(''),
            resourceId: _jsonMapper2.default.helpers.def(''),
            totalAdjustment: '_cart.0._discount.0.discount.0.display',
            totalAdjustmentCurrency: '_cart.0._discount.0.discount.0.currency',
            totalProductPrice: '_cart.0._total.0.cost.0.display',
            totalProductPriceCurrency: '_cart.0._total.0.cost.0.currency',
            totalSalesTax: '_tax.0.cost.0.display',
            totalSalesTaxCurrency: '_tax.0.cost.0.currency',
            totalShippingCharge: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.cost.0.display',
            totalShippingChargeCurrency: '_deliveries.0._element.0._shippingoptioninfo.0._selector.0._chosen.0._description.0.cost.0.currency',
            totalShippingTax: _jsonMapper2.default.helpers.def(''),
            totalShippingTaxCurrency: _jsonMapper2.default.helpers.def('')

        });

        var result = converter(body);
        var jsonObj = result;
        return jsonObj;
    },
    /**
      * Order Confirmation
     */
    mapOrderConfirmationJSON: function mapOrderConfirmationJSON(body) {
        var converter = _jsonMapper2.default.makeConverter({

            adjustment: ['_appliedpromotions.0._element', _jsonMapper2.default.map({
                code: _jsonMapper2.default.helpers.def(''),
                currency: _jsonMapper2.default.helpers.def('USD'),
                description: 'display-description',
                displayLevel: _jsonMapper2.default.helpers.def('Order'),
                usage: _jsonMapper2.default.helpers.def('Discount')
            })],
            grandTotal: 'monetary-total.0.display',
            grandTotalCurrency: 'monetary-total.0.currency',
            locked: _jsonMapper2.default.helpers.def(''),
            orderId: 'purchase-number',
            lineItem: ['_lineitems.0._element', _jsonMapper2.default.map({
                adjustment: ['_appliedpromotions.0._element', _jsonMapper2.default.map({
                    code: _jsonMapper2.default.helpers.def(''),
                    currency: _jsonMapper2.default.helpers.def('USD'),
                    description: 'display-description',
                    usage: _jsonMapper2.default.helpers.def('Discount')
                })],
                currency: 'line-extension-amount.0.currency',
                freeGift: _jsonMapper2.default.helpers.def('false'),
                lineItemId: 'self.uri',
                lineItemPrice: 'line-extension-amount.0.display',
                adjustedPrice: 'line-extension-amount.0.display',
                partNumber: _jsonMapper2.default.helpers.def(''),
                productId: _jsonMapper2.default.helpers.def(''),
                quantity: 'quantity',
                unitPrice: _jsonMapper2.default.helpers.def(''),
                unitQuantity: _jsonMapper2.default.helpers.def('1')
            })],
            shipping: {
                firstName: '_shipments.0._element.0._destination.0.name.family-name',
                lastName: '_shipments.0._element.0._destination.0.name.given-name',
                middleName: _jsonMapper2.default.helpers.def(' '),
                email1: _jsonMapper2.default.helpers.def(' '),
                addressId: '_shipments.0._element.0._destination.0.self.uri',
                addressLine: '_shipments.0._element.0._destination.0.address.street-address',
                city: '_shipments.0._element.0._destination.0.address.locality',
                state: '_shipments.0._element.0._destination.0.address.region',
                country: '_shipments.0._element.0._destination.0.address.country-name',
                postalCode: '_shipments.0._element.0._destination.0.address.postal-code',
                carrier: '_shipments.0._element.0._shippingoption.0.carrier',
                expectedShipDate: _jsonMapper2.default.helpers.def(' '),
                shipModeCode: '_shipments.0._element.0._shippingoption.0.name',
                shipModeDescription: '_shipments.0._element.0._shippingoption.0.display-name',
                shipModeId: '_shipments.0._element.0._shippingoption.0.self.uri'
            },
            paymentInstruction: [{
                firstName: '_billingaddress.0.name.family-name',
                lastName: '_billingaddress.0.name.given-name',
                middleName: _jsonMapper2.default.helpers.def(''),
                email1: _jsonMapper2.default.helpers.def(''),
                addressId: _jsonMapper2.default.helpers.def(''),
                addressLine: '_billingaddress.0.address.stree-address',
                city: '_billingaddress.0.address.locality',
                state: '_billingaddress.0.address.region',
                country: '_billingaddress.0.address.country-name',
                postalCode: '_billingaddress.0.address.postal-code',
                payMethodId: '_paymentmeans.0._element.0.self.uri',
                piId: _jsonMapper2.default.helpers.def(''),
                piAmount: _jsonMapper2.default.helpers.def(''),
                piCurrency: _jsonMapper2.default.helpers.def(''),
                piDescription: '_paymentmeans.0._element.0.display-name'
            }],
            placedDate: 'purchase-date.display-value',
            recordSetComplete: _jsonMapper2.default.helpers.def(''),
            recordSetCount: _jsonMapper2.default.helpers.def(''),
            recordSetStartNumber: _jsonMapper2.default.helpers.def(''),
            recordSetTotal: _jsonMapper2.default.helpers.def(''),
            resourceId: _jsonMapper2.default.helpers.def(''),
            totalAdjustment: '_discount.0.discount.0.display',
            totalAdjustmentCurrency: '_discount.0.discount.0.currency',
            totalProductPrice: _jsonMapper2.default.helpers.def(''),
            totalProductPriceCurrency: _jsonMapper2.default.helpers.def(''),
            totalSalesTax: '_shipments.0._element.0._tax.0.cost.0.display',
            totalSalesTaxCurrency: '_shipments.0._element.0._tax.0.cost.0.currency',
            totalShippingCharge: '_shipments.0._element.0._shippingoption.0.cost.0.display',
            totalShippingChargeCurrency: '_shipments.0._element.0._shippingoption.0.cost.0.currency',
            totalShippingTax: _jsonMapper2.default.helpers.def(''),
            totalShippingTaxCurrency: _jsonMapper2.default.helpers.def('')

        });

        var result = converter(body);
        var jsonObj = result;
        return jsonObj;
    }

};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _shipModeCtlr = __webpack_require__(37);

var _shipModeCtlr2 = _interopRequireDefault(_shipModeCtlr);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
 * Get Shipping Method Routes
 */
router.get('/getShippingMethods', function (req, res) {
  _shipModeCtlr2.default.getShippingMethods(req, res);
});
/**
 * update Shipping Method Routes
 */
router.get('/updateShippingMethod', function (req, res) {
  _shipModeCtlr2.default.updateShippingMethods(req, res);
});

exports.default = router;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _shipModeMapper = __webpack_require__(38);

var _shipModeMapper2 = _interopRequireDefault(_shipModeMapper);

var _request = __webpack_require__(15);

var _request2 = _interopRequireDefault(_request);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = _util2.default.getLogger();


module.exports = {

	/*Controller for getting the shipping methods in EP*/
	getShippingMethods: function getShippingMethods(req, res) {

		var token = req.cookies.access_token;
		var concatURL = _constants2.default.EP_CART + _constants2.default.EP_SHIPMODE_ZOOM;
		logger.info('Shipping methods EP url: ', _util2.default.constructUrl(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false));
		var messageData = {};
		var method = "GET";
		var requestCall = _util2.default.constructRequest(_util2.default.constructUrl(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false), method, messageData, token);

		(0, _requestPromise2.default)(requestCall).then(function (data) {
			var result = _shipModeMapper2.default.mapShipModeJSON(data);
			res.send({
				"success": true,
				"result": result
			});
		}).catch(function (error) {
			if (error.response) {
				if (undefined != error.response.body && null != error.response.body) {
					logger.error('errors in service to get Shipping methods in EP: ', error.response.body);
					res.send({ "success": false, "error": body.errors });
				}
			} else {
				logger.error('errors in service to get Shipping methods in EP: ', error);
				res.send({ "success": false, "error": error });
			}
		});
	},

	/*Controller for updating the shipping method in EP*/
	updateShippingMethods: function updateShippingMethods(req, res) {

		var token = req.cookies.access_token;
		var url = req.query.shipModeId + _constants2.default.EP_FOLLOW_LOCATION;
		logger.info('Update Shipping method EP url: ', _util2.default.constructUrl(_constants2.default.EP_HOSTNAME_CORTEX, url, false));
		var messageData = {};
		var method = "POST";
		var requestCall = _util2.default.constructRequest(_util2.default.constructUrl(_constants2.default.EP_HOSTNAME_CORTEX, url, false), method, messageData, token);
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			res.send({
				"success": true,
				"result": {
					'updateShipModeMsg': _constants2.default.EP_SHIPMODE_SELECTED
				}
			});
		}).catch(function (error) {
			if (error.response.body) {
				logger.error('errors in service to get Shipping methods in EP: ', error.response.body);
				res.send({ "success": false, "error": error.response.body });
			} else {
				logger.error('errors in service to get Shipping methods in EP: ', error);
				res.send({ "success": false, "error": error });
			}
		});
	}

};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

	/*json Mapper for mapping the shipModes in EP*/
	mapShipModeJSON: function mapShipModeJSON(body) {

		var converter = _jsonMapper2.default.makeConverter({

			usableShippingMode: ['_order.0._deliveries.0._element.0._shippingoptioninfo.0._selector', _jsonMapper2.default.map({

				choice: ['_choice', _jsonMapper2.default.map({
					carrier: '_description.0.carrier',
					displayName: '_description.0.display-name',
					name: '_description.0.name',
					shipModeId: '_selectaction.0.self.uri',
					cost: '_description.0.cost'
				})],

				chosen: ['_chosen', _jsonMapper2.default.map({
					carrier: '_description.0.carrier',
					displayName: '_description.0.display-name',
					name: '_description.0.name',
					shipModeId: '_selectaction.0.self.uri',
					cost: '_description.0.cost'
				})]

			})]
		});

		var result = converter(body);
		return result;
	}

};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _addressCtlr = __webpack_require__(40);

var _addressCtlr2 = _interopRequireDefault(_addressCtlr);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
 *  Add an address to a Checkout
 */
router.post('/addShippingAddress', function (req, res) {
	_addressCtlr2.default.addShippingAddress(req, res);
});

/**
*	Gets the shipping address associated with an order
*/
router.get('/getShippingAddresses', function (req, res) {
	_addressCtlr2.default.getShippingAddresses(req, res);
});

/***
*	Deletes a shipping address
*/
router.delete('/deleteShippingAddress', function (req, res) {
	_addressCtlr2.default.deleteShippingAddress(req, res);
});

/**
*	Updtes a shipping address
*/
router.put('/updateShippingAddress', function (req, res) {
	_addressCtlr2.default.updateShippingAddress(req, res);
});

/**
*	Selects a shipping address for an order
*/
router.post('/selectShippingAddress', function (req, res) {
	_addressCtlr2.default.selectShippingAddress(req, res);
});

/**
*	Gets the billing address associated with an order
*/
router.get('/getBillingAddresses', function (req, res) {
	_addressCtlr2.default.getBillingAddresses(req, res);
});

/**
*	Selects a billing address for an order
*/
router.post('/selectBillingAddress', function (req, res) {
	_addressCtlr2.default.selectBillingAddress(req, res);
});

exports.default = router;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _addressMapper = __webpack_require__(41);

var _addressMapper2 = _interopRequireDefault(_addressMapper);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

module.exports = {

  /*controller for adding shipping address in EP*/
  addShippingAddress: function addShippingAddress(req, res) {

    var token = req.cookies.access_token;
    var messageData = {
      "address": {
        "country-name": req.body.country,
        "extended-address": req.body.addressLine[1],
        "locality": req.body.city,
        "postal-code": req.body.zipCode,
        "region": req.body.state,
        "street-address": req.body.addressLine[0]
      },
      "name": {
        "family-name": req.body.lastName,
        "given-name": req.body.firstName
      }
    };
    var addShippingAddressURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, _constants2.default.EP_ADD_SHIPPING_ADDRESS, false);
    logger.info('addShippingAddress url: ', addShippingAddressURL);
    var method = 'POST';
    var requestCall = (0, _util.constructRequest)(addShippingAddressURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _addressMapper2.default.addShippingAddressJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to addShippingAddress in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to addShippingAddress in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /*Controller for getting all the shipping address in EP*/
  getShippingAddresses: function getShippingAddresses(req, res) {

    var token = req.cookies.access_token;
    var messageData = {};

    var conCatUrl = req.query.orderId + _constants2.default.EP_GET_SHIPPING_ADDRESS_ZOOM;
    var getShippingAddressesURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, conCatUrl, false);
    logger.info('getShippingAddresses url: ', getShippingAddressesURL);
    var method = 'GET';
    var requestCall = (0, _util.constructRequest)(getShippingAddressesURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _addressMapper2.default.getShippingAddressesJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to get ShippingAddress in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to get ShippingAddress in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /*Controller for deleting shipping address in EP*/
  deleteShippingAddress: function deleteShippingAddress(req, res) {

    var token = req.cookies.access_token;
    var messageData = {};
    var uri = req.body.addressId;
    var deleteShippingAddressURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, uri, false);
    logger.info('deleteShippingAddress url: ', deleteShippingAddressURL);
    var method = 'DELETE';
    var requestCall = (0, _util.constructRequest)(deleteShippingAddressURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _addressMapper2.default.deleteShippingAddressJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to delete address in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors service to delete address in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /*Controller for updating shipping address in EP*/
  updateShippingAddress: function updateShippingAddress(req, res) {

    var token = req.cookies.access_token;
    var messageData = {
      "address": {
        "country-name": req.body.country,
        "extended-address": req.body.addressLine[1],
        "locality": req.body.city,
        "postal-code": req.body.zipCode,
        "region": req.body.state,
        "street-address": req.body.addressLine[0]
      },
      "name": {
        "family-name": req.body.lastName,
        "given-name": req.body.firstName
      }
    };
    var uri = req.body.addressId;
    var updateShippingAddressURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, uri, false);
    logger.info('updateShippingAddress url', updateShippingAddressURL);
    var method = 'PUT';
    var requestCall = (0, _util.constructRequest)(updateShippingAddressURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _addressMapper2.default.updateShippingAddressJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to update address in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to update address in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /*Controller for selecting the shipping address in EP*/
  selectShippingAddress: function selectShippingAddress(req, res) {

    var token = req.cookies.access_token;
    var messageData = {};
    var addressId = req.body.addressId;

    var conCatUrl = req.body.orderId + _constants2.default.EP_GET_SHIPPING_ADDRESS_SELECTOR_ZOOM;

    var selectShippingAddressURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, conCatUrl, false);
    logger.info('selectShippingAddress url ', selectShippingAddressURL);
    var method = 'GET';
    var requestCall = (0, _util.constructRequest)(selectShippingAddressURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var uri = data._element[0]._destinationinfo[0]._selector[0].self.uri;
      var concatURL = uri + addressId + _constants2.default.EP_FOLLOW_LOCATION;
      var shippingAddressSelectURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concatURL, false);
      logger.info('shipping address select post url ', shippingAddressSelectURL);

      var messageData = {};
      var secondRequestCall = (0, _util.constructRequest)(shippingAddressSelectURL, "POST", messageData, token);
      return (0, _requestPromise2.default)(secondRequestCall).then(function (data) {
        var result = _addressMapper2.default.selectShippingAddressJSON();
        res.send({
          "success": true,
          "result": result
        });
      }).catch(function (error) {
        if (error.response.body) {
          logger.error('errors in service while selecting shipping address in EP: ', error.response.body);
          res.send({ "success": false, "error": error.response.body });
        } else {
          logger.error('errors in service while selecting shipping address in EP: ', error);
          res.send({ "success": false, "error": error });
        }
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to get shipping address selector in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to get shipping address selector in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /*Controller for getting the billing address in EP*/
  getBillingAddresses: function getBillingAddresses(req, res) {

    var token = req.cookies.access_token;
    var messageData = {};

    var conCatUrl = req.query.orderId + _constants2.default.EP_GET_BILLING_ADDRESS_ZOOM;
    var getBillingAddressURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, conCatUrl, false);
    logger.info('getBillingAddress url: ', getBillingAddressURL);
    var method = 'GET';
    var requestCall = (0, _util.constructRequest)(getBillingAddressURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      logger.info("data", data);
      var result = _addressMapper2.default.getBillingAddressesJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to get BillingAddress in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to get getBillingAddress in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /*Controller for selecting the Billing address in EP*/
  selectBillingAddress: function selectBillingAddress(req, res) {

    var token = req.cookies.access_token;
    var messageData = {};
    var addressId = req.body.addressId;

    var conCatUrl = req.body.orderId + _constants2.default.EP_GET_BILLING_ADDRESS_SELECTOR + req.body.addressId + _constants2.default.EP_FOLLOW_LOCATION;;

    var selectBillingAddressURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, conCatUrl, false);

    logger.info('selectBillingAddressURL url: ', selectBillingAddressURL);
    var method = 'POST';
    var requestCall = (0, _util.constructRequest)(selectBillingAddressURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _addressMapper2.default.selectBillingAddressJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to select the BillingAddress in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to select the BillingAddress in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  }

};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  /* Normal Response for Adding address this needs to be refine */
  addShippingAddressJSON: function addShippingAddressJSON() {
    var jsonResponse = { userId: "",
      addShippingAddressMsg: _constants2.default.EP_ADDRESS_ADDED
    };
    return JSON.parse(JSON.stringify(jsonResponse));
  },

  /* Forming shipping address JSON */
  getShippingAddressesJSON: function getShippingAddressesJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      contact: ['_element.0._destinationinfo.0._selector', _jsonMapper2.default.map({
        address: ['_choice', _jsonMapper2.default.map({
          addressId: '_description.0.self.uri',
          addressLine: {
            addressLine1: '_description.0.address.street-address',
            addressLine2: '_description.0.address.extended-address'
          },
          addressType: _jsonMapper2.default.helpers.def('ShippingAndBilling'),
          country: '_description.0.address.country-name',
          city: '_description.0.address.locality',
          firstName: '_description.0.name.given-name',
          lastName: '_description.0.name.family-name',
          nickName: '_description.0.name.given-name',
          zipCode: '_description.0.address.postal-code',
          state: '_description.0.address.region',
          email1: _jsonMapper2.default.helpers.def(' '),
          phone1: _jsonMapper2.default.helpers.def(' '),
          primary: _jsonMapper2.default.helpers.def('false')
        })],
        defaultAddress: ['_chosen', _jsonMapper2.default.map({
          addressId: '_description.0.self.uri',
          addressLine: {
            addressLine1: '_description.0.address.street-address',
            addressLine2: '_description.0.address.extended-address'
          },
          addressType: _jsonMapper2.default.helpers.def('ShippingAndBilling'),
          country: '_description.0.address.country-name',
          city: '_description.0.address.locality',
          firstName: '_description.0.name.given-name',
          lastName: '_description.0.name.family-name',
          nickName: '_description.0.name.given-name',
          zipCode: '_description.0.address.postal-code',
          state: '_description.0.address.region',
          email1: _jsonMapper2.default.helpers.def(' '),
          phone1: _jsonMapper2.default.helpers.def(' '),
          primary: _jsonMapper2.default.helpers.def('true')
        })],
        userId: _jsonMapper2.default.helpers.def(' ')
      })]
    });
    var result = converter(body);
    return result;
  },

  /*Normal response for deleting address in EP*/
  deleteShippingAddressJSON: function deleteShippingAddressJSON(body) {
    var jsonResponse = {
      deleteShippingAddressMsg: _constants2.default.EP_ADDRESS_DELETED
    };
    return JSON.parse(JSON.stringify(jsonResponse));
  },

  /*Normal response for updating address in EP*/
  updateShippingAddressJSON: function updateShippingAddressJSON(body) {
    var jsonResponse = {
      updateShippingAddressMsg: _constants2.default.EP_ADDRESS_UPDATED
    };
    return JSON.parse(JSON.stringify(jsonResponse));
  },

  /*Normal response for selecting address in EP*/
  selectShippingAddressJSON: function selectShippingAddressJSON(body) {
    var jsonResponse = {
      selectShippingAddressMsg: _constants2.default.EP_ADDRESS_SELECTED
    };
    return JSON.parse(JSON.stringify(jsonResponse));
  },

  /* Forming Billing Address JSON*/
  getBillingAddressesJSON: function getBillingAddressesJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      contact: ['_selector', _jsonMapper2.default.map({
        address: ['_choice', _jsonMapper2.default.map({
          addressId: '_description.0.self.uri',
          addressLine: {
            addressLine1: '_description.0.address.street-address',
            addressLine2: '_description.0.address.extended-address'
          },
          addressType: _jsonMapper2.default.helpers.def('ShippingAndBilling'),
          country: '_description.0.address.country-name',
          city: '_description.0.address.locality',
          firstName: '_description.0.name.given-name',
          lastName: '_description.0.name.family-name',
          nickName: '_description.0.name.given-name',
          zipCode: '_description.0.address.postal-code',
          state: '_description.0.address.region',
          email1: _jsonMapper2.default.helpers.def(' '),
          phone1: _jsonMapper2.default.helpers.def(' '),
          primary: _jsonMapper2.default.helpers.def('false')
        })],
        defaultAddress: ['_chosen', _jsonMapper2.default.map({
          addressId: '_description.0.self.uri',
          addressLine: {
            addressLine1: '_description.0.address.street-address',
            addressLine2: '_description.0.address.extended-address'
          },
          addressType: _jsonMapper2.default.helpers.def('ShippingAndBilling'),
          country: '_description.0.address.country-name',
          city: '_description.0.address.locality',
          firstName: '_description.0.name.given-name',
          lastName: '_description.0.name.family-name',
          nickName: '_description.0.name.given-name',
          zipCode: '_description.0.address.postal-code',
          state: '_description.0.address.region',
          email1: _jsonMapper2.default.helpers.def(' '),
          phone1: _jsonMapper2.default.helpers.def(' '),
          primary: _jsonMapper2.default.helpers.def('true')
        })],
        userId: _jsonMapper2.default.helpers.def(' ')
      })]
    });
    var result = converter(body);
    return result;
  },

  /*Normal JSON response for selecting billing address*/
  selectBillingAddressJSON: function selectBillingAddressJSON(body) {
    var jsonResponse = {
      selectBillingAddressMsg: _constants2.default.EP_ADDRESS_SELECTED
    };
    return JSON.parse(JSON.stringify(jsonResponse));
  }

};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _wishListCtlr = __webpack_require__(43);

var _wishListCtlr2 = _interopRequireDefault(_wishListCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
 *  Add a Product to WishList
 */
router.post('/addToWishList', function (req, res) {
  _wishListCtlr2.default.addToWishList(req, res);
});

/**
 *   Get Wishlist
 */
router.get('/getWishList', function (req, res) {
  _wishListCtlr2.default.getWishList(req, res);
});

/* 
 * router for deleteFromWishList 
 */

router.delete('/deleteFromWishList', function (req, res) {
  _wishListCtlr2.default.deleteFromWishList(req, res);
});
/* 
 * router for addItemToShoppingCartFromWishList 
 */

router.post('/moveWishListItemToCart', function (req, res) {
  _wishListCtlr2.default.moveWishListItemToCart(req, res);
});

exports.default = router;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(6);

var _wishListMapper = __webpack_require__(44);

var _wishListMapper2 = _interopRequireDefault(_wishListMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /**
     * Controller for adding Product to WishList in EP.
     * Method : POST
     * 
     */

    addToWishList: function addToWishList(req, res) {
        var token = req.cookies.access_token;
        var messageData = {};
        var concattUrl = _constants2.default.EP_WHISHLIST + req.body.productId + _constants2.default.EP_FORM + _constants2.default.EP_FOLLOW_LOCATION;
        var addToWishListUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
        logger.info('Add to WishList URL ', addToWishListUrl);
        var method = 'POST';
        var requestCall = (0, _util.constructRequest)(addToWishListUrl, method, JSON.parse(JSON.stringify(messageData)), token);
        (0, _requestPromise2.default)(requestCall).then(function (data) {
            res.send({
                "success": true
            });
        }).catch(function (error) {
            if (error.response.body) {
                logger.error('errors in service to POST WishList in EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to POST WishList in EP: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    },
    /**
     * Get WishList  
     * Method: GET
     */

    getWishList: function getWishList(req, res) {
        var token = req.cookies.access_token;
        var messageData = {};
        var concattUrl = _constants2.default.EP_WHISHLIST_URL + _constants2.default.EP_WHISHLIST_CART_ZOOM;
        var defautWishListURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
        logger.info('Get wishList form url', defautWishListURL);
        var method = 'GET';
        var requestCall = (0, _util.constructRequest)(defautWishListURL, method, messageData, token);
        (0, _requestPromise2.default)(requestCall).then(function (results) {
            var result = _wishListMapper2.default.getWishListJSON(JSON.parse(JSON.stringify(results)));
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.response.body) {
                logger.error('errors in service to getWishList in EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getWishList in EP: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    },

    /**
     * Delete WishList  
     * Method: DELETE
     */

    deleteFromWishList: function deleteFromWishList(req, res) {
        var token = req.cookies.access_token;
        var messageData = {};
        var wishListId = void 0;
        if (req.body.itemList) {
            this.deleteItemsFromWishList(req.body.itemList, token, messageData, res);
            logger.info("Delete Items in WishList");
        } else {
            var _wishListId = req.body.wishListId;
            this.deleteAllItemsFromWishList(_wishListId, token, messageData, res);
            logger.info("Delete All Items in WishList");
        }
    },

    /**
     *  Method : Delete
     *  Delete  Items from WishList
     */
    deleteItemsFromWishList: function deleteItemsFromWishList(itemList, token, messageData, res) {
        var requests = [];
        var method = "DELETE";
        for (var i = 0; i < itemList.length; i++) {
            var concattUrl = itemList[i].wishListItemId;
            var deleteWishListItemURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
            logger.info("Delete Item from WishList UrL " + deleteWishListItemURL);
            requests.push(this.getDeleteItemRequestPromise(deleteWishListItemURL, token));
        }
        _bluebird2.default.all(requests).then(function (results) {
            res.send({
                "success": true
            });
        }, function (err) {
            logger.error('errors in service hit to deleteItems From WishList service' + err);
            res.send({ "success": false, "error": err });
        });
    },

    /**
     *  DeleteItemRequest Promise Multiple Requests
     */

    getDeleteItemRequestPromise: function getDeleteItemRequestPromise(deleteWishListItemURL, token) {
        return new _bluebird2.default(function (resolve, reject) {
            var messageData = {};
            var requestCall = (0, _util.constructRequest)(deleteWishListItemURL, "DELETE", messageData, token);
            (0, _requestPromise2.default)(requestCall).then(function (data) {
                return resolve({ success: true, body: data });
            }).catch(function (error) {
                logger.error('errors in service to delete item in EP:', error);
                return resolve({ success: false, error: error });
            });
        });
    },

    /**
     *  Method : Delete
     *  Delete  Items from WishList
     */
    deleteAllItemsFromWishList: function deleteAllItemsFromWishList(url, token, messageData, res) {

        var concattUrl = url;
        var deleteAllItemURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
        logger.info('DELETE All items from WishList', deleteAllItemURL);
        var method = 'DELETE';
        var requestCall = (0, _util.constructRequest)(deleteAllItemURL, method, messageData, token);
        (0, _requestPromise2.default)(requestCall).then(function (results) {
            res.send({
                "success": true
            });
        }).catch(function (error) {
            if (error.response.body) {
                logger.error('errors in service to delete All item in EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to delete All item in EP: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    },

    /**
    * Controller for Moving Item to Cart
    * Method : POST
    * 
    */

    moveWishListItemToCart: function moveWishListItemToCart(req, res) {
        var token = req.cookies.access_token;
        var messageData = { "quantity": req.body.quantity };
        var wishListItemId = req.body.wishListItemId;
        var concattUrl = wishListItemId + _constants2.default.EP_CARTS + _constants2.default.EP_FORM + _constants2.default.EP_FOLLOW_LOCATION;
        var moveItemToCartURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
        logger.info('Move Item to WishList', moveItemToCartURL);
        var method = 'POST';
        var requestCall = (0, _util.constructRequest)(moveItemToCartURL, method, JSON.parse(JSON.stringify(messageData)), token);
        (0, _requestPromise2.default)(requestCall).then(function (data) {
            var result = _wishListMapper2.default.getMoveWishListJSON(JSON.parse(JSON.stringify(data)));
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.response.body) {
                logger.error('errors in service to Move WishList to Cart EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to Move WishList to Cart EP: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    }

};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(6);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {
    /**
     * json mapper for mapping WishList
     */
    getWishListJSON: function getWishListJSON(body) {
        var result = "";
        //Condition for checking the empty Body
        if (body._lineitems) {
            var converter = _jsonMapper2.default.makeConverter({
                wishListId: 'links.0.uri',
                itemList: ['_lineitems.0._element', _jsonMapper2.default.map({
                    wishListItemId: 'self.uri',
                    partNumber: '_item.0._code.0.code',
                    productId: '_item.0._code.0.links.0.uri'
                })],
                recordSetCount: ['_lineitems.0._element', function (arr) {
                    return arr.length;
                }],
                recordSetStartNumber: _jsonMapper2.default.helpers.def(''),
                recordSetTotal: _jsonMapper2.default.helpers.def('')
            });
            result = converter(body);
        } else {
            var _converter = _jsonMapper2.default.makeConverter({
                wishListId: 'links.0.uri',
                recordSetCount: _jsonMapper2.default.helpers.def('0'),
                recordSetStartNumber: _jsonMapper2.default.helpers.def(''),
                recordSetTotal: _jsonMapper2.default.helpers.def('0')
            });
            result = _converter(body);
        }

        return result;
    },
    /**
     * json mapper for mapping WishList
     */
    getMoveWishListJSON: function getMoveWishListJSON(body) {
        var jsonResponse = {
            orderItem: [{
                orderItemId: body.self.uri
            }]
        };
        return JSON.parse(JSON.stringify(jsonResponse));
    }

};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _promotionsCtlr = __webpack_require__(46);

var _promotionsCtlr2 = _interopRequireDefault(_promotionsCtlr);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 *  Route for Apply promotion
 */

router.post('/apply', function (req, res) {
  _promotionsCtlr2.default.apply(req, res);
});

/*
*	Route to get promotion details at cart
*/

router.get('/getPromotionsAtCart', function (req, res) {
  _promotionsCtlr2.default.getPromotionsAtCart(req, res);
});

/**
*	Route to get all promotion applied to the cart
*/
// router.get('/getPromotionsAtCart',function(req,res){
// 	promotions.getPromotionsAtCart(constants.EP_ACCESS_TOKEN,req,res);
// });


/**
*	Route to get coupon promotion applied to the cart
*/
router.get('/getPromoCodePromotionsAtCart', function (req, res) {
  _promotionsCtlr2.default.getPromoCodePromotionsAtCart(req, res);
});

/**
*	Route to delete promo code
*/
router.delete('/delete', function (req, res) {
  _promotionsCtlr2.default.delete(req, res);
});

exports.default = router;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _promotionsMapper = __webpack_require__(47);

var _promotionsMapper2 = _interopRequireDefault(_promotionsMapper);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*Controller for applying coupon promotions in EP*/
    apply: function apply(req, res) {

        var token = req.cookies.access_token;

        var messageData = {
            "code": req.body.promoCode
        };
        var orderId = req.body.orderId;
        var conCatUrl = _constants2.default.EP_APPLY_PROMO + orderId + _constants2.default.EP_FOLLOW_LOCATION;
        var applyPromoURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, conCatUrl, false);

        logger.info('applyPromo url: ', applyPromoURL);
        var method = 'POST';
        var requestCall = (0, _util.constructRequest)(applyPromoURL, method, messageData, token);
        (0, _requestPromise2.default)(requestCall).then(function (data) {
            res.send({
                "success": true,
                "result": {
                    promoCode: data.code,
                    orderId: orderId
                }
            });
        }).catch(function (error) {
            if (error.response.body) {
                logger.error('errors in service to apply promo code in EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to apply promo code in EP: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    },

    /*Controller for getting promotions details at cart*/

    // getPromotionsAtCart: function(token,req,res){

    //     let messageData = {};
    //     let orderId = req.query.orderId;
    //     let conCatUrl = constants.EP_DEFAULT_CART + constants.EP_GET_PROMO_ZOOM;
    //     let getPromoURL = constructUrl(constants.EP_HOSTNAME,conCatUrl,false);

    //     logger.info('applyPromo url: ',  getPromoURL);
    //     let method ='GET';
    //     let requestCall = constructRequest(getPromoURL,method,messageData,token)
    //     requestPromise(requestCall).then(function (data) {
    //           let result = promotionsMapper.mapPromotionsResultJSON(data,orderId);
    //           res.send({
    //             "success": true ,
    //             "result": result
    //         });   
    //     }).catch(function (error) {
    //         if(error.response.body){
    //           logger.error('errors in service to get promotion details in EP: ', error.response.body);
    //           res.send({ "success": false, "error": error.response.body }); 
    //         }else{
    //           logger.error('errors in service to get promotion details in EP: ', error);
    //           res.send({ "success": false, "error": error});
    //         }
    //     });

    // },

    /*Controller for getting coupon promotions applied to the cart*/

    getPromoCodePromotionsAtCart: function getPromoCodePromotionsAtCart(req, res) {

        var token = req.cookies.access_token;
        var messageData = {};
        var conCatUrl = _constants2.default.EP_DEFAULT_CART + _constants2.default.EP_GET_COUPON_PROMO_ZOOM;
        var getPromoCodePromoURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, conCatUrl, false);

        logger.info('getPromoCodePromo url: ', getPromoCodePromoURL);
        var method = 'GET';
        var requestCall = (0, _util.constructRequest)(getPromoCodePromoURL, method, messageData, token);
        (0, _requestPromise2.default)(requestCall).then(function (data) {
            var result = _promotionsMapper2.default.mapPromoCodePromotionsResultJSON(data);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.response.body) {
                logger.error('errors in service to get promo code promotion details in EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to get promo code promotion details in EP: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    },

    delete: function _delete(req, res) {

        var token = req.cookies.access_token;
        var messageData = {};
        var promotionId = req.body.promotionId;
        var promoCode = req.body.promoCode;
        var deletePromoCodeURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, promotionId, false);

        logger.info('deletePromoCode url: ', deletePromoCodeURL);
        var method = 'DELETE';
        var requestCall = (0, _util.constructRequest)(deletePromoCodeURL, method, messageData, token);
        (0, _requestPromise2.default)(requestCall).then(function (data) {
            res.send({
                "success": true,
                "result": {
                    "orderId": '',
                    "promoCode": promoCode
                }
            });
        }).catch(function (error) {
            if (error.response.body) {
                logger.error('errors in service to delete promo code in EP: ', error.response.body);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to delete promo code in EP: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    }

};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    /**
    *   JSON Mapper for mapping responses for applied promotions
    */
    // mapPromotionsResultJSON: function(body){
    //     let converter = JM.makeConverter({
    //         promotions: ['_appliedpromotions.0._element',JM.map({
    //             name: 'name',
    //             description: {
    //                 longDescription: 'display-description',
    //                 shortDescription: 'display-name'
    //             }
    //         })],
    //         orderId: JM.helpers.def('')
    //     });

    //     let result = converter(body);
    //     return result;
    // },


    /*JSON mapper for getting promotion details of an order*/
    mapPromoCodePromotionsResultJSON: function mapPromoCodePromotionsResultJSON(body) {

        var converter = _jsonMapper2.default.makeConverter({
            promotions: ['_order.0._couponinfo.0._coupon', _jsonMapper2.default.map({

                name: '_appliedpromotions.0._element.0.name',
                description: {
                    longDescription: '_appliedpromotions.0._element.0.display-description',
                    shortDescription: '_appliedpromotions.0._element.0.display-name'
                },
                code: 'code',
                promotionId: 'self.uri'
            })],
            orderId: _jsonMapper2.default.helpers.def('')

        });

        var result = converter(body);
        return result;
    }

};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _registerCtlr = __webpack_require__(49);

var _registerCtlr2 = _interopRequireDefault(_registerCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.use(_bodyParser2.default.json());

/**
* router for registering a user
*/
router.post('/register', function (req, res) {
	_registerCtlr2.default.register(req, res);
});

exports.default = router;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(6);

var _loginCtlr = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

module.exports = {

        /*Controller for registering a new user in EP*/
        register: function register(req, res) {

                var requestFunction = function requestFunction(token) {
                        return new Promise(function (resolve, reject) {
                                var messageData = {
                                        "family-name": req.body.lastName,
                                        "given-name": req.body.firstName,
                                        "password": req.body.logonPassword,
                                        "username": req.body.logonId
                                };

                                var registerURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, _constants2.default.EP_REGISTER, false);
                                logger.info('register url', registerURL);
                                var method = 'POST';

                                var requestCall = (0, _util.constructRequest)(registerURL, method, messageData, token);

                                (0, _requestPromise2.default)(requestCall).then(function (result) {
                                        res.send({
                                                "success": true
                                        });
                                }).catch(function (error) {
                                        if (error.response.body) {
                                                logger.error('errors in service to logout in EP: ', error.response.body);
                                                res.send({ "success": false, "error": error.response.body });
                                        } else {
                                                logger.error('errors in service to logout in EP: ', error);
                                                res.send({ "success": false, "error": error });
                                        }
                                });
                        });
                };

                /*EP would always check if user is authenticated - if not authenticated - get authenticated and then call the function*/
                (0, _loginCtlr.checkAndGetAuthToken)(req, res, function (access_token) {
                        requestFunction(access_token);
                });
        }

};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _userProfileCtlr = __webpack_require__(51);

var _userProfileCtlr2 = _interopRequireDefault(_userProfileCtlr);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/**
*	Gets the address associated with an user
*/
router.get('/getAddressBook', function (req, res) {
  _userProfileCtlr2.default.getAddressBook(req, res);
});

/*
 * router for getting Order History
 */

router.get('/getOrderHistory', function (req, res) {
  _userProfileCtlr2.default.getOrderHistory(req, res);
});

/*
 * router for getting Personal Information
 */

router.get('/getPersonalInformation', function (req, res) {
  _userProfileCtlr2.default.getPersonalInformation(req, res);
});

exports.default = router;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(6);

var _userProfileMapper = __webpack_require__(52);

var _userProfileMapper2 = _interopRequireDefault(_userProfileMapper);

var _loginCtlr = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

module.exports = {

  /*Controller for getting address book in EP*/
  getAddressBook: function getAddressBook(req, res) {

    var messageData = {};
    var token = req.cookies.access_token;
    var conCatUrl = _constants2.default.EP_ADDRESS_BOOK + _constants2.default.EP_ADDRESS_BOOK_ZOOM;
    var getAddressBookURL = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME, conCatUrl, false);
    logger.info('getAddressBook url: ', getAddressBookURL);
    var method = 'GET';
    var requestCall = (0, _util.constructRequest)(getAddressBookURL, method, messageData, token);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _userProfileMapper2.default.getAddressBookJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.response.body) {
        logger.error('errors in service to get AddressBook in EP: ', error.response.body);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to get AddressBook in EP: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  /**
   * Controller for getting Order History in EP.
   * Method : GET
   *
   */

  getOrderHistory: function getOrderHistory(req, res) {
    var token = req.cookies.access_token;
    var messageData = {};
    var concattUrl = _constants2.default.EP_DEFAULT_PROFILE + _constants2.default.EP_GET_ORDER_HISTORY_ZOOM;
    var getOrderHistoryUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concattUrl, false);
    logger.info('getOrderHistoryUrl URL ', getOrderHistoryUrl);
    var method = 'GET';
    var requestCall = (0, _util.constructRequest)(getOrderHistoryUrl, method, JSON.parse(JSON.stringify(messageData)), token);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _userProfileMapper2.default.getOrderHistoryJSON(JSON.parse(JSON.stringify(data)));
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      logger.error('errors in service to get Order History in EP: ', error);
      res.send({ "success": false, "error": error });
    });
  },

  /*
   * Method to get My Account - Personal Information of an user in EP
   * Request params : userId
   * Request Method : GET
   */

  getPersonalInformation: function getPersonalInformation(req, res) {
    logger.info("inside getPersonalInformation");
    var token = req.cookies.access_token;
    var messageData = {};
    var concatPersonalInformationUrl = _constants2.default.EP_DEFAULT_PROFILE + _constants2.default.EP_GET_PERSONAL_INFO_ZOOM;
    var getPersonalInformationDetailsUrl = (0, _util.constructUrl)(_constants2.default.EP_HOSTNAME_CORTEX, concatPersonalInformationUrl, false);
    var methodForPersonalInformation = 'GET';
    logger.info("getPersonalInformationDetailsUrl: " + getPersonalInformationDetailsUrl);
    var requestCall = (0, _util.constructRequest)(getPersonalInformationDetailsUrl, methodForPersonalInformation, JSON.parse(JSON.stringify(messageData)), token);
    (0, _requestPromise2.default)(requestCall).then(function (body) {
      var result = _userProfileMapper2.default.personalInformationJSON(body);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (_typeof(error.statusCode) == String(undefined) || String(error.statusCode).startsWith("4")) {
        logger.error('errors in service to getPersonalInformation in EP: ', JSON.stringify(error));
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to getPersonalInformation in EP: ', JSON.stringify(error));
        res.send({ "success": false, "error": error.response.body.errors[0] });
      }
    });
  }

};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(6);

var _constants = __webpack_require__(2);

var _constants2 = _interopRequireDefault(_constants);

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {
  /**
   * json mapper for mapping Order History JSON
   */
  getOrderHistoryJSON: function getOrderHistoryJSON(body) {
    var result = "";
    //Condition for checking the empty Body
    if (body._purchases) {
      if (body._purchases[0]._element) {
        var converter = _jsonMapper2.default.makeConverter({
          orderHistoryJSON: ['_purchases.0._element', _jsonMapper2.default.map({
            Order: [{
              storeId: _jsonMapper2.default.helpers.def(_constants2.default.EP_STORE),
              orderId: 'purchase-number',
              grandTotal: 'monetary-total.0.amount',
              orderStatus: 'status',
              resourceId: 'self.href',
              placedDate: 'purchase-date.display-value',
              totalAdjustment: 'tax-total.amount',
              totalSalesTaxCurrency: 'tax-total.currency',
              adjustment: ['_discount', _jsonMapper2.default.map({
                amount: 'discount.0.amount',
                displayLevel: _jsonMapper2.default.helpers.def('Order'),
                usage: _jsonMapper2.default.helpers.def('Discount'),
                currency: 'discount.0.currency'
              })],
              totalShippingCharge: '',
              totalShippingChargeCurrency: '',
              totalProductPrice: '_lineitems.0._element.0._list.0._element.0.line-extension-total.0.amount',
              totalProductPriceCurrency: '_lineitems.0._element.0._list.0._element.0.line-extension-total.0.currency',
              grandTotalCurrency: 'monetary-total.0.currency'
            }]
          })]
        });
        result = converter(body);
      }
    }
    return result;
  },

  getAddressBookJSON: function getAddressBookJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      resourceId: 'self.uri',
      addressList: ['_element', _jsonMapper2.default.map({
        addressId: 'self.uri',
        addressLine: {
          addressLine1: 'address.street-address',
          addressLine2: 'address.extended-address'
        },
        addressType: _jsonMapper2.default.helpers.def('ShippingAndBilling'),
        country: 'address.country-name',
        city: 'address.locality',
        firstName: 'name.given-name',
        lastName: 'name.family-name',
        nickName: 'name.given-name',
        zipCode: 'address.postal-code',
        state: 'address.region',
        email1: _jsonMapper2.default.helpers.def(' '),
        phone1: _jsonMapper2.default.helpers.def(' '),
        primary: _jsonMapper2.default.helpers.def('false')
      })]
    });
    var result = converter(body);
    return result;
  },

  /*
   * JSON Mapper for generating response for personal information of an user
   */

  personalInformationJSON: function personalInformationJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({
      address: {
        addressId: '_addresses.0._billingaddresses.0._default.0.self.uri',
        addressLine1: '_addresses.0._billingaddresses.0._default.0.address.street-address',
        addressLine2: '_addresses.0._billingaddresses.0._default.0.address.extended-address',
        addressType: _jsonMapper2.default.helpers.def('SB'),
        city: '_addresses.0._billingaddresses.0._default.0.address.locality',
        country: '_addresses.0._billingaddresses.0._default.0.address.country-name',
        email1: '_emails.0._element.0.email',
        mobilePhone1Country: _jsonMapper2.default.helpers.def(''),
        phone1: _jsonMapper2.default.helpers.def(''),
        state: '_addresses.0._billingaddresses.0._default.0.address.region',
        zipCode: '_addresses.0._billingaddresses.0._default.0.address.postal-code'
      },
      userInfo: {
        demographics: {
          age: _jsonMapper2.default.helpers.def(''),
          dateOfBirth: _jsonMapper2.default.helpers.def(''),
          gender: _jsonMapper2.default.helpers.def('')
        },
        firstName: '_addresses.0._billingaddresses.0._default.0.name.family-name',
        lastName: '_addresses.0._billingaddresses.0._default.0.name.given-name',
        logonId: '_emails.0._element.0.email',
        middleName: _jsonMapper2.default.helpers.def(''),
        nickName: _jsonMapper2.default.helpers.def(''),
        personTitle: _jsonMapper2.default.helpers.def(''),
        userId: 'self.uri'
      }
    });
    var result = converter(body);
    return result;
  }

};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _pdpRoutes = __webpack_require__(54);

var _pdpRoutes2 = _interopRequireDefault(_pdpRoutes);

var _categoryRoutes = __webpack_require__(57);

var _categoryRoutes2 = _interopRequireDefault(_categoryRoutes);

var _shipModeRoutes = __webpack_require__(60);

var _shipModeRoutes2 = _interopRequireDefault(_shipModeRoutes);

var _searchRoutes = __webpack_require__(63);

var _searchRoutes2 = _interopRequireDefault(_searchRoutes);

var _addressRoutes = __webpack_require__(66);

var _addressRoutes2 = _interopRequireDefault(_addressRoutes);

var _cartRoutes = __webpack_require__(70);

var _cartRoutes2 = _interopRequireDefault(_cartRoutes);

var _promotionsRoutes = __webpack_require__(72);

var _promotionsRoutes2 = _interopRequireDefault(_promotionsRoutes);

var _wishListRoutes = __webpack_require__(75);

var _wishListRoutes2 = _interopRequireDefault(_wishListRoutes);

var _productByIdsRoutes = __webpack_require__(78);

var _productByIdsRoutes2 = _interopRequireDefault(_productByIdsRoutes);

var _loginRoute = __webpack_require__(80);

var _loginRoute2 = _interopRequireDefault(_loginRoute);

var _userProfileRoutes = __webpack_require__(81);

var _userProfileRoutes2 = _interopRequireDefault(_userProfileRoutes);

var _registrationRoutes = __webpack_require__(84);

var _registrationRoutes2 = _interopRequireDefault(_registrationRoutes);

var _myAccountRoutes = __webpack_require__(86);

var _myAccountRoutes2 = _interopRequireDefault(_myAccountRoutes);

var _paymentRoutes = __webpack_require__(88);

var _paymentRoutes2 = _interopRequireDefault(_paymentRoutes);

var _seoRoutes = __webpack_require__(91);

var _seoRoutes2 = _interopRequireDefault(_seoRoutes);

var _layoutRoutes = __webpack_require__(92);

var _layoutRoutes2 = _interopRequireDefault(_layoutRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/wcs/PDP', _pdpRoutes2.default);
app.use('/wcs/category', _categoryRoutes2.default);
app.use('/wcs/shipModes', _shipModeRoutes2.default);
app.use('/wcs/search', _searchRoutes2.default);
app.use('/wcs/address', _addressRoutes2.default);
app.use('/wcs/cart', _cartRoutes2.default);
app.use('/wcs/promotions', _promotionsRoutes2.default);
app.use('/wcs/wishlist', _wishListRoutes2.default);
app.use('/wcs/product', _productByIdsRoutes2.default);
app.use('/wcs/login', _loginRoute2.default);
app.use('/wcs/userProfile', _userProfileRoutes2.default);
app.use('/wcs/register', _registrationRoutes2.default);
app.use('/wcs/myAccount', _myAccountRoutes2.default);
app.use('/wcs/payment', _paymentRoutes2.default);
app.use('/wcs/seo', _seoRoutes2.default);
app.use('/wcs/page', _layoutRoutes2.default);

exports.default = app;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _pdpCtlr = __webpack_require__(55);

var _pdpCtlr2 = _interopRequireDefault(_pdpCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * Router for getProductDetails
 */

router.get('/getProductDetails', function (req, res) {
  _pdpCtlr2.default.getProductDetails(req, res);
});

/**
 * Router for getting recently viewed products
 */
router.get('/getRecentlyViewedProducts', function (req, res) {
  _pdpCtlr2.default.getRecentlyViewedProducts(req, res);
});

exports.default = router;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _pdpMapper = __webpack_require__(17);

var _pdpMapper2 = _interopRequireDefault(_pdpMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _seoCtlr = __webpack_require__(9);

var _seoCtlr2 = _interopRequireDefault(_seoCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

	/*
  * Method for getting product details
  * Request Method: GET
  * Request Params: productId
  */

	getProductDetails: function getProductDetails(req, res) {

		var keyWord = req.query.productId;
		var resourceName = req.query.resourceName;
		var result = void 0;
		var productId = void 0;

		logger.info("getProductDetails product KeyWord:" + keyWord);
		_seoCtlr2.default.getIdByKeyword(keyWord, 'ProductToken').then(function (value) {
			productId = value;
			var path = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PRODUCT_DETAILS_APPEND + productId + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
			var pdpURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, path, false);
			logger.info("getProductDetails url:" + pdpURL);
			var requestCall = (0, _util.constructRequestWithoutToken)(pdpURL, 'GET', '');
			(0, _requestPromise2.default)(requestCall).then(function (result) {
				return requestFunction(result);
			}).catch(function (error) {
				if (error.statusCode === 404 || error.statusCode === 500) {
					logger.error('error in service to getProductDetails in WCS: ', error);
					res.send({ "success": false, "error": error.response.body });
				} else {
					logger.error('errors in service to getProductDetails in WCS: ', error);
					res.send({ "success": false, "error": error.response.body.errors[0] });
				}
			});;

			var requestFunction = function requestFunction(data) {
				return new _bluebird2.default(function (resolve, reject) {
					if ((0, _util.isJson)(data)) data = JSON.parse(data);
					var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_INV_AVL + productId;
					var invAvlURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, false);
					var requestCall = (0, _util.constructRequestWithoutToken)(invAvlURL, 'GET', '');
					logger.info("request call = " + JSON.stringify(requestCall));
					if (data.catalogEntryView[0].catalogEntryTypeCode == "ProductBean") {
						if (resourceName == "pdp") {
							result = _pdpMapper2.default.mapPdpJSON(data, true);
						} else if (resourceName == "qv" || resourceName == "cart") {
							result = _pdpMapper2.default.mapQuickViewJSON(data, true);
						}
						res.send({
							"success": true,
							"result": result
						});
					} else {
						(0, _requestPromise2.default)(requestCall).then(function (body) {
							if ((0, _util.isJson)(body)) body = JSON.parse(body);
							if (resourceName == "pdp") {
								result = _pdpMapper2.default.mapPdpJSON(data, body);
							} else if (resourceName == "qv" || resourceName == "cart") {
								result = _pdpMapper2.default.mapQuickViewJSON(data, body);
							}
							res.send({
								"success": true,
								"result": result
							});
						}).catch(function (error) {
							if (error.statusCode === 404 || error.statusCode === 500) {
								logger.error('error in service to getProductDetails in WCS: ', error);
								res.send({ "success": false, "error": error.response.body });
							} else {
								logger.error('errors in service to getProductDetails in WCS: ', error);
								res.send({ "success": false, "error": error.response.body.errors[0] });
							}
						});
					}
				});
			};
		});
	},
	getRecentlyViewedProducts: function getRecentlyViewedProducts(req, res) {
		var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ESPOT_RECENTLY_VIEWED_PRODUCTD;
		var getRecentlyViewedProductsUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
		logger.info("Get recently viewed products URL" + getRecentlyViewedProductsUrl);
		var requestCall = (0, _util.constructRequestWithToken)(getRecentlyViewedProductsUrl, 'GET', '', (0, _util.getTokens)(req));
		(0, _requestPromise2.default)(requestCall).then(function (body) {
			var result = _pdpMapper2.default.mapRecentlyViewedProductsJSON(JSON.parse(body));
			res.send({
				"success": true,
				"result": result
			});
		}).catch(function (error) {
			if (error.statusCode === 404 || error.statusCode === 401) {
				logger.error('errors in service to getRecentlyViewedProducts in WCS: ', error);
				res.send({ "success": false, "error": error.response.body });
			} else {
				logger.error('errors in service to getRecentlyViewedProducts in WCS: ', error);
				res.send({ "success": false, "error": error.response.body.errors[0] });
			}
		});
	}
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _q = __webpack_require__(18);

var _q2 = _interopRequireDefault(_q);

var _util = __webpack_require__(5);

var _mongodb = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var database;
var logger = (0, _util.getLogger)();
/**
 * 
 * lets import the mongodb native drivers.
 *We need to work with "MongoClient" interface in order to connect to a mongodb server.
*/


/**
 * 
 *  Use connect method to connect to the Server
 *  Init method
 */
_mongodb.MongoClient.connect(_constants2.default.DB_URL, function (err, db) {
    if (err) {
        logger.info('Unable to connect to the mongoDB server. Error:', err);
    } else {
        logger.info('Connection established to: ' + _constants2.default.DB_URL);
        database = db;
    }
});

exports.default = {
    /* 
     * Method for getting the keywords from DB
     * Params: uniqueId, tokenType
     */
    getKeyword: function getKeyword(uniqueId, tokenType, langId, storeId) {

        var deferred = _q2.default.defer();
        var collection = database.collection('seo');
        collection.find({ "TOKENNAME": tokenType, "TOKENVALUE": parseInt(uniqueId), "STOREENT_ID": storeId, "STATUS": 1, "LANGUAGE_ID": langId }).toArray(function (err, result) {
            var response = {};
            logger.info(JSON.stringify(result));
            if (err) {
                logger.info(err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                logger.info('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },
    /* 
    * Method for getting the records from DB  Old Function
    * Params: Keyword
    */
    getRecords: function getRecords(keyword) {
        var deferred = _q2.default.defer();
        var collection = database.collection('seo');
        collection.find({ "URLKEYWORD": keyword }).toArray(function (err, result) {
            var response = {};
            logger.info(JSON.stringify(result));
            if (err) {
                logger.info('Errror in getRecords' + err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                logger.info('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },
    /* 
    * Method for getting the records from DB
    * Params:  keyWord, TokenName ,langId,storeId
    */
    getRecordsByKeyword: function getRecordsByKeyword(keyword, tokenName, langId, storeId) {
        var deferred = _q2.default.defer();
        var collection = database.collection('seo');
        collection.find({ "URLKEYWORD": keyword, "TOKENNAME": tokenName, "STOREENT_ID": parseInt(storeId), "STATUS": 1, "LANGUAGE_ID": langId }).toArray(function (err, result) {
            var response = {};
            logger.info(JSON.stringify(result));
            if (err) {
                logger.info('Errror in getRecordsByKeyword' + err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                logger.info('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },
    /* 
    * Method for getting the records from DB
    * Params: ProductId, TokenName ,langId,storeId
    */
    getRecordsByProductId: function getRecordsByProductId(productId, tokenName, langId, storeId) {
        var deferred = _q2.default.defer();
        var collection = database.collection('seo');
        collection.find({ "TOKENVALUE": parseInt(productId), "TOKENNAME": tokenName, "STOREENT_ID": parseInt(storeId), "STATUS": 1, "LANGUAGE_ID": langId }).toArray(function (err, result) {
            var response = {};
            logger.info(JSON.stringify(result));
            if (err) {
                logger.info('Errror in getRecordsByProductId' + err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                logger.info('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _categoryCtlr = __webpack_require__(58);

var _categoryCtlr2 = _interopRequireDefault(_categoryCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 * router for getTopCategories
 */

router.get('/getTopCategories', function (req, res) {

  _categoryCtlr2.default.getTopCategories(res);
});

/*
 * router for getCategory
 */

router.get('/getCategory', function (req, res) {

  _categoryCtlr2.default.getCategory(res, req);
});

/*
 * router for getSubCategories
 */

router.get('/getSubCategories', function (req, res) {

  _categoryCtlr2.default.getSubCategories(res, req);
});

/*
 * router for getProductsListForCategory
 */

router.get('/getProductsListForCategory', function (req, res) {
  _categoryCtlr2.default.getProductsListForCategory(req, res, req.query.identifier);
});

exports.default = router;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _categoryMapper = __webpack_require__(59);

var _categoryMapper2 = _interopRequireDefault(_categoryMapper);

var _seoCtlr = __webpack_require__(9);

var _seoCtlr2 = _interopRequireDefault(_seoCtlr);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

	/*
  * Method for getting Top Cateogries in WCS
  * Request Method: GET
  */

	getTopCategories: function getTopCategories(res) {

		var concatURL = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CATEGORY_TOP + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
		var messageData = {};
		var getTopCategoriesUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false);
		logger.info("getTopCategoriesUrl: " + getTopCategoriesUrl);
		var method = 'GET';
		var requestCall = (0, _util.constructRequestWithoutToken)(getTopCategoriesUrl, method, messageData);
		logger.info(JSON.stringify(requestCall));
		(0, _requestPromise2.default)(requestCall).then(function (messageData) {
			var result = _categoryMapper2.default.mapTopCategoryJSON(messageData);
			res.send({
				"success": true,
				"result": result
			});
		}).catch(function (error) {
			if (error) {
				logger.error('errors in service to getTopCategories in WCS: ', error);
				res.send({ "success": false, "error": error });
			} else {
				logger.error('errors in service to getTopCategories in WCS: ', error);
				res.send({ "success": false, "error": error });
			}
		});
	},

	getCategory: function getCategory(res, req) {
		var identifier = req.query.identifier;
		var concatURL = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CATEGORY + identifier + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
		var messageData = {};
		var getCategoriesUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false);
		logger.info("getCategoriesUrl: " + getCategoriesUrl);
		var method = 'GET';
		var requestCall = (0, _util.constructRequestWithoutToken)(getCategoriesUrl, method, messageData);
		logger.info(JSON.stringify(requestCall));
		(0, _requestPromise2.default)(requestCall).then(function (messageData) {
			var result = _categoryMapper2.default.mapCategoryJSON(messageData);
			res.send({
				"success": true,
				"result": result
			});
		}).catch(function (error) {
			if (error) {
				logger.error('errors in service to getCategories in WCS: ', error);
				res.send({ "success": false, "error": error });
			} else {
				logger.error('errors in service to getCategories in WCS: ', error);
				res.send({ "success": false, "error": error });
			}
		});
	},

	/*
  * Method for getting Sub Cateogries for given ParentId in WCS
  * Request Method : GET
  * Request Params : identifier
 	 */

	getSubCategories: function getSubCategories(res, req) {

		logger.info(" categoryCtrl -> getSubCategories: ");
		_seoCtlr2.default.getIdByKeyword(req.query.identifier, 'CategoryToken').then(function (value) {
			var concatURL = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_SUB_CATEGORY + value;
			var messageData = {};
			var getSubCategoriesUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false);
			logger.info("getSubCategoriesUrl: " + getSubCategoriesUrl);
			var method = 'GET';
			var requestCall = (0, _util.constructRequestWithoutToken)(getSubCategoriesUrl, method, messageData);
			logger.info(JSON.stringify(requestCall));
			(0, _requestPromise2.default)(requestCall).then(function (messageData) {
				console.log("Before Mapper");
				var result = _categoryMapper2.default.mapSubCategoryJSON(messageData);
				res.send({
					"success": true,
					"result": result
				});
			}).catch(function (error) {
				if (error) {
					logger.error('errors in service to getSubCategories in WCS: ', error);
					res.send({ "success": false, "error": error });
				} else {
					logger.error('errors in service to getSubCategories in WCS: ', error);
					res.send({ "success": false, "error": error });
				}
			});
		});
	},

	/* 
  * Method for getting product list for a given category - category landing page
  * Request Method : GET
  * Request Params : pagesize, current
  */

	getProductsListForCategory: function getProductsListForCategory(req, res, categoryId) {
		var pageSize = req.query.pagesize;
		var currentPageNumber = req.query.currentPage;

		logger.info("getProductsListForCategory -> categoryId::" + categoryId);

		_seoCtlr2.default.getIdByKeyword(categoryId, 'CategoryToken').then(function (value) {
			var concatURL = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CATEGORY_DETAILS_APPEND + value + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID + "&pageNumber=" + currentPageNumber + "&pageSize=" + pageSize;
			if (req.query.orderBy) {
				var orderBy = req.query.orderBy;
				concatURL = concatURL + "&orderBy=" + orderBy;
			}
			if (req.query.facet) {
				var facet = req.query.facet;
				logger.info("Multiple facets" + Array.isArray(facet));
				if (Array.isArray(facet)) {

					var facetIterator = facet[Symbol.iterator]();
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = facetIterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var facetvalue = _step.value;

							concatURL = concatURL + "&facet=" + facetvalue;
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				} else concatURL = concatURL + "&facet=" + facet;
			}
			var getProductsListForCategoryUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false);
			logger.info("getProductsListForCategoryUrl: " + getProductsListForCategoryUrl);
			var method = 'GET';
			var requestCall = (0, _util.constructRequestWithoutToken)(getProductsListForCategoryUrl, method, '');
			logger.info(JSON.stringify(requestCall));
			(0, _requestPromise2.default)(requestCall).then(function (body) {
				var messageData = {
					'pageSize': pageSize,
					'currentPage': currentPageNumber
				};
				if ((0, _util.isJson)(body)) body = JSON.parse(body);
				var result = _categoryMapper2.default.mapProductsListForCategoryJSON(body, messageData);
				res.send({
					"success": true,
					"result": result
				});
			}).catch(function (error) {
				if (error) {
					logger.error('errors in service to getProductsListForCategory in WCS: ', error);
					res.send({ "success": false, "error": error });
				} else {
					logger.error('errors in service to getProductsListForCategory in WCS: ', error);
					res.send({ "success": false, "error": error });
				}
			});
		});
	}
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _seoCtlr = __webpack_require__(9);

var _seoCtlr2 = _interopRequireDefault(_seoCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	/* 
  * JSON Mapper for generating responses for Top category
  */

	mapTopCategoryJSON: function mapTopCategoryJSON(input) {
		var converter = _jsonMapper2.default.makeConverter({
			TopCategories: ['catalogGroupView', _jsonMapper2.default.map({
				name: 'name',
				identifier: 'identifier',
				id: 'uniqueID',
				seoKeyword: 'seo_token_ntk',
				store: 'storeID'

			})],
			totalCount: 'recordSetCount'

		});
		var result = converter(input);
		return result;
	},

	/* 
  * JSON Mapper for generating responses for category
  */

	mapCategoryJSON: function mapCategoryJSON(input) {
		var converter = _jsonMapper2.default.makeConverter({
			Category: ['catalogGroupView', _jsonMapper2.default.map({
				fullImage: 'fullImage',
				fullImageAltDescription: 'fullImageAltDescription',
				parentCatalogGroupID: 'parentCatalogGroupID',
				identifier: 'identifier',
				metaDescription: 'metaDescription',
				metaKeyword: 'metaKeyword',
				name: 'name',
				productsURL: 'productsURL',
				resourceId: 'resourceId',
				shortDescription: 'shortDescription',
				seoKeyword: 'seo_token_ntk',
				thumbnail: 'thumbnail',
				title: 'title',
				uniqueID: 'uniqueID'
			})]

		});
		var result = converter(input);
		return result;
	},

	/* 
  * JSON Mapper for generating responses for Sub Category
  */

	mapSubCategoryJSON: function mapSubCategoryJSON(input) {
		var converter = _jsonMapper2.default.makeConverter({
			SubCategories: ['catalogGroupView', _jsonMapper2.default.map({
				name: 'name',
				identifier: 'identifier',
				id: 'uniqueID',
				store: 'storeID',
				seoKeyword: 'seo_token_ntk',
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.HTTP_URI_CONSTANT + _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}]
			})],
			totalCount: 'recordSetCount'

		});
		var result = converter(input);
		return result;
	},

	/* 
  * JSON Mapper for generating responses for product list JSON for category landing page 
  */

	mapProductsListForCategoryJSON: function mapProductsListForCategoryJSON(body, messageData) {
		var pageSize = Number(messageData.pageSize);
		var recordSetTotal = Number(body.recordSetTotal);
		var pages = Math.ceil(recordSetTotal / pageSize);
		var converter = _jsonMapper2.default.makeConverter({
			pagination: {
				pageSize: _jsonMapper2.default.helpers.def(messageData.pageSize),
				currentPageNumber: _jsonMapper2.default.helpers.def(messageData.currentPage),
				resultsTotal: 'recordSetTotal',
				resultsCurrentPage: 'recordSetCount',
				pages: _jsonMapper2.default.helpers.def(pages)
			},
			resourceIdentifier: 'resourceId',
			productsList: ['catalogEntryView', _jsonMapper2.default.map({
				availability: '',
				listPrice: 'price.0.value',
				purchasePrice: 'price.1.value',
				displayName: 'name',
				code: 'partNumber',
				uniqueID: 'uniqueID',
				store: 'storeID',
				seoKeyword: 'seo_token_ntk',
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}],

				attributes: ['attributes', _jsonMapper2.default.map({
					displayable: 'displayable',
					name: 'name',
					identifier: 'identifier',
					values: 'values.0.value'
				})],
				hasSingleSKU: 'hasSingleSKU',
				catalogEntryTypeCode: 'catalogEntryTypeCode'
			})],
			facets: ['facetView', _jsonMapper2.default.map({
				entry: ['entry', _jsonMapper2.default.map({
					count: 'count',
					uniqueId: function uniqueId(input) {
						return input.extendedData.uniqueId;
					},
					label: 'label',
					value: 'value',
					image: ['image', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				extendedData: {
					name: 'name',
					value: 'value',
					facet_id: 'extendedData.facet_id',
					fdesc: 'extendedData.fdesc',
					fname: 'extendedData.fname',
					srchattr_id: 'extendedData.srchattr_id',
					srchattridentifier: 'extendedData.srchattridentifier',
					storeent_id: 'extendedData.storeent_id'
				}

			})]

		});

		var result = converter(body);
		return result;
	}
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _shipModeCtlr = __webpack_require__(61);

var _shipModeCtlr2 = _interopRequireDefault(_shipModeCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * Router for getShippingMethods
 */

router.get('/getShippingMethods', function (req, res) {
  _shipModeCtlr2.default.getShipModes(res, req);
});

/* 
 * Router for getShippingMethods
 */

router.get('/getShippingInfo', function (req, res) {
  _shipModeCtlr2.default.getShippingInfo(res, req);
});

/* 
 * Router for updateShippingMethods
 */

router.put('/updateShippingMethods', function (req, res) {
  _shipModeCtlr2.default.updateShipModes(res, req);
});

exports.default = router;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _shipModeMapper = __webpack_require__(62);

var _shipModeMapper2 = _interopRequireDefault(_shipModeMapper);

var _request = __webpack_require__(15);

var _request2 = _interopRequireDefault(_request);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

	/*
  * Method for getting the shipping modes in WCS  
  * Request Method: GET
  */

	getShipModes: function getShipModes(res, req) {

		var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_SHIPMODES_APPEND;
		logger.info("getShipModes post form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, false));
		var messageData = {};
		var method = "GET";
		var requestCall = (0, _util.constructRequestWithoutToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, false), method, messageData);
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			var result = _shipModeMapper2.default.mapShipModeJSON(data);
			res.send({
				"success": true,
				"result": result
			});
		}).catch(function (error) {
			if (error.response.body) {
				logger.error('errors in service to get ship modes in WCS: ', body.errors);
				res.send({ "success": false, "error": body.errors });
			} else {
				logger.error('errors in service to get ship modes in WCS: ', error);
				res.send({ "success": false, "error": error });
			}
		});
	},

	/*
  * Method for updating shipping modes in WCS  
  * Request Method: PUT
  * Request Params: shipModeId
  */

	updateShipModes: function updateShipModes(res, req) {

		var shipModeId = req.body.shipModeId;
		var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_UPDATE_SHIP_INFO;
		logger.info("updateShipModes post form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
		var messageData = {
			"shipModeId": shipModeId,
			"x_calculationUsage": _constants2.default.SHIP_CALC_USAGE
		};
		var method = "PUT";
		var requestCall = (0, _util.constructRequestWithToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true), method, messageData, (0, _util.getTokens)(req));
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			res.send({
				"success": true
			});
		}).catch(function (error) {
			res.send({ "success": false, "error": error });
		});
	},

	/*
  * Method for updating shipping information in WCS  
  * Request Method: GET
  */

	getShippingInfo: function getShippingInfo(res, req) {

		var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_UPDATE_SHIP_INFO;
		logger.info("getShippingInfo get form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
		var messageData = {};
		var method = "GET";
		var requestCall = (0, _util.constructRequestWithToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true), method, messageData, (0, _util.getTokens)(req));
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			res.send({
				"success": true,
				"result": data
			});
		}).catch(function (error) {
			res.send({ "success": false, "error": error });
		});
	}

};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	/*
  * JSON Mapper for mapping the Shipmodes in WCS
  */

	mapShipModeJSON: function mapShipModeJSON(body) {

		var converter = _jsonMapper2.default.makeConverter({

			usableShippingMode: [{
				choice: ['usableShippingMode', _jsonMapper2.default.map({
					carrier: 'field2',
					shipModeId: 'shipModeId',
					displayName: 'shipModeDescription',
					name: 'shipModeCode'
				})]

			}]
		});

		var result = converter(body);
		return result;
	}

};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _searchCtlr = __webpack_require__(64);

var _searchCtlr2 = _interopRequireDefault(_searchCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 *  Route for getSearchResults
 */

router.get('/getSearchResults', function (req, res) {
    _searchCtlr2.default.getSearchResults(req, res);
});

router.get('/keywordSuggestionsByTerm', function (req, res) {
    _searchCtlr2.default.keywordSuggestionsByTerm(req, res);
});
exports.default = router;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(5);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _searchMapper = __webpack_require__(65);

var _searchMapper2 = _interopRequireDefault(_searchMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*
     * Method for getting product results based on keyword  
     * Request Method: GET
     * Request Params: keyword, pageSize, currentPage
     */

    getSearchResults: function getSearchResults(req, res) {
        var keyword = req.query.keyword;
        var pageSize = req.query.pageSize;
        var currentPage = req.query.currentPage;
        var messageData = {
            "pageSize": pageSize,
            "currentPage": currentPage
        };
        var path = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PRODUCT_SEARCH_BY_KEYWORD + keyword + "?pageSize=" + pageSize + "&pageNumber=" + currentPage;
        if (req.query.orderBy) {
            var orderBy = req.query.orderBy;
            path = path + "&orderBy=" + orderBy;
        }
        if (req.query.categoryId) {
            var categoryId = req.query.categoryId;
            path = path + "&categoryId=" + categoryId;
        }
        if (req.query.facet) {
            var facet = req.query.facet;
            logger.info("Multiple facets" + Array.isArray(facet));
            if (Array.isArray(facet)) {

                var facetIterator = facet[Symbol.iterator]();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = facetIterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var facetvalue = _step.value;

                        path = path + "&facet=" + facetvalue;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else path = path + "&facet=" + facet;
        }
        var searchURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, path, false);
        logger.info("search url = " + searchURL);
        var requestCall = (0, _util.constructRequestWithoutToken)(searchURL, 'GET', '');
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            var result = _searchMapper2.default.mapSearchResultJSON(body, messageData);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('errors in service to getSearchResults in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getSearchResults in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    keywordSuggestionsByTerm: function keywordSuggestionsByTerm(req, res) {

        var term = req.query.term;
        var concatURL = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_KEYWORD_SUGGESTION + term;
        var keywordSuggestionsByTermUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false);
        logger.info("keywordSuggestionsByTermUrl: " + keywordSuggestionsByTermUrl);
        var method = 'GET';
        var messageData = {};
        var requestCall = (0, _util.constructRequestWithoutToken)(keywordSuggestionsByTermUrl, method, messageData);
        (0, _requestPromise2.default)(requestCall).then(function (messageData) {
            res.send({
                "success": true,
                "result": messageData
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('404 error in service to keywordSuggestionsByTerm in WCS: ', error);
                res.send({ "success": false, "error": error });
            } else {
                logger.error('errors in service to keywordSuggestionsByTerm in WCS: ', error);
                res.send({ "success": false, "error": error });
            }
        });
    }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    /* 
     * JSON Mapper for mapping responses for search results page 
     */

    mapSearchResultJSON: function mapSearchResultJSON(body, messageData) {
        var pageSize = Number(messageData.pageSize);
        var recordSetTotal = Number(body.recordSetTotal);
        var pages = Math.ceil(recordSetTotal / pageSize);
        var converter = _jsonMapper2.default.makeConverter({
            pagination: {
                pageSize: _jsonMapper2.default.helpers.def(messageData.pageSize),
                currentPageNumber: _jsonMapper2.default.helpers.def(messageData.currentPage),
                resultsTotal: 'recordSetTotal',
                resultsCurrentPage: 'recordSetCount',
                pages: _jsonMapper2.default.helpers.def(pages)
            },
            resourceIdentifier: 'resourceId',
            searchResults: ['catalogEntryView', _jsonMapper2.default.map({
                uniqueID: 'uniqueID',
                listPrice: 'price.0.value',
                purchasePrice: 'price.1.value',
                displayName: 'name',
                code: 'partNumber',
                store: 'storeID',
                seoKeyword: 'seo_token_ntk',
                thumbnail: ['thumbnail', function (url) {
                    if (url) {
                        return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
                    }
                }],
                attributes: ['attributes', _jsonMapper2.default.map({
                    displayable: 'displayable',
                    name: 'name',
                    identifier: 'identifier',
                    values: 'values.0.value'

                })]
            })],
            facets: ['facetView', _jsonMapper2.default.map({
                entry: ['entry', _jsonMapper2.default.map({
                    count: 'count',
                    uniqueId: function uniqueId(input) {
                        return input.extendedData.uniqueId;
                    },
                    label: 'label',
                    value: 'value',
                    image: ['image', function (url) {
                        if (url) {
                            return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
                        }
                    }]

                })],
                extendedData: {
                    name: 'name',
                    value: 'value',
                    facet_id: 'extendedData.facet_id',
                    fdesc: 'extendedData.fdesc',
                    fname: 'extendedData.fname',
                    srchattr_id: 'extendedData.srchattr_id',
                    srchattridentifier: 'extendedData.srchattridentifier',
                    storeent_id: 'extendedData.storeent_id'
                }

            })]
        });
        var result = converter(body);
        return result;
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _addressCtlr = __webpack_require__(67);

var _addressCtlr2 = _interopRequireDefault(_addressCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 *	Gets all the addresses associated with the user
 */

router.get('/getShippingAddresses', function (req, res) {
  _addressCtlr2.default.getShippingAddresses(res, req);
});

/*
 *  Add an address to an user in WCS
 */

router.post('/addShippingAddress', function (req, res) {
  _addressCtlr2.default.addShippingAddress(res, req);
});

/*
 *	Updtes an address in WCS
 */

router.put('/updateShippingAddress', function (req, res) {
  _addressCtlr2.default.updateShippingAddress(res, req);
});

/*
 *	Deletes an address in WCS
 */

router.delete('/deleteShippingAddress', function (req, res) {
  _addressCtlr2.default.deleteShippingAddress(res, req);
});

/*
 *	Associates an address to the order
 */

router.put('/selectShippingAddress', function (req, res) {
  _addressCtlr2.default.selectShippingAddress(res, req);
});

exports.default = router;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _addressMapper = __webpack_require__(68);

var _addressMapper2 = _interopRequireDefault(_addressMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

	/*
  * Method for getting the shipping addresses in WCS  
  * Request Method : GET
  */

	getShippingAddresses: function getShippingAddresses(res, req) {

		var getAddressURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ADDRESS_DETAILS;
		logger.info("getAddress get form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, getAddressURL, true));
		var method = 'GET';
		var messageData = {};
		var requestCall = (0, _util.constructRequestWithToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, getAddressURL, true), method, messageData, (0, _util.getTokens)(req));
		logger.info("requestCAll " + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, getAddressURL, true));
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			var body1 = data;
			var checkoutProfileURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CHECKOUT_PROFILE;
			logger.info("checkout profile get form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));
			var secondRequestCall = (0, _util.constructRequestWithToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true), "GET", messageData, (0, _util.getTokens)(req));
			logger.info("requestCAll " + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, checkoutProfileURL, true));
			(0, _requestPromise2.default)(secondRequestCall).then(function (data) {
				var result = _addressMapper2.default.mapGetAddressJSON(body1, data);
				res.send({
					"success": true,
					"result": result
				});
			}).catch(function (error) {
				if (error.response.body) {
					logger.error('errors in service to getShippingAddress(checkoutProfile) in WCS: ', error.response.body);
					res.send({ "success": false, "error": error.response.body });
				} else {
					logger.error('errors in service to getShippingAddress(checkoutProfile) in WCS: ', error);
					res.send({ "success": false, "error": error });
				}
			});
		}).catch(function (error) {
			if (error.response.body) {
				logger.error('errors in service to getShippingAddress(person/contact) in WCS: ', error.response.body);
				res.send({ "success": false, "error": error.response.body });
			} else {
				logger.error('errors in service to getShippingAddress(person/contact) in WCS: ', error);
				res.send({ "success": false, "error": error });
			}
		});
	},

	/*
  * Method for getting the shipping addresses in WCS  
  * Request Method: POST
  */

	addShippingAddress: function addShippingAddress(res, req) {
		var timeStamp = Math.round(+new Date() / 1000);
		var nickName = req.body.addressType + "_" + timeStamp;
		var addAddressURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ADDRESS_DETAILS;
		logger.info("addAddress POST form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, addAddressURL, true));
		var method = 'POST';
		var messageData = req.body;
		var requestCall = (0, _util.constructRequestWithToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, addAddressURL, true), method, messageData, (0, _util.getTokens)(req));
		logger.info("requestCAll " + JSON.stringify((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, addAddressURL, true)));
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			res.send({
				"success": true
			});
		}).catch(function (error) {
			console.log("addressCtlr => addShippingAddress", error);
			res.send({ "success": false, "error": error });
		});
	},

	/*
  * Method for updating the shipping address in WCS  
  * Request Method : PUT
  * Request Params : nickName
  */

	updateShippingAddress: function updateShippingAddress(res, req) {
		var nickName = req.body.nickName;
		var updateAddressURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ADDRESS_DETAILS + _constants2.default.SLASH + nickName;
		logger.info("updateAddress PUT form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, updateAddressURL, true));
		var method = 'PUT';
		var messageData = req.body;
		var requestCall = (0, _util.constructRequestWithToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, updateAddressURL, true), method, messageData, (0, _util.getTokens)(req));
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			res.send({
				"success": true
			});
		}).catch(function (error) {
			console.log("addressCtlr => addShippingAddress", error);
			res.send({ "success": false, "error": error });
		});
	},

	/*
  * Method for deleting the shipping address in WCS
  * Request Method : DELETE
  * Request Params : nickName
  */

	deleteShippingAddress: function deleteShippingAddress(res, req) {
		var nickName = req.query.nickName;
		var deleteAddressURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ADDRESS_DETAILS + _constants2.default.SLASH + nickName;
		logger.info("deleteAddress POST form url:" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, deleteAddressURL, true));
		var method = 'DELETE';
		var messageData = {};
		var requestCall = (0, _util.constructRequestWithToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, deleteAddressURL, true), method, messageData, (0, _util.getTokens)(req));
		(0, _requestPromise2.default)(requestCall).then(function (data) {
			res.send({
				"success": true
			});
		}).catch(function (error) {
			console.log("addressCtlr => addShippingAddress", error);
			res.send({ "success": false, "error": error });
		});
	},

	/*
  * Method for selecting the shipping address in WCS 
  * Request Method : PUT
  * Request Params : addressId
  */

	selectShippingAddress: function selectShippingAddress(res, req) {

		messageData = {};
		var addressId = req.body.addressId;
		var x_calculationUsage = _constants2.default.SHIP_CALC_USAGE;
		var conCatUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_SHIP_INFO;
		var selectShippingAddressURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, conCatUrl, true);
		logger.info('selectShippingAddress url ', selectShippingAddressURL);
		var method = 'PUT';
		var messageData = {
			"addressId": addressId,
			"orderId": ".",
			"orderItem": [{
				"addressId": addressId
			}],
			"x_calculationUsage": x_calculationUsage
		};
		var requestCall = (0, _util.constructRequestWithToken)(selectShippingAddressURL, method, messageData, (0, _util.getTokens)(req));

		(0, _requestPromise2.default)(requestCall).then(function (data) {
			res.send({
				"success": true,
				"result": data
			});
		}).catch(function (error) {
			res.send({ "success": false, "error": error });
		});
	}

};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

var _underscore = __webpack_require__(14);

var _underscore2 = _interopRequireDefault(_underscore);

var _extendify = __webpack_require__(69);

var _extendify2 = _interopRequireDefault(_extendify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	/*
  * json Mapper for mapping the Addresses in WCS
  */

	mapGetAddressJSON: function mapGetAddressJSON(addressResp, checkoutResp) {
		var converter1 = _jsonMapper2.default.makeConverter({
			address: ['contact', _jsonMapper2.default.map({
				addressId: 'addressId',
				addressLine: {
					addressLine1: 'addressLine.0',
					addressLine2: 'addressLine.1'
				},
				addressType: 'addressType',
				country: 'country',
				city: 'city',
				firstName: 'firstName',
				lastName: 'lastName',
				nickName: 'nickName',
				zipCode: 'zipCode',
				state: 'state',
				email1: 'email1',
				phone1: 'phone1',
				primary: 'primary'

			})]
		});

		var converter = _jsonMapper2.default.makeConverter({
			defaultAddress: ['CheckoutProfile', _jsonMapper2.default.map({
				addressId: 'shipping_addressId',
				addressLine: {
					addressLine1: 'shipping_addressLine.0',
					addressLine2: 'shipping_addressLine.1'
				},
				addressType: 'shipping_addressType',
				country: 'shipping_country',
				city: 'shipping_city',
				firstName: 'shipping_firstName',
				lastName: 'shipping_lastName',
				nickName: 'shipping_nickName',
				zipCode: 'shipping_zipCode',
				state: 'shipping_state',
				email1: 'shipping_email1',
				phone1: 'shipping_phone1',
				primary: 'shipping_primary'

			})]
		});

		var defaultAddressResult = converter(checkoutResp);
		var addressResult = converter1(addressResp);

		_underscore2.default.extend = (0, _extendify2.default)({
			inPlace: false,
			arrays: 'replace',
			isDeep: true
		});

		var contact = _underscore2.default.extend(defaultAddressResult, addressResult);
		var result = { contact: [contact] };
		console.log(JSON.stringify(contact));
		contact.userId = checkoutResp.userId;
		return result;
	},

	/* 
  * Normal Response for Adding address this needs to be refined 
  */

	mapAddAddressJSON: function mapAddAddressJSON(body) {
		var jsonResponse = {
			userId: body.userId,
			addressId: body.addressId,
			addShippingAddressMsg: constants.WCS_ADDRESS_ADDED
		};
		return JSON.parse(JSON.stringify(jsonResponse));
	},

	/* 
  * Normal Response for Updating address this needs to be refined 
  */

	mapUpdateAddressJSON: function mapUpdateAddressJSON(body) {
		var jsonResponse = {
			addressId: body.addressId,
			updateShippingAddressMsg: constants.WCS_ADDRESS_UPDATED
		};
		return JSON.parse(JSON.stringify(jsonResponse));
	},

	/* 
  * Normal Response for Deleting address this needs to be refined 
  */

	mapDeleteAddressJSON: function mapDeleteAddressJSON(body) {
		var jsonResponse = {
			deleteShippingAddressMsg: constants.WCS_ADDRESS_DELETED
		};
		return JSON.parse(JSON.stringify(jsonResponse));
	},

	/* 
  * Normal Response for Selecting address this needs to be refined 
  */

	mapSelectAddressJSON: function mapSelectAddressJSON(body) {
		var jsonResponse = {
			selectShippingAddressMsg: constants.WCS_ADDRESS_SELECTED
		};
		return JSON.parse(JSON.stringify(jsonResponse));
	}

};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("extendify");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _cartCtlr = __webpack_require__(71);

var _cartCtlr2 = _interopRequireDefault(_cartCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * router for addToCart 
 */

router.post('/addToCart', function (req, res) {
  _cartCtlr2.default.addToCart(req, res);
});

/* 
 * router for shoppingCart 
 */

router.get('/shoppingCart', function (req, res) {
  _cartCtlr2.default.shoppingCart(req, res);
});

/* 
 * router for update cart item
 */

router.put('/updateShoppingCartItem', function (req, res) {
  _cartCtlr2.default.updateShoppingCartItem(req, res);
});

/* 
 * router for delete cart item 
 */

router.post('/deleteShoppingCartItem', function (req, res) {
  _cartCtlr2.default.deleteShoppingCartItem(req, res);
});

/* 
 * router for delete all cart items
 */

router.delete('/deleteAllShoppingCartItem', function (req, res) {
  _cartCtlr2.default.deleteAllShoppingCartItem(req, res);
});

/* 
 * router for submitting order
 */

router.post('/submitOrder', function (req, res) {
  _cartCtlr2.default.submitOrder(req, res);
});

/* 
 * router for orderPaymentSummary 
 */

router.get('/orderPaymentSummary', function (req, res) {
  _cartCtlr2.default.orderPaymentSummary(req, res);
});

/* 
 * router for orderReview	 
 */

router.post('/orderReview', function (req, res) {
  _cartCtlr2.default.orderReview(req, res);
});

exports.default = router;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _cartMapper = __webpack_require__(11);

var _cartMapper2 = _interopRequireDefault(_cartMapper);

var _loginCtlr = __webpack_require__(19);

var _loginCtlr2 = _interopRequireDefault(_loginCtlr);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*
     * Method to add a product to cart in WCS 
     * Request params : userId
     * Request Body : addToCart body as in WCS 
     */

    addToCart: function addToCart(req, res) {
        logger.info("inside add to cart");

        logger.info("req.cookie.userId::" + req.cookies.userId);

        //Check if there is a userId already exists by checking the cookie
        if (req.cookies.userId == 'undefined') {
            //Call the guestIdentityHandler and set the token
            _loginCtlr2.default.guestIdentityHandler(req, res);
        }

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_EXT + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
        var addToCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var messageData = req.body;
        var method = 'POST';
        logger.info("addToCartUrl:" + addToCartUrl + "messageData: " + JSON.stringify(messageData));

        var requestCall = (0, _util.constructRequestWithToken)(addToCartUrl, method, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (messageData) {
            var result = _cartMapper2.default.addToCartJSON(messageData);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /* 
     * Method for getting Shopping Cart Item in WCS
     * Request Params : userId 
     * Request Method : GET
     */

    shoppingCart: function shoppingCart(req, res) {

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_AT_SELF;

        logger.info("ShoppingCart URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
        var shoppingCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var method = 'GET';
        var messageData = {};
        var requestCall = (0, _util.constructRequestWithToken)(shoppingCartUrl, method, messageData, (0, _util.getTokens)(req));

        (0, _requestPromise2.default)(requestCall).then(function (data) {
            var result = _cartMapper2.default.mapShoppingCartJSON(data);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to shoppingCart in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to shoppingCart in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /* 
     *  Method for updating the Cart Item in WCS
     *  Request Params : userId 
     *  Request Method : PUT
     *  Request Body : updateShoppingCart body as in WCS
     */

    updateShoppingCartItem: function updateShoppingCartItem(req, res) {

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART + _constants2.default.WCS_GET_SHOPPINGCART + _constants2.default.WCS_UPDATE_CART;
        logger.info("Update ShoppingCart URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
        var updateCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var method = 'PUT';
        var messageData = _cartMapper2.default.mapUpdateCartRequestJSON(req.body);
        logger.info("request to wcs" + messageData);
        var requestCall = (0, _util.constructRequestWithToken)(updateCartUrl, method, messageData, (0, _util.getTokens)(req));

        (0, _requestPromise2.default)(requestCall).then(function (data) {
            var result = _cartMapper2.default.mapUpdateCartResponseJSON(data);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to updateShoppingCartItem in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to updateShoppingCartItem in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /* 
     *  Method for deleting Shopping Cart Item in WCS
     *  Request Params : userId
     *  Request Method : PUT
     *  Request Body : deleteShoppingCartItem body as in WCS
     */

    deleteShoppingCartItem: function deleteShoppingCartItem(req, res) {

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART + _constants2.default.WCS_GET_SHOPPINGCART + _constants2.default.WCS_DELETE_CART;
        logger.info("Delete ShoppingCart URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
        var updateCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var method = 'PUT';
        var messageData = _cartMapper2.default.mapDeleteCartRequestJSON(req.body);
        logger.info("request to wcs" + JSON.stringify(messageData));
        var requestCall = (0, _util.constructRequestWithToken)(updateCartUrl, method, messageData, (0, _util.getTokens)(req));

        (0, _requestPromise2.default)(requestCall).then(function (data) {
            result = _cartMapper2.default.mapDeleteCartResponseJSON(data);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to deleteShoppingCartItem in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to deleteShoppingCartItem in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /* 
     * Method for deleting All Shopping Cart Items in WCS
     * Request Params : userId 
     * Request Method : DELETE
     */

    deleteAllShoppingCartItem: function deleteAllShoppingCartItem(req, res) {

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART + _constants2.default.WCS_GET_SHOPPINGCART;
        logger.info("Delete All ShoppingCart Item URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
        var updateCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var method = 'DELETE';
        var messageData = {};
        var requestCall = (0, _util.constructRequestWithToken)(updateCartUrl, method, messageData, (0, _util.getTokens)(req));

        (0, _requestPromise2.default)(requestCall).then(function (data) {
            var result = _cartMapper2.default.mapDeleteAllCartJSON(data);

            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to deleteAllShoppingCartItem in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to deleteAllShoppingCartItem in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
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

    submitOrder: function submitOrder(req, res) {

        var concatpreCheckOutURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_EXT + _constants2.default.WCS_GET_SHOPPINGCART + _constants2.default.WCS_CART_PRECHECKOUT;
        var preCheckOutUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatpreCheckOutURL, true);
        var methodForPreCheckOut = 'PUT';

        var concatCheckOutURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_EXT + _constants2.default.WCS_GET_SHOPPINGCART + _constants2.default.WCS_CART_CHECKOUT;
        var checkOutUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatCheckOutURL, true);
        var methodForCheckOut = 'POST';

        var authToken = (0, _util.getTokens)(req);

        /* 
         * Method for preparing order for checkout in WCS
         * Request Method : PUT
         */

        var preCheckOut = function preCheckOut(authToken) {
            return new _bluebird2.default(function (resolve, reject) {

                logger.info("inside preCheckOut of submitOrder" + preCheckOutUrl);

                var messageData = req.body;
                logger.info("messageData: " + messageData);

                var requestCall = (0, _util.constructRequestWithToken)(preCheckOutUrl, methodForPreCheckOut, messageData, authToken);
                (0, _requestPromise2.default)(requestCall).then(function (data) {
                    resolve(data);
                }).catch(function (error) {
                    if (error.statusCode === 404 || error.statusCode === 400) {
                        logger.error('errors in service to preCheckOut of submitOrder in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body });
                    } else {
                        logger.error('errors in service to preCheckOut of submitOrder in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0] });
                    }
                });
            });
        };

        /* 
         * Method for checkout in WCS
         * Request Method : POST
         */

        var checkOut = function checkOut(data, authToken) {
            return new _bluebird2.default(function (resolve, reject) {

                logger.info("inside checkOut of submitOrder" + checkOutUrl + "DATA: " + JSON.stringify(data));

                var requestCall = (0, _util.constructRequestWithToken)(checkOutUrl, methodForCheckOut, data, authToken);
                (0, _requestPromise2.default)(requestCall).then(function (result) {

                    return getOrderConfirmationDetails(result, authToken);
                }).catch(function (error) {
                    if (error.statusCode === 404 || error.statusCode === 400) {
                        logger.error('errors in service to checkOut of submitOrder in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body });
                    } else {
                        logger.error('errors in service to checkOut of submitOrder in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0] });
                    }
                });
            });
        };

        /* 
         * Method for Order Confirmation in WCS
         * Request Method : GET
         */

        var getOrderConfirmationDetails = function getOrderConfirmationDetails(data, authToken) {
            return new _bluebird2.default(function (resolve, reject) {

                var concatOrderDetailsUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ORDER + data.orderId;
                var getOrderConfirmationDetailsUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatOrderDetailsUrl, true);
                var methodForConfirmationDetails = 'GET';

                logger.info("inside getOrderConfirmationDetails of submitOrder: " + getOrderConfirmationDetailsUrl);
                logger.info("data: " + JSON.stringify(data) + "authToken: " + JSON.stringify(authToken));
                var messageBody = {};
                var requestCall = (0, _util.constructRequestWithToken)(getOrderConfirmationDetailsUrl, methodForConfirmationDetails, messageBody, authToken);
                (0, _requestPromise2.default)(requestCall).then(function (result) {

                    if ((0, _util.isJson)(result)) {
                        result = JSON.parse(result);
                    }
                    logger.info(JSON.stringify(result));

                    var objectToBePassed = (0, _util.requiredProtocolData)(result);
                    logger.info(JSON.stringify(objectToBePassed));

                    var finalResponse = _cartMapper2.default.mapOrderConfirmationResponseJSON(result, objectToBePassed);
                    logger.info("finalResponse: " + JSON.stringify(finalResponse));
                    res.send({
                        "success": true,
                        "result": finalResponse
                    });
                }).catch(function (error) {
                    if (error.statusCode === 404 || error.statusCode === 400) {
                        logger.error('errors in service to getOrderConfirmationDetails of submitOrder in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body });
                    } else {
                        logger.error('errors in service to getOrderConfirmationDetails of submitOrder in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0] });
                    }
                });
            });
        };

        preCheckOut(authToken).then(function (data) {
            return checkOut(data, authToken);
        });
    },

    /* 
     * Method for getting Order Payment Summary in WCS
     * Request Method : GET
     */

    orderPaymentSummary: function orderPaymentSummary(req, res) {

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_AT_SELF;

        logger.info("orderPaymentSummary URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
        var orderPaymentSummaryUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var method = 'GET';
        var messageData = {};
        var requestCall = (0, _util.constructRequestWithToken)(orderPaymentSummaryUrl, method, messageData, (0, _util.getTokens)(req));

        (0, _requestPromise2.default)(requestCall).then(function (data) {
            var result = _cartMapper2.default.mapOrderPaymentSummaryJSON(data);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to orderPaymentSummary in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to orderPaymentSummary in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /* 
     * Method for getting Order Review in WCS
     * Request Method : POST
     */

    orderReview: function orderReview(req, res) {

        var data = req.body;
        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ORDER + data.orderId;

        logger.info("orderReview URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
        var orderReviewUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var method = 'GET';
        var messageData = {};
        var requestCall = (0, _util.constructRequestWithToken)(orderReviewUrl, method, messageData, (0, _util.getTokens)(req));
        logger.info("review: " + JSON.stringify(requestCall));
        (0, _requestPromise2.default)(requestCall).then(function (result) {

            if ((0, _util.isJson)(result)) {
                result = JSON.parse(result);
            }
            logger.info(JSON.stringify(result));

            var objectToBePassed = (0, _util.requiredProtocolData)(result);
            logger.info(JSON.stringify(objectToBePassed));

            var finalResponse = _cartMapper2.default.mapOrderConfirmationResponseJSON(result, objectToBePassed);
            logger.info("finalResponse: " + JSON.stringify(finalResponse));
            res.send({
                "success": true,
                "result": finalResponse
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to orderReview in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to orderReview in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    }

};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _promotionsCtlr = __webpack_require__(73);

var _promotionsCtlr2 = _interopRequireDefault(_promotionsCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 *  Route for Get promo codes from cart
 */

router.get('/getPromoCodePromotionsAtCart', function (req, res) {
  _promotionsCtlr2.default.getPromoCodePromotionsAtCart(req, res);
});

/*
 *  Route for Apply promotion
 */

router.post('/apply', function (req, res) {
  _promotionsCtlr2.default.apply(req, res);
});

/*
 *  Route for Delete promotion
 */

router.post('/delete', function (req, res) {
  _promotionsCtlr2.default.delete(req, res);
});

exports.default = router;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _promotionsMapper = __webpack_require__(74);

var _promotionsMapper2 = _interopRequireDefault(_promotionsMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _util = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*
     * Method for getting promotions from cart
     * Request Method : GET 
     * Request Params : userId
     
     getPromotionsAtCart: function(req,res){
        logger.info("inside getPromotionsAtCart ctrl");
        let userId = req.query.userId;
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_CART_AT_SELF;
        let getPromotionsAtCartUrl = constructUrl(constants.WCS_HOSTNAME_NOPORT,path,true);
        logger.info("Get Promotion Cart URL" +getPromotionsAtCartUrl);
        getAuthTokensFromDB(userId)
        .then(function(result){
          return requestFunction(result);
        });
        let requestFunction = function(authToken){
            return new Promise(function(resolve,reject){
                let requestCall = constructRequestWithToken(getPromotionsAtCartUrl,'GET','',authToken)
                requestPromise(requestCall).then(function (body) {
                    if(isJson(body)) body = JSON.parse(body);
                    let result = promotionsMapper.mapPromotionsResultJSON(body);  
                    res.send({
                        "success": true,
                        "result": result
                    });
                    }).catch(function (error) {
                        if(error.statusCode === 404){
                            logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                            res.send({ "success": false, "error": error.response.body });
                        }else{
                            logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                            res.send({ "success": false, "error": error.response.body.errors[0] }); 
                        }
                    });
                });
        }
     }, */
    /*
    * Method for getting promo codes applied in cart
    * Request Method : GET 
    */

    getPromoCodePromotionsAtCart: function getPromoCodePromotionsAtCart(req, res) {
        logger.info("inside getPromoCodePromotionsAtCart ctrl");
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_PROMOTIONS;
        var getPromoCodePromotionsAtCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Get Promo codes in Cart URL" + getPromoCodePromotionsAtCartUrl);
        var requestCall = (0, _util.constructRequestWithToken)(getPromoCodePromotionsAtCartUrl, 'GET', '', (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            var result = _promotionsMapper2.default.mapPromoCodesResultJSON(body);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     *  Method for applying promotion
     *  Request Body : promoCode
     *  Request Method : POST
     */

    apply: function apply(req, res) {
        var promoCode = req.body.promoCode;
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_PROMOTIONS;
        logger.info("promocode = " + promoCode);
        var applyUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Apply Promotion URL" + applyUrl);
        var messageData = {
            "promoCode": promoCode
        };
        var requestCall = (0, _util.constructRequestWithToken)(applyUrl, 'POST', messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            res.send({
                "success": true,
                "result": {
                    "orderId": body.orderId,
                    "promoCode": promoCode
                }
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     *  Method for deleting promotions
     *  Request Body : promoCode
     *  Request Method : DELETE
     */

    delete: function _delete(req, res) {
        var promoCode = req.body.promoCode;
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_PROMOTIONS + "/" + promoCode;
        logger.info("promocode = " + promoCode);
        var deleteUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Delete Promotion URL " + deleteUrl);
        var requestCall = (0, _util.constructRequestWithToken)(deleteUrl, 'DELETE', '', (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            res.send({
                "success": true,
                "result": {
                    "orderId": body.orderId,
                    "promoCode": promoCode
                }
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    /* 
     * JSON Mapper for mapping responses for promotions
     */

    mapPromotionsResultJSON: function mapPromotionsResultJSON(body) {
        var converter = _jsonMapper2.default.makeConverter({
            promotions: ['adjustment', _jsonMapper2.default.map({
                name: 'code',
                description: {
                    longDescription: '',
                    shortDescription: ''
                }
            })],
            orderId: 'orderId'
        });

        var result = converter(body);
        return result;
    },
    mapPromoCodesResultJSON: function mapPromoCodesResultJSON(body) {
        var converter = _jsonMapper2.default.makeConverter({
            promotions: ['promotionCode', _jsonMapper2.default.map({
                name: '',
                description: {
                    longDescription: 'associatedPromotion.0.description',
                    shortDescription: 'associatedPromotion.0.description'
                },
                code: 'code',
                promotionId: 'associatedPromotion.0.promotionId'
            })],
            orderId: 'orderId'
        });
        var result = converter(body);
        return result;
    }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _wishListCtlr = __webpack_require__(76);

var _wishListCtlr2 = _interopRequireDefault(_wishListCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * router for addToWishList 
 */

router.post('/addToWishList', function (req, res) {
  _wishListCtlr2.default.addToWishList(req, res);
});

/* 
 * router for deleteFromWishList 
 */

router.delete('/deleteFromWishList', function (req, res) {
  _wishListCtlr2.default.deleteFromWishList(req, res);
});

/* 
 * router for getWishList 
 */

router.get('/getWishList', function (req, res) {
  _wishListCtlr2.default.getWishList(req, res);
});

/* 
 * router for addItemToShoppingCartFromWishList 
 */

router.post('/moveWishListItemToCart', function (req, res) {
  _wishListCtlr2.default.moveWishListItemToCart(req, res);
});

/* 
 * router for loadWishLists 
 */

router.get('/loadWishLists', function (req, res) {
  _wishListCtlr2.default.loadWishLists(req, res);
});

exports.default = router;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _wishListMapper = __webpack_require__(77);

var _wishListMapper2 = _interopRequireDefault(_wishListMapper);

var _cartMapper = __webpack_require__(11);

var _cartMapper2 = _interopRequireDefault(_cartMapper);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*
     * Method to add a product to wishlist in WCS 
     * Request Method : POST
     * Request Body: 
     * {
     *     "productId": "10140",
     *     "quantityRequested": "1"
     *  }
     */

    addToWishList: function addToWishList(req, res) {
        logger.info("inside add to wish list");

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_WISHLIST + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
        var addToWishListUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        logger.info(req.body);
        var messageData = _wishListMapper2.default.addToWishListRequestMapperJSON(req.body);
        var method = 'POST';
        logger.info("addToWishListUrl:" + addToWishListUrl + "messageData: " + JSON.stringify(messageData));

        var requestCall = (0, _util.constructRequestWithToken)(addToWishListUrl, method, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function () {
            res.send({
                "success": true
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to addToWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to addToWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     * Method to delete a product from wishlist in WCS  
     * Request Method : DELETE
     * Request Body: 
     *  {
     *   "wishListId": "12542",
     *    "itemList": [
     *        {
     *            "wishListItemId": "13059"
     *        }
     *    ]   
     *  }
     */

    deleteFromWishList: function deleteFromWishList(req, res) {
        logger.info("inside delete from wish list");

        var wishListId = req.body.wishListId;
        var wishListItemId = void 0,
            concatURL = void 0;
        if (req.body.itemList) {
            wishListItemId = req.body.itemList[0].wishListItemId;
            concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_WISHLIST_DELETE + wishListId + "?wishListItemId=" + wishListItemId + "&catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
        } else concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_WISHLIST_DELETE + wishListId + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;

        var deleteFromWishListUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var messageData = '';
        var method = 'DELETE';
        logger.info("deleteFromWishListUrl:" + deleteFromWishListUrl + "messageData: " + messageData);

        var requestCall = (0, _util.constructRequestWithToken)(deleteFromWishListUrl, method, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function () {
            res.send({
                "success": true
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to deleteFromWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to deleteFromWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     * Method to get the wishlist of a user in WCS  
     * Request Method: GET
     */

    getWishList: function getWishList(req, res) {
        logger.info("inside getWishList");

        var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_WISHLIST + _constants2.default.WCS_DEFAULT + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
        var getWishListUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
        var messageData = '';
        var method = 'GET';
        logger.info("getWishListUrl:" + getWishListUrl + "messageData: " + messageData);

        var requestCall = (0, _util.constructRequestWithToken)(getWishListUrl, method, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (messageData, req) {
            var result = _wishListMapper2.default.getWishListJSON(messageData, req);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to getWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getWishList in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     * Method to get the all the wishlists for the user  
     * Request Method: GET
     */

    loadWishLists: function loadWishLists(req, res) {
        logger.info("inside loadWishLists Controller Load1");

        var concatloadWishListURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_WISHLIST + _constants2.default.WCS_AT_SELF + "?responseFormat=json";
        var loadWishListURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatloadWishListURL, true);
        var methodForLoadWishList = 'GET';
        var messageData = {};

        logger.info("loadWishListURL: " + loadWishListURL);
        var requestCall = (0, _util.constructRequestWithToken)(loadWishListURL, methodForLoadWishList, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {

            var result = _wishListMapper2.default.getWishListLists(body);
            console.log("REsult::" + JSON.stringify(result));
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to getPersonalInformation in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPersonalInformation in WCS: OTHER ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     * Method to move a product from wishlist to cart in WCS  
     * Request Method: POST
     * Request Body: 
     *  {
     *    "wishListItemId": "13041",
     *    "wishListId": "12529",
     *    "quantity": "2",
     *    "productId": "10140"
     *  }
     */

    moveWishListItemToCart: function moveWishListItemToCart(req, res) {
        logger.info("inside moveWishListItemToCart");

        var wishListItemId = req.body.wishListItemId;
        var wishListId = req.body.wishListId;
        var quantity = req.body.quantity;
        var productId = req.body.productId;

        var concatDeleteURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_WISHLIST_DELETE + wishListId + "?wishListItemId=" + wishListItemId + "&catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
        var deleteFromWishListUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatDeleteURL, true);
        var methodForDeleteWishList = 'DELETE';

        var concatAddToCartURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_EXT + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
        var addToCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatAddToCartURL, true);
        var methodForAddToCart = 'POST';

        var messageData = '';
        var authToken = (0, _util.getTokens)(req);

        var deleteItemsFromWishList = function deleteItemsFromWishList(authToken) {
            return new _bluebird2.default(function (resolve, reject) {

                logger.info("inside delete of moveWishListItemToCart" + deleteFromWishListUrl);
                var requestCall = (0, _util.constructRequestWithToken)(deleteFromWishListUrl, methodForDeleteWishList, messageData, authToken);
                (0, _requestPromise2.default)(requestCall).then(function () {
                    resolve(authToken);
                }).catch(function (error) {
                    if (error.statusCode === 404 || error.statusCode === 400) {
                        logger.error('errors in service to deleteItemsFromWishList in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body });
                    } else {
                        logger.error('errors in service to deleteItemsFromWishList in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0] });
                    }
                });
            });
        };

        var addToCartFunction = function addToCartFunction(authToken, productId) {
            return new _bluebird2.default(function (resolve, reject) {

                logger.info("inside addToCartFunction of moveWishListItemToCart" + addToCartUrl);
                var messageBody = _wishListMapper2.default.moveToCartMapperJSON(productId, quantity);
                logger.info("messageBody: " + JSON.stringify(messageBody));
                var requestCall = (0, _util.constructRequestWithToken)(addToCartUrl, methodForAddToCart, messageBody, authToken);
                (0, _requestPromise2.default)(requestCall).then(function (messageBody, req) {
                    var result = _cartMapper2.default.addToCartJSON(messageBody, req);
                    res.send({
                        "success": true,
                        "result": result
                    });
                }).catch(function (error) {
                    if (error.statusCode === 404 || error.statusCode === 400) {
                        logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body });
                    } else {
                        logger.error('errors in service to addToCartFunction in WCS: ', JSON.stringify(error));
                        res.send({ "success": false, "error": error.response.body.errors[0] });
                    }
                });
            });
        };

        deleteItemsFromWishList(authToken).then(function (authToken) {
            return addToCartFunction(authToken, productId);
        });
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  /*
   * JSON Mapper for mapping responses for the getting wishlist items in WCS
   */

  getWishListJSON: function getWishListJSON(body, req) {

    var converter = _jsonMapper2.default.makeConverter({

      wishListId: "GiftList.0.uniqueID",

      itemList: ['GiftList.0.item', _jsonMapper2.default.map({
        wishListItemId: "giftListItemID",
        partNumber: "partNumber",
        productId: "productId"
      })]
    });

    var result = converter(body);
    return result;
  },

  /*
   * JSON Mapper for mapping responses for the getting wishlist items in WCS
   */

  getWishListLists: function getWishListLists(body, req) {

    var converter = _jsonMapper2.default.makeConverter({

      wishListList: ['GiftList', _jsonMapper2.default.map({
        wishListId: "uniqueID",
        wishListName: "descriptionName",
        itemList: ['item', _jsonMapper2.default.map({
          wishListItemId: "giftListItemID",
          partNumber: "partNumber",
          productId: "productId"
        })]
      })]
    });

    var result = converter(body);
    return result;
  },

  /*
   * JSON Mapper for mapping responses for the adding items to wishlist in WCS
   */

  addToWishListRequestMapperJSON: function addToWishListRequestMapperJSON(body) {

    var result = {
      item: [{
        productId: body.productId,
        quantityRequested: body.quantityRequested

      }]
    };

    return JSON.parse(JSON.stringify(result));
  },

  /*
   * JSON Mapper for mapping responses for the moving items from wishlist to cart in WCS
   */

  moveToCartMapperJSON: function moveToCartMapperJSON(productId, quantity) {

    var result = {
      orderItem: [{
        productId: productId,
        quantity: quantity
      }]
    };
    return JSON.parse(JSON.stringify(result));
  }

};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _productByIdsCtlr = __webpack_require__(79);

var _productByIdsCtlr2 = _interopRequireDefault(_productByIdsCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * Router for getting products details for given productIds
 */

router.get('/getProductDetailsByIds', function (req, res) {
    _productByIdsCtlr2.default.getProductDetailsByIds(req, res);
});

router.get('/getProductDetailBySingleId', function (req, res) {
    _productByIdsCtlr2.default.getProductDetailBySingleId(req, res);
});

exports.default = router;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _pdpMapper = __webpack_require__(17);

var _pdpMapper2 = _interopRequireDefault(_pdpMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

  /* 
   *  Method for getting Product Details By Ids in WCS
   *  Request Params : id
   *  Request Method : GET
   */

  getProductDetailsByIds: function getProductDetailsByIds(req, res) {
    var ids = req.query.id;
    var urlIds = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var x = _step.value;

        urlIds = urlIds + "id=" + x + "&";
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var concatURL = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PRODUCT_BYIDS + urlIds;
    logger.info("getProductDetailsByIds URL : " + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false));
    logger.info("my URL : just checking ");
    var productByIdsUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false);
    var method = 'GET';
    var messageData = {};
    var requestCall = (0, _util.constructRequestWithoutToken)(productByIdsUrl, method, messageData);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var body1 = data;
      var invAvlURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_INV_AVL + ids;
      logger.info("getInvAvl post form url : " + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, invAvlURL, false));
      var secondRequestCall = (0, _util.constructRequestWithoutToken)((0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, invAvlURL, false), "GET", messageData);
      (0, _requestPromise2.default)(secondRequestCall).then(function (data) {
        var result = _pdpMapper2.default.mapPdpJSON(body1, data);
        res.send({
          "success": true,
          "result": result
        });
      }).catch(function (error) {
        if (error) {
          logger.error('errors in service to get product details By Ids in WCS: ', error);
          res.send({ "success": false, "error": error });
        }
      });
    }).catch(function (error) {
      if (error) {
        logger.error('errors in service to get product details By Ids in WCS', error);
        res.send({ "success": false, "error": error });
      } else {
        logger.error('errors in service to get product details By Ids in WCS', error);
        res.send({ "success": false, "error": error });
      }
    });
  },

  getProductDetailBySingleId: function getProductDetailBySingleId(req, res) {

    var id = req.query.id;
    var concatURL = _constants2.default.WCS_PRODUCT_DETAILS + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PRODUCT_BY_SINGLE_ID + id;
    logger.info("my new URL : just checking ");
    var productBySingleIdUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, concatURL, false);
    var method = 'GET';
    var messageData = {};
    var requestCall = (0, _util.constructRequestWithoutToken)(productBySingleIdUrl, method, messageData);
    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var result = _pdpMapper2.default.mapProductDetailBySingleIdJSON(data);
      res.send({
        "success": true,
        "result": result
      });
    }).catch(function (error) {
      if (error.statusCode === 404) {
        logger.error('errors in service to getProductDetailBySingleId in WCS: ', error);
        res.send({ "success": false, "error": error.response.body });
      } else {
        logger.error('errors in service to getProductDetailBySingleId in WCS: ', error);
        res.send({ "success": false, "error": error.response.body.errors[0] });
      }
    });
  }

};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _loginCtlr = __webpack_require__(19);

var _loginCtlr2 = _interopRequireDefault(_loginCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/**
 * router for login
 */
router.post('/loginIdentityHandler', function (req, res) {
  _loginCtlr2.default.loginIdentityHandler(req, res);
});
/**
 * router for guest login
 */
router.post('/guestIdentityHandler', function (req, res) {
  console.log("guest handler");
  _loginCtlr2.default.guestIdentityHandler(req, res);
});

/**
 * router for logout
 */
router.delete('/logoutUser', function (req, res) {
  console.log("logout handler");
  _loginCtlr2.default.logoutUser(req, res);
});

exports.default = router;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _userProfileCtlr = __webpack_require__(82);

var _userProfileCtlr2 = _interopRequireDefault(_userProfileCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * router for getting Order History 
 */

router.get('/getOrderHistory', function (req, res) {
  _userProfileCtlr2.default.getOrderHistory(req, res);
});

/* 
 * router for getting Personal Information
 */

router.get('/getPersonalInformation', function (req, res) {
  _userProfileCtlr2.default.getPersonalInformation(req, res);
});

/* 
 * router for getting Address Book
 */

router.get('/getAddressBook', function (req, res) {
  _userProfileCtlr2.default.getAddressBook(req, res);
});

exports.default = router;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _userProfileMapper = __webpack_require__(83);

var _userProfileMapper2 = _interopRequireDefault(_userProfileMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*
     * Method to get Order History of an user in WCS 
     * Request Method : GET
     */

    getOrderHistory: function getOrderHistory(req, res) {
        logger.info("inside getOrderHistory");

        var concatOrderHistoryUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ORDER + _constants2.default.WCS_HISTORY;
        var getOrderHistoryDetailsUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatOrderHistoryUrl, true);
        var methodForOrderHistory = 'GET';
        var messageData = {};

        logger.info("getOrderHistoryDetailsUrl: " + getOrderHistoryDetailsUrl);
        var requestCall = (0, _util.constructRequestWithToken)(getOrderHistoryDetailsUrl, methodForOrderHistory, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {

            var result = _userProfileMapper2.default.orderHistoryJSON(body);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to getOrderHistory in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getOrderHistory in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     * Method to get My Account - Personal Information of an user in WCS 
     * Request params : userId 
     * Request Method : GET
     */

    getPersonalInformation: function getPersonalInformation(req, res) {
        logger.info("inside getPersonalInformation");

        var userId = req.cookies.userId;
        var concatPersonalInformationUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PERSON + userId + _constants2.default.WCS_PROFILE_NAME;
        var getPersonalInformationDetailsUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatPersonalInformationUrl, true);
        var methodForPersonalInformation = 'GET';
        var messageData = {};

        logger.info("getPersonalInformationDetailsUrl: " + getPersonalInformationDetailsUrl);
        var requestCall = (0, _util.constructRequestWithToken)(getPersonalInformationDetailsUrl, methodForPersonalInformation, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {

            var result = _userProfileMapper2.default.personalInformationJSON(body);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to getPersonalInformation in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPersonalInformation in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     * Method to get My Account - Address Book of an user in WCS 
     * Request Method : GET
     */

    getAddressBook: function getAddressBook(req, res) {
        logger.info("inside getAddressBook");

        var concatAddressBookUrl = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PERSON_AT_SELF;
        var getAddressBookUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatAddressBookUrl, true);
        var methodForAddressBook = 'GET';
        var messageData = {};

        logger.info("getAddressBookUrl: " + getAddressBookUrl);
        var requestCall = (0, _util.constructRequestWithToken)(getAddressBookUrl, methodForAddressBook, messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {

            var result = _userProfileMapper2.default.addressBookJSON(body);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to getAddressBook in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getAddressBook in WCS: ', JSON.stringify(error));
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    }

};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  /* 
   * JSON Mapper for generating response for Order History
   */

  orderHistoryJSON: function orderHistoryJSON(body) {
    var converter = _jsonMapper2.default.makeConverter({
      recordSetTotal: 'recordSetTotal',
      resourceId: 'resourceId',
      recordSetCount: 'recordSetCount',
      recordSetComplete: 'recordSetComplete',
      recordSetStartNumber: 'recordSetStartNumber',
      Order: ['Order', _jsonMapper2.default.map({
        storeId: 'storeUniqueID',
        totalSalesTaxCurrency: 'totalSalesTaxCurrency',
        totalAdjustment: 'totalAdjustment',
        totalShippingTax: 'totalShippingTax',
        placedDate: 'placedDate',
        resourceId: 'resourceId',
        adjustment: ['adjustment', _jsonMapper2.default.map({
          amount: 'amount',
          displayLevel: 'displayLevel',
          usage: 'usage',
          code: 'code',
          currency: 'currency'
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
        totalAdjustmentCurrency: 'totalAdjustmentCurrency'
      })]
    });

    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for personal information of an user
   */

  personalInformationJSON: function personalInformationJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({
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
        zipCode: 'address.zipCode'
      },
      userInfo: {
        demographics: {
          age: 'demographics.age',
          dateOfBirth: 'demographics.dateOfBirth',
          gender: 'demographics.gender'
        },
        firstName: 'address.firstName',
        lastName: 'address.lastName',
        logonId: 'logonId',
        middleName: 'address.middleName',
        nickName: 'address.nickName',
        personTitle: 'personTitle',
        userId: 'userId'
      }
    });
    var result = converter(body);
    return result;
  },

  /* 
   * JSON Mapper for generating response for Address Book of an user
   */

  addressBookJSON: function addressBookJSON(body) {

    var converter = _jsonMapper2.default.makeConverter({

      resourceId: 'resourceId',
      defaultAddress: {
        firstName: 'firstName',
        lastName: 'lastName',
        nickName: 'nickName',
        email1: 'email1',
        phone1: 'phone1',
        addressType: 'addressType',
        addressId: 'addressId',
        addressLine: {
          addressLine1: 'addressLine.0',
          addressLine2: 'addressLine.1'
        },
        zipCode: 'zipCode',
        city: 'city',
        state: 'state',
        country: 'country',
        primary: 'primary'
      },
      addressList: ['contact', _jsonMapper2.default.map({
        firstName: 'firstName',
        lastName: 'lastName',
        nickName: 'nickName',
        email1: 'email1',
        phone1: 'phone1',
        addressType: 'addressType',
        addressId: 'addressId',
        addressLine: {
          addressLine1: 'addressLine.0',
          addressLine2: 'addressLine.1'
        },
        zipCode: 'zipCode',
        city: 'city',
        state: 'state',
        country: 'country',
        primary: 'primary'
      })]
    });
    var result = converter(body);
    return result;
  }

};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _registrationCtlr = __webpack_require__(85);

var _registrationCtlr2 = _interopRequireDefault(_registrationCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * router for registration
 */

router.post('/user', function (req, res) {
  _registrationCtlr2.default.registration(req, res);
});

exports.default = router;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _cartMapper = __webpack_require__(11);

var _cartMapper2 = _interopRequireDefault(_cartMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

  /* 
   * Method for Registration in WCS
   * Request Method : POST
   * Request Body : Registration body as in WCS
   */

  registration: function registration(req, res) {

    var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_REGISTRATION;
    logger.info("Registration URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
    var shoppingCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
    var method = 'POST';
    var messageData = req.body;
    var requestCall = (0, _util.constructRequestWithoutToken)(shoppingCartUrl, method, messageData);

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      logger.info("userId after registration" + data.userId);
      res.cookie(_constants2.default.WCS_ACCESS_TOKEN, data.WCToken);
      res.cookie(_constants2.default.WCS_TRUSTED_ACCESS_TOKEN, data.WCTrustedToken);
      res.cookie(_constants2.default.WCS_PERSONALIZATION_ID, data.personalizationID);
      res.cookie(_constants2.default.WCS_USER_ID, data.userId);
      res.send({
        "success": true
      });
    }).catch(function (error) {
      if (error) {
        logger.error('errors in service for Registration in WCS: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  }

};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _myAccountCtlr = __webpack_require__(87);

var _myAccountCtlr2 = _interopRequireDefault(_myAccountCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/**
 * router for login
 */
router.put('/resetPassword', function (req, res) {
  _myAccountCtlr2.default.resetPassword(req, res);
});

exports.default = router;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {
    resetPassword: function resetPassword(req, res) {
        var logonId = req.body.logonId;
        var logonPassword = req.body.logonPassword;
        var logonPasswordVerify = req.body.logonPasswordVerify;
        var messageData = {
            "logonId": logonId,
            "logonPassword": logonPassword,
            "logonPasswordVerify": logonPasswordVerify
        };
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PERSON + _constants2.default.WCS_AT_SELF + "?action=" + _constants2.default.WCS_UPDATE_USER_REGISTRATOIN;
        var resetPasswordURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("resetPasswordURL  = " + resetPasswordURL);
        var requestCall = (0, _util.constructRequestWithToken)(resetPasswordURL, 'PUT', messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            res.send({
                "success": true,
                "result": body
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('errors in service to resetPassword in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to resetPassword in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _paymentCtlr = __webpack_require__(89);

var _paymentCtlr2 = _interopRequireDefault(_paymentCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/**
 *  Route for getting payment instruction
 */
router.get('/getPaymentInstruction', function (req, res) {
  _paymentCtlr2.default.getPaymentInstruction(req, res);
});
/**
 *  Route for creating payment instruction
 */
router.post('/createPaymentInstruction', function (req, res) {
  _paymentCtlr2.default.createPaymentInstruction(req, res);
});
/**
 *  Route for updating payment instruction
 */
router.put('/putPaymentInstruction', function (req, res) {
  _paymentCtlr2.default.putPaymentInstruction(req, res);
});
/**
 *  Route for deleting payment instruction
 */
router.delete('/deletePaymentInstruction', function (req, res) {
  _paymentCtlr2.default.deletePaymentInstruction(req, res);
});

exports.default = router;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _paymentMapper = __webpack_require__(90);

var _paymentMapper2 = _interopRequireDefault(_paymentMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {
    /**
     * Method for getting payment instruction
     * Request method - GET
     */
    getPaymentInstruction: function getPaymentInstruction(req, res) {
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_AT_SELF + _constants2.default.WCS_PAYMENT_INSTRUCTION;
        var getPaymentInstructionUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Get payment instruction url = " + getPaymentInstructionUrl);
        var getPaymentInstructionCall = (0, _util.constructRequestWithToken)(getPaymentInstructionUrl, 'GET', '', (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(getPaymentInstructionCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            var result = _paymentMapper2.default.mapPaymentInstrutionJSON(body, (0, _util.requiredProtocolData)(body));
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            logger.error('errors in service to getPaymentInstruction in WCS: ', error);
            res.send({ "success": false, "error": error.response.body });
        });
    },
    /**
     * Method for creating payment instruction
     * Request body - Refer artifacts
     * Request method - POST
     */
    createPaymentInstruction: function createPaymentInstruction(req, res) {
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_AT_SELF + _constants2.default.WCS_PAYMENT_INSTRUCTION;
        var createPaymentInstructionUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Create payment instruction url = " + createPaymentInstructionUrl);
        var messageData = req.body;
        messageData.authToken = (0, _util.getTokens)(req).WCTrustedToken;
        var createPaymentInstructionCall = (0, _util.constructRequestWithToken)(createPaymentInstructionUrl, 'POST', messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(createPaymentInstructionCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            res.send({
                "success": true,
                "result": body
            });
        }).catch(function (error) {
            logger.error('errors in service to createPaymentInstruction in WCS: ', error);
            res.send({ "success": false, "error": error.response.body });
        });
    },
    /**
     * Method for updating payment instruction
     * Request body - Refer artifacts
     * Request method - PUT
     */
    putPaymentInstruction: function putPaymentInstruction(req, res) {
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_AT_SELF + _constants2.default.WCS_PAYMENT_INSTRUCTION;
        var updatePaymentInstructionUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Update payment instruction url = " + updatePaymentInstructionUrl);
        var messageData = req.body;
        var updatePaymentInstructionCall = (0, _util.constructRequestWithToken)(updatePaymentInstructionUrl, 'PUT', messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(updatePaymentInstructionCall).then(function (body) {
            res.send({
                "success": true,
                "result": body
            });
        }).catch(function (error) {
            logger.error('errors in service to updatePaymentInstruction in WCS: ', error);
            res.send({ "success": false, "error": error.response.body });
        });
    },
    /**
     * Method for deleting payment instruction
     * Request body - piId
     * Request method - DELETE
     */
    deletePaymentInstruction: function deletePaymentInstruction(req, res) {
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_AT_SELF + _constants2.default.WCS_PAYMENT_INSTRUCTION + _constants2.default.SLASH + req.body.piId;
        var deletePaymentInstructionUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("delete payment instruction url = " + deletePaymentInstructionUrl);
        var deletePaymentInstructionCall = (0, _util.constructRequestWithToken)(deletePaymentInstructionUrl, 'DELETE', '', (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(deletePaymentInstructionCall).then(function (body) {
            res.send({
                "success": true,
                "result": body
            });
        }).catch(function (error) {
            logger.error('errors in service to deletePaymentInstruction in WCS: ', error);
            res.send({ "success": false, "error": error.response.body });
        });
    }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mapPaymentInstrutionJSON: function mapPaymentInstrutionJSON(body, payment) {
        var paymentsData = payment.totalPaymentDataArray;
        var converter = _jsonMapper2.default.makeConverter({
            orderId: 'orderId',
            paymentInstruction: ['paymentInstruction', _jsonMapper2.default.map({
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
                piId: 'piId'
            })]
        });
        var result = converter(body);
        var jsonObj = result;
        for (var i = 0; i < paymentsData.length; i++) {
            var paymentInst = paymentsData[i];
            jsonObj.paymentInstruction[i].paymentData = paymentInst;
        }
        return jsonObj;
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _seoCtlr = __webpack_require__(9);

var _seoCtlr2 = _interopRequireDefault(_seoCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/**
 * router for retrieving the SEO keyword
 */
router.get('/seoKeyword', function (req, res) {
  _seoCtlr2.default.getSEOKeyword(req, res);
});

/**
 * router for retrieving the SEO details
 */
router.get('/seoDetails', function (req, res) {
  _seoCtlr2.default.getSEODetails(req, res);
});

exports.default = router;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _layoutCtlr = __webpack_require__(93);

var _layoutCtlr2 = _interopRequireDefault(_layoutCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/**
 * router for retrieving the layout specifications
 */
router.get('/layout', function (req, res) {
  _layoutCtlr2.default.getLayoutDetails(req, res);
});

/**
 * router for retrieving the Espots
 */
router.post('/espot', function (req, res) {
  _layoutCtlr2.default.getEspotDetails(req, res);
});

exports.default = router;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _seoCtlr = __webpack_require__(9);

var _seoCtlr2 = _interopRequireDefault(_seoCtlr);

var _util = __webpack_require__(5);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

  /* 
   * Method for layout in WCS
   * Request Method : GET
   * Request Body : objectId, device and pageGroup
   */

  getLayoutDetails: function getLayoutDetails(req, res) {

    var objectId = req.query.objectId;
    var deviceClass = req.query.device;
    var pageGroup = req.query.pageGroup;
    var tokenName = "CategoryToken";

    if (pageGroup == 'Category') {
      tokenName = "CategoryToken";
    } else if (pageGroup == 'Product') {
      tokenName = "ProductToken";
    }
    console.log("objectId::" + objectId);

    _seoCtlr2.default.getIdByKeyword(objectId, tokenName).then(function (value) {

      console.log("value:::" + value);

      var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_LAYOUT + "&objectIdentifier=" + value + "&deviceClass=" + deviceClass + "&pageGroup=" + pageGroup;
      logger.info("Layout URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
      var layoutUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
      var method = 'GET';
      var requestCall = (0, _util.constructRequestWithoutToken)(layoutUrl, method, '');

      (0, _requestPromise2.default)(requestCall).then(function (data) {
        var layoutData = JSON.parse(data);
        res.send(layoutData);
      }).catch(function (error) {
        if (error) {
          logger.error('errors in service for layoutUrl in WCS: ', error);
          res.send({ "success": false, "error": error });
        }
      });
    });
  },

  /* 
    * Method for Espot in WCS
    * Request Method : GET
    * Request Body : emsName
    */

  getEspotDetails: function getEspotDetails(req, res) {

    var emsName = req.body.emsName;
    var concatURL = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ESPOT + emsName;
    logger.info("espot URL" + (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true));
    var espotUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, concatURL, true);
    var method = 'GET';
    var requestCall = (0, _util.constructRequestWithoutToken)(espotUrl, method, '');

    (0, _requestPromise2.default)(requestCall).then(function (data) {
      var layoutData = JSON.parse(data);
      res.send(layoutData);
    }).catch(function (error) {
      if (error) {
        logger.error('errors in service for espotUrl in WCS: ', error);
        res.send({ "success": false, "error": error });
      }
    });
  }

};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _pdpRoutes = __webpack_require__(95);

var _pdpRoutes2 = _interopRequireDefault(_pdpRoutes);

var _promotionsRoutes = __webpack_require__(98);

var _promotionsRoutes2 = _interopRequireDefault(_promotionsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/wcs9/PDP', _pdpRoutes2.default);
app.use('/wcs9/promotions', _promotionsRoutes2.default);

exports.default = app;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _pdpCtlr = __webpack_require__(96);

var _pdpCtlr2 = _interopRequireDefault(_pdpCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
 * Router for getProductDetails
 */

router.get('/getProductDetails', function (req, res) {
  _pdpCtlr2.default.getProductDetails(req, res);
});

/**
 * Router for getting recently viewed products
 */
router.get('/getRecentlyViewedProducts', function (req, res) {
  _pdpCtlr2.default.getRecentlyViewedProducts(req, res);
});

exports.default = router;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = __webpack_require__(12);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(5);

var _pdpMapper = __webpack_require__(97);

var _pdpMapper2 = _interopRequireDefault(_pdpMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

	/*
  * Method for getting product details
  * Request Method: GET
  * Request Params: productId
  */

	getProductDetails: function getProductDetails(req, res) {
		var productId = req.query.productId;
		var resourceName = req.query.resourceName;
		var result = void 0;
		var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_PRODUCT_DETAILS_APPEND + productId + "?catalogId=" + _constants2.default.WCS_CATALOG_ID + "&langId=" + _constants2.default.WCS_LANG_ID;
		var pdpURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME, path, false);
		logger.info("getProductDetails post form url:" + pdpURL);
		var requestCall = (0, _util.constructRequestWithoutToken)(pdpURL, 'GET', '');
		(0, _requestPromise2.default)(requestCall).then(function (result) {
			return requestFunction(result);
		}).catch(function (error) {
			if (error.statusCode === 404 || error.statusCode === 500) {
				logger.error('error in service to getProductDetails in WCS: ', error);
				res.send({ "success": false, "error": error.response.body });
			} else {
				logger.error('errors in service to getProductDetails in WCS: ', error);
				res.send({ "success": false, "error": error.response.body.errors[0] });
			}
		});;
		var requestFunction = function requestFunction(data) {
			return new _bluebird2.default(function (resolve, reject) {
				if ((0, _util.isJson)(data)) data = JSON.parse(data);
				logger.info('data type', typeof data === 'undefined' ? 'undefined' : _typeof(data));
				var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_INV_AVL + productId;
				var invAvlURL = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, false);
				var requestCall = (0, _util.constructRequestWithoutToken)(invAvlURL, 'GET', '');
				logger.info("request call = " + JSON.stringify(requestCall));
				if (data.CatalogEntryView[0].productType == "ProductBean") {
					if (resourceName == "pdp") {
						result = _pdpMapper2.default.mapPdpJSON(data, true);
					} else if (resourceName == "qv" || resourceName == "cart") {
						result = _pdpMapper2.default.mapQuickViewJSON(Json.parse(data), true);
					}
					res.send({
						"success": true,
						"result": result
					});
				} else {
					(0, _requestPromise2.default)(requestCall).then(function (body) {
						if ((0, _util.isJson)(body)) body = JSON.parse(body);
						if (resourceName == "pdp") {
							result = _pdpMapper2.default.mapPdpJSON(data, body);
						} else if (resourceName == "qv" || resourceName == "cart") {
							result = _pdpMapper2.default.mapQuickViewJSON(data, body);
						}
						res.send({
							"success": true,
							"result": result
						});
					}).catch(function (error) {
						if (error.statusCode === 404 || error.statusCode === 500) {
							logger.error('error in service to getProductDetails in WCS: ', error);
							res.send({ "success": false, "error": error.response.body });
						} else {
							logger.error('errors in service to getProductDetails in WCS: ', error);
							res.send({ "success": false, "error": error.response.body.errors[0] });
						}
					});
				}
			});
		};
	},
	getRecentlyViewedProducts: function getRecentlyViewedProducts(req, res) {
		var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_ESPOT_RECENTLY_VIEWED_PRODUCTD;
		var getRecentlyViewedProductsUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
		logger.info("Get recently viewed products URL" + getRecentlyViewedProductsUrl);
		var requestCall = (0, _util.constructRequestWithToken)(getRecentlyViewedProductsUrl, 'GET', '', (0, _util.getTokens)(req));
		(0, _requestPromise2.default)(requestCall).then(function (body) {
			var result = _pdpMapper2.default.mapRecentlyViewedProductsJSON(JSON.parse(body));
			res.send({
				"success": true,
				"result": result
			});
		}).catch(function (error) {
			if (error.statusCode === 404 || error.statusCode === 401) {
				logger.error('errors in service to getRecentlyViewedProducts in WCS: ', error);
				res.send({ "success": false, "error": error.response.body });
			} else {
				logger.error('errors in service to getRecentlyViewedProducts in WCS: ', error);
				res.send({ "success": false, "error": error.response.body.errors[0] });
			}
		});
	}
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

var _constants = __webpack_require__(12);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	/* 
  * JSON Mapper for generating responses for PDP page 
  */

	mapPdpJSON: function mapPdpJSON(body, inv) {
		var converter = _jsonMapper2.default.makeConverter({
			catalogEntryView: ['CatalogEntryView', _jsonMapper2.default.map({
				hasSingleSKU: function hasSingleSKU(input) {
					if (inv == true) {
						return input.hasSingleSKU;
					}
					return;
				},
				uniqueId: 'uniqueID',
				parentCatalogGroupID: 'parentCategoryID',
				catalogEntryTypeCode: 'productType',
				buyable: 'buyable',
				store: 'storeID',
				listPrice: 'price.0.value',
				purchasePrice: 'price.1.value',
				code: 'partNumber',
				resourceId: 'resourceId',
				displayName: 'name',
				manufacturer: 'manufacturer',
				attributes: ['attributes', _jsonMapper2.default.map({
					displayable: 'displayable',
					name: 'name',
					identifier: 'identifier',
					values: ['values', _jsonMapper2.default.map({
						value: 'value',
						identifier: 'identifier',
						uniqueID: 'uniqueID',
						image: ['image1path', function (url) {
							if (url) {
								return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
							}
						}]
					})],
					usage: 'usage',
					sequence: 'sequence'
				})],
				merchandisingAssociations: ['merchandisingAssociations', _jsonMapper2.default.map({
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					uniqueID: 'uniqueID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})]
					})],

					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}],
					fullImage: ['fullImage', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				skus: ['sKUs', _jsonMapper2.default.map({
					skuId: 'uniqueID',
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})],
						usage: 'usage',
						sequence: 'sequence'
					})],
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}],
				fullImage: ['fullImage', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}]
			})]
		});
		var result = converter(body);
		var jsonObj = result;

		if (inv != true) {
			for (var i = 0; i < jsonObj.catalogEntryView.length; i++) {
				var invAvailability = inv.InventoryAvailability[i].inventoryStatus;
				var quantityAvailable = inv.InventoryAvailability[i].availableQuantity;

				jsonObj.catalogEntryView[i].availability = invAvailability;
				jsonObj.catalogEntryView[i].quantity = quantityAvailable;
			}
		}
		return jsonObj;
	},
	/* 
 * JSON Mapper for generating responses for Quick View page 
 */

	mapQuickViewJSON: function mapQuickViewJSON(body, inv) {
		var converter = _jsonMapper2.default.makeConverter({
			catalogEntryView: ['catalogEntryView', _jsonMapper2.default.map({
				hasSingleSKU: 'hasSingleSKU',
				uniqueId: 'uniqueID',
				catalogEntryTypeCode: 'catalogEntryTypeCode',
				buyable: 'buyable',
				store: 'storeID',
				listPrice: 'price.0.value',
				purchasePrice: 'price.1.value',
				code: 'partNumber',
				resourceId: 'resourceId',
				displayName: 'name',
				attributes: ['attributes', _jsonMapper2.default.map({
					displayable: 'displayable',
					name: 'name',
					identifier: 'identifier',
					values: ['values', _jsonMapper2.default.map({
						identifier: 'identifier',
						uniqueID: 'uniqueID',
						image: ['image1path', function (url) {
							if (url) {
								return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
							}
						}]
					})]
				})],
				skus: ['sKUs', _jsonMapper2.default.map({
					skuId: 'uniqueID',
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})]
					})],
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}],
				fullImage: ['fullImage', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}]
			})]
		});
		var result = converter(body);
		var jsonObj = result;

		for (var i = 0; i < jsonObj.catalogEntryView.length; i++) {
			var invAvailability = inv.InventoryAvailability[i].inventoryStatus;
			var quantityAvailable = inv.InventoryAvailability[i].availableQuantity;

			jsonObj.catalogEntryView[i].availability = invAvailability;
			jsonObj.catalogEntryView[i].quantity = quantityAvailable;
		}
		return jsonObj;
	},
	mapRecentlyViewedProductsJSON: function mapRecentlyViewedProductsJSON(body) {
		var converter = _jsonMapper2.default.makeConverter({
			resourceId: 'resourceId',
			recentlyViewedProducts: ['MarketingSpotData.0.baseMarketingSpotActivityData', _jsonMapper2.default.map({
				catalogEntryTypeCode: 'catalogEntryTypeCode',
				currency: 'currency',
				partNumber: 'productPartNumber',
				productId: 'productId',
				purchasePrice: 'standardPrice',
				listPrice: 'listPrice',
				description: ['description', _jsonMapper2.default.map({
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}],
					shortDescription: 'shortDescription',
					longDescription: 'longDescription',
					language: 'language',
					productName: 'productName'
				})],
				attributes: ['attributes', _jsonMapper2.default.map({
					name: 'name',
					stringValue: 'stringValue'
				})]
			})]

		});
		var result = converter(body);
		return result;
	},

	mapProductDetailBySingleIdJSON: function mapProductDetailBySingleIdJSON(body) {

		var converter = _jsonMapper2.default.makeConverter({
			catalogEntryView: ['catalogEntryView', _jsonMapper2.default.map({
				hasSingleSKU: 'hasSingleSKU',
				uniqueId: 'uniqueID',
				catalogEntryTypeCode: 'catalogEntryTypeCode',
				buyable: 'buyable',
				store: 'storeID',
				listPrice: 'price.0.value',
				purchasePrice: 'price.1.value',
				code: 'partNumber',
				resourceId: 'resourceId',
				displayName: 'name',
				attributes: ['attributes', _jsonMapper2.default.map({
					displayable: 'displayable',
					name: 'name',
					identifier: 'identifier',
					values: ['values', _jsonMapper2.default.map({
						identifier: 'identifier',
						uniqueID: 'uniqueID',
						image: ['image1path', function (url) {
							if (url) {
								return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
							}
						}]
					})]
				})],
				skus: ['sKUs', _jsonMapper2.default.map({
					skuId: 'uniqueID',
					hasSingleSKU: 'hasSingleSKU',
					catalogEntryTypeCode: 'catalogEntryTypeCode',
					buyable: 'buyable',
					store: 'storeID',
					listPrice: 'price.0.value',
					purchasePrice: 'price.1.value',
					code: 'partNumber',
					resourceId: 'resourceId',
					displayName: 'name',
					attributes: ['attributes', _jsonMapper2.default.map({
						displayable: 'displayable',
						name: 'name',
						identifier: 'identifier',
						values: ['values', _jsonMapper2.default.map({
							identifier: 'identifier',
							uniqueID: 'uniqueID',
							image: ['image1path', function (url) {
								if (url) {
									return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
								}
							}]
						})]
					})],
					thumbnail: ['thumbnail', function (url) {
						if (url) {
							return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
						}
					}]
				})],
				thumbnail: ['thumbnail', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}],
				fullImage: ['fullImage', function (url) {
					if (url) {
						return _constants2.default.WCS_DOUBLE_SLASH + _constants2.default.WCS_HOSTNAME_NOPORT + url;
					}
				}]
			})]

		});
		var result = converter(body);
		return result;
	}
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _promotionsCtlr = __webpack_require__(99);

var _promotionsCtlr2 = _interopRequireDefault(_promotionsCtlr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 *  Route for Get promo codes from cart
 */

router.get('/getPromoCodePromotionsAtCart', function (req, res) {
  _promotionsCtlr2.default.getPromoCodePromotionsAtCart(req, res);
});

/*
 *  Route for Apply promotion
 */

router.post('/apply', function (req, res) {
  _promotionsCtlr2.default.apply(req, res);
});

/*
 *  Route for Delete promotion
 */

router.post('/delete', function (req, res) {
  _promotionsCtlr2.default.delete(req, res);
});

exports.default = router;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(12);

var _constants2 = _interopRequireDefault(_constants);

var _promotionsMapper = __webpack_require__(100);

var _promotionsMapper2 = _interopRequireDefault(_promotionsMapper);

var _requestPromise = __webpack_require__(1);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = __webpack_require__(7);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _util = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _util.getLogger)();

exports.default = {

    /*
    * Method for getting promo codes applied in cart
    * Request Method : GET 
    */

    getPromoCodePromotionsAtCart: function getPromoCodePromotionsAtCart(req, res) {
        logger.info("inside getPromoCodePromotionsAtCart ctrl");
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_PROMOTIONS;
        var getPromoCodePromotionsAtCartUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Get Promo codes in Cart URL" + getPromoCodePromotionsAtCartUrl);
        var requestCall = (0, _util.constructRequestWithToken)(getPromoCodePromotionsAtCartUrl, 'GET', '', (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            var result = _promotionsMapper2.default.mapPromoCodesResultJSON(body);
            res.send({
                "success": true,
                "result": result
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     *  Method for applying promotion
     *  Request Body : promoCode
     *  Request Method : POST
     */

    apply: function apply(req, res) {
        var promoCode = req.body.promoCode;
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_PROMOTIONS;
        logger.info("promocode = " + promoCode);
        var applyUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Apply Promotion URL" + applyUrl);
        var messageData = {
            "promoCode": promoCode
        };
        var requestCall = (0, _util.constructRequestWithToken)(applyUrl, 'POST', messageData, (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            res.send({
                "success": true,
                "result": {
                    "orderId": body.orderId,
                    "promoCode": promoCode
                }
            });
        }).catch(function (error) {
            if (error.statusCode === 404) {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    },

    /*
     *  Method for deleting promotions
     *  Request Body : promoCode
     *  Request Method : DELETE
     */

    delete: function _delete(req, res) {
        var promoCode = req.body.promoCode;
        var path = _constants2.default.WCS_REST_URL + _constants2.default.WCS_STORE_ID + _constants2.default.WCS_CART_PROMOTIONS + "/" + promoCode;
        logger.info("promocode = " + promoCode);
        var deleteUrl = (0, _util.constructUrl)(_constants2.default.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("Delete Promotion URL " + deleteUrl);
        var requestCall = (0, _util.constructRequestWithToken)(deleteUrl, 'DELETE', '', (0, _util.getTokens)(req));
        (0, _requestPromise2.default)(requestCall).then(function (body) {
            if ((0, _util.isJson)(body)) body = JSON.parse(body);
            res.send({
                "success": true,
                "result": {
                    "orderId": body.orderId,
                    "promoCode": promoCode
                }
            });
        }).catch(function (error) {
            if (error.statusCode === 404 || error.statusCode === 400) {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body });
            } else {
                logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                res.send({ "success": false, "error": error.response.body.errors[0] });
            }
        });
    }
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonMapper = __webpack_require__(3);

var _jsonMapper2 = _interopRequireDefault(_jsonMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    /* 
     * JSON Mapper for mapping responses for promotions
     */

    mapPromotionsResultJSON: function mapPromotionsResultJSON(body) {
        var converter = _jsonMapper2.default.makeConverter({
            promotions: ['adjustment', _jsonMapper2.default.map({
                name: 'code',
                description: {
                    longDescription: '',
                    shortDescription: ''
                }
            })],
            orderId: 'orderId'
        });

        var result = converter(body);
        return result;
    },
    mapPromoCodesResultJSON: function mapPromoCodesResultJSON(body) {
        var converter = _jsonMapper2.default.makeConverter({
            promotions: ['promotionCode', _jsonMapper2.default.map({
                name: '',
                description: {
                    longDescription: 'associatedPromotion.0.description',
                    shortDescription: 'associatedPromotion.0.description'
                },
                code: 'code',
                promotionId: 'associatedPromotion.0.promotionId'
            })],
            orderId: 'orderId'
        });
        var result = converter(body);
        return result;
    }
};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ })
/******/ ]);