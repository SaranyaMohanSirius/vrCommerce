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
        "WCToken": "14478%2CgYQ2vulS9ss1itrJk1%2FZlMy3w3EeHsA%2FfmosaCV3fT9tLX2p7zOt0nuYFnqfn3HjEAwIfXTMBDVT52Pv6ry2xUMx2ZWqMk5J0q2OO%2FZeqqdRjKlkmYPKs1OMYL4MkLEMat2pyKbcYXyAIg7QOyjHpZS4VtTfUnywxUJ%2B7CvzaTnlGJbIMvhs0TmPjCholCjJMFrGBs9lsXhaXcYgsfGVcaJj7QJDTNZ%2FzOBGib0SvwY%3D",
        "WCTrustedToken": "14478%2CP%2BaOsU1gAQm%2BnMOv4kA6iuyHO0gImAScQasJUylyWl4%3D"
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
