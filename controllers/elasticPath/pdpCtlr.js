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
				let iName = (code.split("-")[0]).toUpperCase();
				iName = iName.replace(".", "-");
				imageNames[i] = iName;
			  }		  

			  for(let i=0; i< merchAssocSize; i++){
				  /*
				  let listPrice = data._recommendations[0]._crosssell[0]._element[i]._price[0].list-price[0].display;
				  let purchasePrice = data._recommendations[0]._crosssell[0]._element[i]._price[0].purchase-price[0].display;
				  */
				  let attributesList = data._recommendations[0]._crosssell[0]._element[i]._definition[0].details;
				  for(let i=0; i<attributesList.length; i++){
					attributes[i] = {
						  displayable: 'true',
						  usage: 'Descriptive',
						  /*
						  name: attributesList[i].display-name,
						  */
						  identifier: attributesList[i].name,
						  values: attributesList[i].value,
					};
				  }
				  crossellData[i] = {
						hasSingleSKU: 'hasSingleSKU',
						availability: data._recommendations[0]._crosssell[0]._element[i]._availability[0].state,
						catalogEntryTypeCode: 'catalogEntryTypeCode',				
						buyable: 'true',				
						store: constants.EP_STORE,			
						/*
						listPrice : data._recommendations[0]._crosssell[0]._element[i]._price[0].list-price[0].display,
						purchasePrice: data._recommendations[0]._crosssell[0]._element[i]._price[0].purchase-price[0].display,
						*/
						code: data._recommendations[0]._crosssell[0]._element[i]._code[0].code,
						resourceId : data._recommendations[0]._crosssell[0]._element[i]._code[0].links[0].uri,			
						/*
						displayName: data._recommendations[0]._crosssell[0]._element[i]._definition[0].display-name,	
						*/
						attributes: attributes,
				  };
			  }
		  }	
		  
		  if(typeof data._recommendations != "undefined"){
			  let merchAssoc = data._recommendations[0]._upsell[0]._element;
			  let merchAssocSize = merchAssoc.length;
			  for (var i=0; i<merchAssocSize; i++){
				codes[i] = data._recommendations[0]._upsell[0]._element[i]._code[0].code;
				let iName = (code.split("-")[0]).toUpperCase();
				iName = iName.replace(".", "-");
				imageNames[i] = iName;
			  }		  
			  let upsell = data._recommendations[0]._upsell[0]._element;
			  for(let i=0; i< upsell.length; i++){
				  /*
				  let listPrice = data._recommendations[0]._upsell[0]._element[i]._price[0].list-price[0].display;
				  let purchasePrice = data._recommendations[0]._upsell[0]._element[i]._price[0].purchase-price[0].display;
				  */
				  let attributesList = data._recommendations[0]._upsell[0]._element[i]._definition[0].details;
				  for(let i=0; i<attributesList.length; i++){
					attributes[i] = {
						  displayable: 'true',
						  usage: 'Descriptive',
						  /*
						  name: attributesList[i].display-name,
						  */
						  identifier: attributesList[i].name,
						  values: attributesList[i].value,
					};
				  }
				  upsellData[i] = {
						hasSingleSKU: 'hasSingleSKU',
						availability: data._recommendations[0]._upsell[0]._element[i]._availability[0].state,
						catalogEntryTypeCode: 'catalogEntryTypeCode',				
						buyable: 'true',				
						store: constants.EP_STORE,			
						/*
						listPrice : data._recommendations[0]._upsell[0]._element[i]._price[0].list-price[0].display,
						purchasePrice: data._recommendations[0]._upsell[0]._element[i]._price[0].purchase-price[0].display,
						*/
						code: data._recommendations[0]._upsell[0]._element[i]._code[0].code,
						resourceId : data._recommendations[0]._upsell[0]._element[i]._code[0].links[0].uri,			
						/*
						displayName: data._recommendations[0]._upsell[0]._element[i]._definition[0].display-name,	
						*/
						attributes: attributes,
				  };
			  }
		  }	
		  let recommendations = crossellData.concat(upsellData);
		  let result = pdpMapper.mapPdpJSON(data,concatImageURL,imageNames,recommendations); 
		  res.send({
			"success": true ,
			"result": result,                                            
		  });    
      }).catch(function (error) {
		  logger.info("Error:" + error);
            logger.error('errors in service to getProduct Details in EP: ', error);
            res.send({ "success": false, "error": error});
      });
  } 

};
