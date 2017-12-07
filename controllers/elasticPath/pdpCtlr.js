import constants from '../../constants/elasticPath/constants';
import {getLogger,
        constructUrl,
        constructRequest} from '../../util/elasticPath/util';
import pdpMapper from '../../json_mappers/elasticPath/pdpMapper';
import requestPromise from 'request-promise';
let logger=getLogger();
import JM from 'json-mapper';
import extendify from 'extendify';
import _ from 'underscore';


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
		  let codes = [];
		  let imageNames = [];
		  let crossellData = [];
		  let upsellData = [];
		  let attributes = [];

		  if(typeof data._recommendations != "undefined"){
			  let merchAssoc = data._recommendations[0]._crosssell[0]._element;
			  let merchAssocSize = merchAssoc.length;
			  for (var i=0; i<merchAssocSize; i++){
				codes[i] = data._recommendations[0]._crosssell[0]._element[i]._code[0].code;
				let iName = (codes[i].split("-")[0]).toUpperCase();
				iName = iName.replace(".", "-");
				imageNames.push(iName);
			  }		  

			  for(let i=0; i< merchAssocSize; i++){
				  crossellData[i] = pdpMapper.convertMerchAssoc(data._recommendations[0]._crosssell[0]._element[i]);
			  }
		  }	
		  
		  if(typeof data._recommendations != "undefined"){
			  let merchAssoc = data._recommendations[0]._upsell[0]._element;
			  let merchAssocSize = merchAssoc.length;
			  for (var i=0; i<merchAssocSize; i++){
				codes[i] = data._recommendations[0]._upsell[0]._element[i]._code[0].code;
				let iName = (codes[i].split("-")[0]).toUpperCase();
				iName = iName.replace(".", "-");
				imageNames.push(iName);
			  }		  
			  for(let i=0; i< merchAssocSize; i++){
				upsellData[i] = pdpMapper.convertMerchAssoc(data._recommendations[0]._upsell[0]._element[i]);
			  }
		  }	
		  
		  let recommendations = crossellData.concat(upsellData);
		  let result = pdpMapper.mapPdpJSON(data,concatImageURL,imageNames,recommendations); 
		  res.send({
			"success": true ,
			"result": result,                                            
		  });    
      }).catch(function (error) {
            logger.error('errors in service to getProduct Details in EP: ', error);
            res.send({ "success": false, "error": error});
      });
  }
  
};
