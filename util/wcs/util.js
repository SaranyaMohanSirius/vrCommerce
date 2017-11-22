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
		     new (winston.transports.File)({ filename: 'trace.log' })
		   ]
		});
		return logger;
	} 
  
};
