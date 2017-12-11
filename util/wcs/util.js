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
			  'WCToken': tokens.WCToken,
              'WCTrustedToken': tokens.WCTrustedToken
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
	}
	

};
