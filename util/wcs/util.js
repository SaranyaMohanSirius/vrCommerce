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
        'WCToken': '14478%2C2aK8jyUmMxCw1m2AWsuFxCc%2Bv4%2FPrxGrvDz6bXcpMwTdV82%2BwA6WzjejClK28gC%2FZhOqWyqIUDkQDFGae8NvWMYOGArmaQTdSL%2BL1U0tLvzgSNnd1iAZ4apWuNKEVuGX2lt4yDpx0ntyyqmEgHFq3unFhugMWBkjFqSDaRrVV0soQ1cETf%2FjozMDIbcVASG5saEFMl9D6vKB%2B9UoZNokC2LQ148QJ0o736c2CPhETpY%3D',
        'WCTrustedToken': '14478%2CgZpE7X1rNog0Thoi%2Boz2flKOGf7uFSjWBKlF2FaIKzg%3D'
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
