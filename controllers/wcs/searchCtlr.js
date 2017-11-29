var util = require('../../util/wcs/util');
var constants = require('../../constants/wcs/constants');
var searchMapper = require('../../json_mappers/wcs/searchMapper');
var request = require('request');

var logger= util.getLogger();

module.exports = {
    getSearchResults: function(res,req){
        let keyword = req.query.keyword;
        let pageSize = req.query.pageSize;
        let currentPage = req.query.currentPage;
        
        var messageData = {
            "keywords": keyword,
            "pageSize": pageSize,
            "currentPage": currentPage      
        };
        let path = constants.WCS_PRODUCT_DETAILS+constants.WCS_STORE_ID+constants.WCS_PRODUCT_SEARCH_BY_KEYWORD+keyword+"?pageSize="+pageSize+"&pageNumber="+currentPage;
        logger.info(constants.WCS_HOSTNAME+path);
        request({
            url: util.constructUrl(constants.WCS_HOSTNAME, path, false),
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        },function(error,response,body){
            logger.info("error = "+error);
            if(!error){
                if(!body.errors){
                    var result = searchMapper.mapSearchResultJSON(body,messageData);                 
                    res.send({
                        "success": true ,
                        "result": result,                                            
                    }); 
                }
                else{
                    logger.error('errors in service to getSearchResults in EP: ', body.errors);								
                    res.send({ "success": false, "error": body.errors });
                  }
            }
            else{
                logger.error('errors in service to getSearchResults in EP: ', error);								
                res.send({ "success": false, "error": error });
            }
        }
    )
    }
}