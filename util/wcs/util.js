import constants from '../../constants/wcs/constants';
import {
  MongoClient
} from 'mongodb';

module.exports = {
  constructUrl: function(hostname, path, isHttp) {
    if (!isHttp) {
      return "http://" + hostname + path;
    } else {
      return "https://" + hostname + path;
    }
  },

  sendErrorMessage: function(res, errorMessage) {
    console.log("ERROR LOGGED: ", errorMessage);
    var error = {
      error: true,
      errorMessage: errorMessage
    }

    res.send(error);
  },

  getLogger: function() {
    var winston = require('winston');
    var logger = new(winston.Logger)({
      transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({
          filename: constants.WCS_LOG_DIR
        })
      ]
    });
    return logger;
  },


  constructRequest: function(uri, method, data) {
    return {
      url: uri,
      method: method,
      json: data,
      headers: {
        'Content-Type': 'application/json',
        'WCToken': constants.WCS_AUTH_TOKEN,
        'WCTrustedToken': constants.WCS_TRUSTED_TOKEN,

      }
    };
  },

  constructRequestWithToken: function(uri, method, data, tokens) {
    return {
      url: uri,
      method: method,
      json: data,
      headers: {
        'Content-Type': 'application/json',
        "WCToken": "14478%2Cmkb1ovoW5hq1Sk2BOw5twNQHA7tEYchhLpm1pjU78HIIf4JP0dttYrECygLlfxq8BIyIeAQqxpo%2FuQszJNUbg6Z4XydIzsguwoA81YixIPjr63ZlsHmaaolWuCs9fG3wKr9x8lD8OcUnoRLEdjkdZM1md9D33k%2Fcu7hvEEwfPYzcz1E9%2B2xQd8cZ1oEE7BqjfWtpoOPAZ%2BwNygMQ%2FuQJNjNcruy3eZxgQ0F0mfMvBVA%3D",
        "WCTrustedToken": "14478%2C5Du%2FUusPt%2Bf5VH2RMmWN9oMTT5W1RNoFB6WArgFjQW4%3D"
      }
    };
  },

  constructRequestWithoutToken: function(uri, method, data) {
    return {
      url: uri,
      method: method,
      json: data,
      headers: {
        'Content-Type': 'application/json',
      }
    };
  },
  getTokens: function(req) {
    let authToken = {
      "WCToken": req.cookies.access_token,
                  "WCTrustedToken": req.cookies.WCTrustedToken
    }
    return authToken;
  },
  isJson: function(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
  requiredProtocolData: function(body) {

    let paymentDataArray = ["account", "cc_cvc", "expire_month", "cc_brand", "payment_method", "expire_year"];
    let objectToBePassed = {
      totalPaymentDataArray: []
    };
    body.paymentInstruction.filter(function(paymentInstructionData) {
      let protocolArray = paymentInstructionData.protocolData;
      let totalPaymentArray = protocolArray.filter(function(paymentData) {
        if (paymentDataArray.indexOf(paymentData.name) > -1)
          return paymentData;
      });
      objectToBePassed.totalPaymentDataArray.push(totalPaymentArray);
    });
    return objectToBePassed;
  }
};
