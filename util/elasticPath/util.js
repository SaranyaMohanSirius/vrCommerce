module.exports = {
	constructUrl : function  (hostname, path, isHttp) {
		if(!isHttp){
			if(hostname.startsWith("http://")){
				return hostname+path;
			}
			else{
				return "http://"+hostname+path;
			}
		} else {
			if(hostname.startsWith("https://")){
				return hostname+path;
			}
			else{
				return "https://"+hostname+path;
			}
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
		     new (winston.transports.File)({ filename: 'trace.log' })
		   ]
		});
		return logger;
	},
	
	constructRequest:function(uri,method,data,token){
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

	constructRequestWithoutToken:function(uri,method,data){
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
