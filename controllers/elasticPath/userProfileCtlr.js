import requestPromise from 'request-promise';
import constants from '../../constants/elasticPath/constants';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
import userProfileMapper from '../../json_mappers/elasticPath/userProfileMapper';
import {checkAndGetAuthToken } from '../../controllers/elasticPath/loginCtlr';
let logger=getLogger();


module.exports = {

  /*Controller for getting address book in EP*/
  getAddressBook: function(req,res){

	  let messageData = {};
	  let token = req.cookies.access_token;
	  let conCatUrl = constants.EP_ADDRESS_BOOK + constants.EP_ADDRESS_BOOK_ZOOM;
	  let getAddressBookURL = constructUrl(constants.EP_HOSTNAME, conCatUrl, false);
	  logger.info('getAddressBook url: ',  getAddressBookURL);
	  let method ='GET';
	  let requestCall = constructRequest(getAddressBookURL,method,messageData,token)

	  requestPromise(requestCall).then(function (data) {
			  let result = userProfileMapper.getAddressBookJSON(data);
			  res.send({
				"success" : true ,
				"result"  : result
			});
	  }).catch(function (error) {
			if(error.response.body){
			  logger.error('errors in service to get AddressBook in EP: ', error.response.body);
			  res.send({ "success": false, "error": error.response.body });
			}else{
			  logger.error('errors in service to get AddressBook in EP: ', error);
			  res.send({ "success": false, "error": error});
			}
	  });

  },

  /**
   * Controller for getting Order History in EP.
   * Method : GET
   *
   */

   getOrderHistory: function(req,res){
		let token = req.cookies.access_token;
		let messageData = {};
		let concattUrl =  constants.EP_DEFAULT_PROFILE + constants.EP_GET_ORDER_HISTORY_ZOOM;
		let getOrderHistoryUrl = constructUrl(constants.EP_HOSTNAME_CORTEX, concattUrl, false);
		logger.info('getOrderHistoryUrl URL ', getOrderHistoryUrl);
		let method ='GET';
		let requestCall = constructRequest(getOrderHistoryUrl,method,JSON.parse(JSON.stringify(messageData)),token);
		requestPromise(requestCall).then(function (data) {
			  let result = userProfileMapper.getOrderHistoryJSON(JSON.parse(JSON.stringify(data)));
			  res.send({
				"success": true ,
				"result": result
			  });
		}).catch(function (error) {
			  logger.error('errors in service to get Order History in EP: ', error);
			  res.send({ "success": false, "error": error});
		});
  },

  /*
   * Method to get My Account - Personal Information of an user in EP
   * Request params : userId
   * Request Method : GET
   */

   getPersonalInformation : function(req,res){
       logger.info("inside getPersonalInformation");
       let token = req.cookies.access_token;
 		   let messageData = {};
 		   let concatPersonalInformationUrl =  constants.EP_DEFAULT_PROFILE + constants.EP_GET_PERSONAL_INFO_ZOOM;
       let getPersonalInformationDetailsUrl = constructUrl(constants.EP_HOSTNAME_CORTEX,concatPersonalInformationUrl,false);
       let methodForPersonalInformation = 'GET';
       logger.info("getPersonalInformationDetailsUrl: "+ getPersonalInformationDetailsUrl);
       let requestCall = constructRequest(getPersonalInformationDetailsUrl,methodForPersonalInformation,JSON.parse(JSON.stringify(messageData)),token)
       requestPromise(requestCall).then(function (body) {
           let result = userProfileMapper.personalInformationJSON(body);
           res.send({
               "success": true ,
               "result": result
           });
           }).catch(function (error) {
           if (typeof error.statusCode == String(undefined) || String(error.statusCode).startsWith("4")){
               logger.error('errors in service to getPersonalInformation in EP: ', JSON.stringify(error));
               res.send({ "success": false, "error": error.response.body });
           }else{
               logger.error('errors in service to getPersonalInformation in EP: ', JSON.stringify(error));
               res.send({ "success": false, "error": error.response.body.errors[0] });
           }
           });
   },


};
