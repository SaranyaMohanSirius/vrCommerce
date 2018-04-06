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
        'WCToken': "14478%2CkLRK2pvfKRpVy7IQsJhhaM3hvK6e3VnKXAeh%2BLPcJB%2F%2FdOGOyNejrpjNbZnEKZ1r82BYoeU7VcJPuU4g0%2FzOPEfdg7tp4kBiYiO%2BPQ9qkIB7diNDWxYCOejPztc%2FidC2Jo5FjVAHjL4S%2FcrGuSQys0XqAy%2B9wIX3DMV5Zx5Tz2Dq4GQ8y6MejBb0974jiuHgDbcSSp0PwPz9Nj8AxIVNGi0Mw%2B1vyqCoQJWvg3upYKk%3D",
        'WCTrustedToken': '14478%2CeJRJ0i9F0kJ%2F2wWTx%2FyCH18J%2Fqdd4x4eqf7llNbLUpk%3D'
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
