import util from '../../util/wcs/util';
import constants from '../../constants/wcs/constants';
import searchMapper from '../../json_mappers/wcs/searchMapper';
import request from 'request';

let logger= util.getLogger();

module.exports = {
    getSearchResults: function(res,req){
        let keyword = req.query.keyword;
        let pageSize = req.query.pageSize;
        let currentPage = req.query.currentPage;
        
        let messageData = {
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
                    let result = searchMapper.mapSearchResultJSON(body,messageData);                 
                    res.send({
                        "success": true ,
                        "result": result,                                            
                    }); 
                }
                else{
                    logger.error('errors in service to getSearchResults in wcs: ', body.errors);								
                    res.send({ "success": false, "error": body.errors });
                  }
            }
            else{
                logger.error('errors in service to getSearchResults in wcs: ', error);								
                res.send({ "success": false, "error": error });
            }
        }
    )
    }
}