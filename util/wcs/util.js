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

    getAuthTokensFromDB: function(userId){
        return new Promise(function(resolve,reject){
        // Use connect method to connect to the Server
        MongoClient.connect(constants.MONGO_DB_URL, function(err, db) {
              if (err){
                reject(err);
                throw err;
              } 
              db.collection("users").findOne({userId},function(err, result) {
                if (err) throw err;
                resolve(result);
                });
              db.close();
            });
        })
    },
    updateToken: function(WCToken,userId,WCTrustedToken){
	        MongoClient.connect(constants.MONGO_DB_URL, function(err, db) {
	            if (err) throw err;
	            //winston.info("Database connected!");
	            let findBy = {
					"userId": userId
	            }
	            let newEntries = {
	                "userId": userId,
	                "WCToken": WCToken,
	                "WCTrustedToken": WCTrustedToken
	            };
	            db.collection(constants.MONGO_DB_COLLECTION_USERS).updateOne(findBy, newEntries, function(err, res) {
	                if (err) throw err;
	                //winston.info("tokens update = "+res);
	            });
	            db.close();
	        });
	    },
    insertToken: function(WCToken,userId,WCTrustedToken){
        MongoClient.connect(constants.MONGO_DB_URL, function(err, db) {
            if (err) throw err;
            //winston.info("Database connected!");
            let newEntries = {
                "userId": userId,
                "WCToken": WCToken,
                "WCTrustedToken": WCTrustedToken
            };
            db.collection(constants.MONGO_DB_COLLECTION_USERS).insertOne(newEntries, function(err, res) {
                if (err) throw err;
                //winston.info("tokens insert = "+res);
            });
            db.close();
        });
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
