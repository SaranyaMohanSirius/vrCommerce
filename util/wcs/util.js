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
			  'WCToken': tokens[0].WCToken,
              'WCTrustedToken': tokens[0].WCTrustedToken
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

	getAuthTokensFromDB: function(userId){

		return new Promise(function(resolve,reject){
		// Use connect method to connect to the Server
		MongoClient.connect(constants.MONGO_DB_URL, function(err, db) {
			  if (err){
			  	reject(err);
			  	throw err;
			  } 
			   db.collection("users").find({userId}).toArray(function(err, result) {
			    if (err) throw err;
			    resolve(result);
			    });

			  db.close();
			});
		
		})
	}

};
