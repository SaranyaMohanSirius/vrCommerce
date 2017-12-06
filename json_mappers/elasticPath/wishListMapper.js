import {getLogger} from '../../util/elasticPath/util';
import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';
let logger=getLogger();

export default {
  /**
   * json mapper for mapping WishList
   */
        getWishListJSON: function(body){
            let result="";
            //Condition for checking the empty Body
            if(body._lineitems){
                let converter = JM.makeConverter({
                    wishListId:'links.0.uri',
                    itemList : ['_lineitems.0._element', JM.map({
                    wishListItemId:'self.uri',
                    partNumber:'_item.0._code.0.code',
                    productId:'_item.0._code.0.links.0.uri',  
                    })],
                    recordSetCount: ['_lineitems.0._element', function(arr){
                             return arr.length;
                    }], 
                    recordSetStartNumber:JM.helpers.def(''),
                    recordSetTotal:JM.helpers.def(''),
                    });
                     result = converter(body);
                    
            }else{
                let converter = JM.makeConverter({
                    wishListId:'links.0.uri',
                    recordSetCount: JM.helpers.def('0'),
                    recordSetStartNumber:JM.helpers.def(''),
                    recordSetTotal:JM.helpers.def('0'),
               });
                result = converter(body);
            }
         
            return result;
        },
        /**
         * json mapper for mapping WishList
         */
        getMoveWishListJSON: function(body){
            let jsonResponse = {
                orderItem: [
                    {
                        orderItemId: body.self.uri
                    }
                ]
               };      
                return JSON.parse(JSON.stringify(jsonResponse));
        }       
                
};