import {getLogger,constructUrl,constructRequestWithoutToken,isJson} from '../../util/wcs/util';
import constants from '../../constants/wcs/constants';
import searchMapper from '../../json_mappers/wcs/searchMapper';
import requestPromise from 'request-promise';

let logger= getLogger();

export default {

   /*
    * Method for getting product results based on keyword  
    * Request Method: GET
    * Request Params: keyword, pageSize, currentPage
    */

    getSearchResults: function(req,res){
        let keyword = req.query.keyword;
        let pageSize = req.query.pageSize;
        let currentPage = req.query.currentPage;     
        let messageData = {
            "pageSize": pageSize,
            "currentPage": currentPage      
        };
        logger.info(constants.WCS_HOSTNAME+path);
        let path = constants.WCS_PRODUCT_DETAILS+constants.WCS_STORE_ID+constants.WCS_PRODUCT_SEARCH_BY_KEYWORD+keyword+"?pageSize="+pageSize+"&pageNumber="+currentPage;
        if(req.query.orderBy){
                let orderBy = req.query.orderBy;
                path = path + "&orderBy=" + orderBy; 
        }
        let searchURL = constructUrl(constants.WCS_HOSTNAME, path, false);
        logger.info("search url = "+searchURL);
        let requestCall = constructRequestWithoutToken(searchURL,'GET','')
        requestPromise(requestCall).then(function (body) {
            if(isJson(body)) body = JSON.parse(body);
            let result = searchMapper.mapSearchResultJSON(body,messageData);  
            res.send({
                "success": true,
                "result": result
            });
            }).catch(function (error) {
                if(error.statusCode === 404){
                    logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body });
                }else{
                    logger.error('errors in service to getPromotionsAtCart in WCS: ', error);
                    res.send({ "success": false, "error": error.response.body.errors[0] }); 
                }
            });
    }
}