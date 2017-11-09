var constants = require('./constants');
var util = require('./util');
var request = require('request');
var database = require('./databaseUtil');
var q = require('q');
var gampee = require("gampee");
var rp = require('request-promise');
var Promise = require('promise');

var _ = require("underscore");

var globalcount = 0;
module.exports = {

  guestLogin: function(res) {

	messageData = {};
	console.log("url:" + util.constructUrl(constants.EP_HOSTNAME, constants.EP_GUEST_LOGIN, false));
	request({
      url: util.constructUrl(constants.EP_HOSTNAME, constants.EP_GUEST_LOGIN, false),
      method: 'POST',
	  json: messageData,
	  headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'none'
      },
    }, function(error, response, body) {
      if (!error) {
        if (!body.errors) {
		  console.log("access_token: " + body.access_token);
		  res.send({
                "success": true,
                "authorization_code": body.access_token
              });
		  
        } else {
          console.log('errors in service hit to login service');
          console.log(body.errors);
          res.send({ "success": false, "error": body.errors });
        }
      } else {
        console.log('commerce error');
        console.log(error);
        res.send({ "success": false, "error": error });
      }
    });

  },

};
