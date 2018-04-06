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
        'WCToken': "14478%2CKotCFZVlIGiDO%2FDG1%2Bz5M8kStWe%2FEum68xUx3yo%2Bd1g6RcWjTAz3mEsC11wkrQ95nVmW0p7eCUQUYHjhieraPIXzXh141BfkqIBrpnuELQQcOHwCFV8J8hK7%2FSCX8Ul2Z0fq%2FKMsZkQ%2FGXR%2FpvFbKJhn1%2BbVcFtD9ltTr56IbIkQq51bdA6yYqd2Svv%2FhEzCQnJ%2FK%2B1f2UTmnE7w7EGoEeG54OB3gaVZQkJ0VfBgJnM%3D",
        'WCTrustedToken': '14478%2CK957vjX5nYq9FF1uYm%2FK91LawM7czH3nAAVP0%2FcuNqU%3D'
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
