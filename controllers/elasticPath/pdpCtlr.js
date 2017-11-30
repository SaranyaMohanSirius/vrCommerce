import constants from '../../constants/elasticPath/constants';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
import pdpMapper from '../../json_mappers/elasticPath/pdpMapper';
import requestPromise from 'request-promise';
let logger=getLogger();


module.exports = {

  /*Controller for getting the Product details to be displayed in the PDP page in EP*/
   getProductDetails: function(res,req){

    let token=constants.EP_ACCESS_TOKEN;
    let uri=req.query.productId;
    let concatURL = uri + constants.EP_PDP_ZOOM;   
    let pdpUrl = constructUrl(constants.EP_HOSTNAME_CORTEX, concatURL, false)
    logger.info("getProductDetails post form url:" + pdpUrl);	
    let messageData = {};
    let method ='GET';
    let requestCall = constructRequest(pdpUrl,method,messageData,token)
    requestPromise(requestCall).then(function (data) {
          let code = data._code[0].code;
				  let imageName = (code.split("-")[0]).toUpperCase();
				  imageName = imageName.replace(".", "-");
				  let concatImageURL =  constants.EP_AWS_IMAGE_PATH + imageName + constants.EP_IMAGE_FMT;
				  logger.info('Image URL: '+concatImageURL);
				  let result = pdpMapper.mapPdpJSON(data,concatImageURL); 
                  res.send({
                    "success": true ,
                    "result": result,                                            
                  });    
      }).catch(function (error) {
          if(error.response.body){
            logger.error('errors in service hit to login service: ', error.response.body);
            res.send({ "success": false, "error": error.response.body }); 
          }else{
            logger.error('errors in service to getProduct Details in EP: ', error);
            res.send({ "success": false, "error": error});
          }
      });
  } 

};
