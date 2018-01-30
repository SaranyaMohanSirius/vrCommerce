import constants from '../../constants/wcs/constants';
import {getLogger,
        isJson,
        getTokens,
        constructUrl,
        constructRequestWithToken,
       } from '../../util/wcs/util';
import requestPromise from 'request-promise';

let logger= getLogger();

export default{
    resetPassword: function(req,res) {
        let logonId = req.body.logonId;
        let logonPassword = req.body.logonPassword;
        let logonPasswordVerify = req.body.logonPasswordVerify;     
        let messageData = {
            "logonId": logonId,
            "logonPassword": logonPassword,
            "logonPasswordVerify": logonPasswordVerify      
        };
        let path = constants.WCS_REST_URL+constants.WCS_STORE_ID+constants.WCS_PERSON+constants.WCS_AT_SELF+"?action="+constants.WCS_UPDATE_USER_REGISTRATOIN;
        let resetPasswordURL = constructUrl(constants.WCS_HOSTNAME_NOPORT, path, true);
        logger.info("resetPasswordURL  = "+resetPasswordURL);
        let requestCall = constructRequestWithToken(resetPasswordURL,'PUT',messageData,getTokens(req));
        requestPromise(requestCall).then(function (body) {
            res.send({
                "success": true,
                "result": body
            });
            }).catch(function (error) {
                if(error.statusCode === 404){
                    logger.error('errors in service to resetPassword in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body });
                }else{
                    logger.error('errors in service to resetPassword in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body.errors[0] }); 
                }
            });

    }
}