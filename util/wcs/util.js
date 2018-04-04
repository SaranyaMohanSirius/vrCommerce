import constants from '../../constants/wcs/constants';
import { MongoClient } from 'mongodb';

module.exports = {
	constructUrl : function  (hostname, path, isHttp) {
		if(!isHttp){
			return "http://"+hostname+path;
		} else {
			return "https://"+hostname+path;
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
	
	getLogger: function(){
		var winston = require('winston');
		var logger = new (winston.Logger)({
		transports: [
		     new (winston.transports.Console)(),
		     new (winston.transports.File)({ filename: constants.WCS_LOG_DIR })
		   ]
		});
		return logger;
	}, 
	

	constructRequest:function(uri,method,data){		
		return {
			url: uri,
			method: method,
			json: data,
			headers: {
			  'Content-Type': 'application/json',
			  'WCToken' : constants.WCS_AUTH_TOKEN,
			  'WCTrustedToken' : constants.WCS_TRUSTED_TOKEN,

			}
		};
	},

	constructRequestWithToken:function(uri,method,data,tokens){
		return {
			url: uri,
			method: method,
			json: data,
			headers: {
			  'Content-Type': 'application/json',
				'WCToken': '14478%2C5BNxQ5rcuhCypChQ415EPoK7%2FJCiK%2BtSDBrlnEIzMKjanWjC3QmeFY%2B672d8QGuwIT9bhHHMfc1jKrGWCVyXx9kQ7GA7t%2FZ%2FOVe%2FN55WnjdSTRpM2N1zW1gtuvz4VpdAkq3849%2FRdq1MvTPm7HAKA%2FYGK7LgFWi7lz8EAtSq5mmPKdHUmLAJYKoDveBixiZLddK%2BrMSyugNhyhPEaUwOoJKit9e3c0yOIdv5VsYznzE%3D',
				'WCTrustedToken': '14478%2CnZO8Oy9gtTQXlFTYUB1QXIoTGo9suWgoodntnNZHCkw%3D'
			}
		};
	},

	constructRequestWithoutToken:function(uri,method,data){		
		return {
			url: uri,
			method: method,
			json: data,
			headers: {
			  'Content-Type': 'application/json',
			}
		};
	},
	getTokens:function(req){
        let authToken ={
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
	requiredProtocolData: function(body){

		let paymentDataArray = ["account","cc_cvc","expire_month","cc_brand","payment_method","expire_year"];
		let objectToBePassed = {
		  totalPaymentDataArray: []
		};
		body.paymentInstruction.filter(function(paymentInstructionData){
		  let protocolArray = paymentInstructionData.protocolData;
		  let totalPaymentArray = protocolArray.filter(function(paymentData){
			if(paymentDataArray.indexOf(paymentData.name) > -1)
			  return paymentData; 
			});
		  objectToBePassed.totalPaymentDataArray.push(totalPaymentArray);
		});
		return objectToBePassed;
	}
};
