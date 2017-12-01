import constants from '../../constants/wcs/constants';
import JM from 'json-mapper';

export default {

  getWishListJSON: function(body,req){

        let converter = JM.makeConverter({

          WishListId: "GiftList.0.uniqueID",

          itemList: ['GiftList.0.item', JM.map({
              wishListItemId: "giftListItemID",
              partNumber: "partNumber",
              productId: "productId"
              })]
        })

            let result = converter(body);
            return result;
  },

  addToWishListRequestMapperJSON: function(body){

        let result= {
            item: [
            {
              productId: body.productId,
              quantityRequested:  body.quantityRequested,

            }]
        }
       
        return JSON.parse(JSON.stringify(result));
  }

};
  
