import JM from 'json-mapper';

export default {

  /*
   * JSON Mapper for mapping responses for the getting wishlist items in WCS
   */

  getWishListJSON: function(body,req){

        let converter = JM.makeConverter({

          wishListId: "GiftList.0.uniqueID",

          itemList: ['GiftList.0.item', JM.map({
              wishListItemId: "giftListItemID",
              partNumber: "partNumber",
              productId: "productId",
              quantity: "quantityRequested"
              })]
        })

            let result = converter(body);
            return result;
  },

  /*
   * JSON Mapper for mapping responses for the getting wishlist items in WCS
   */

  	getWishListLists: function(body,req){

        let converter = JM.makeConverter({

          wishListList: ['GiftList', JM.map({ 
        	  wishListId: "uniqueID",
        	  wishListName: "descriptionName",
        	  itemList: ['item', JM.map({
	              wishListItemId: "giftListItemID",
	              partNumber: "partNumber",
	              productId: "productId",
                quantity: "quantityRequested"
              })]
          })]
        })

            let result = converter(body);
            return result;
  },

  /*
   * JSON Mapper for mapping responses for the adding items to wishlist in WCS
   */

  addToWishListRequestMapperJSON: function(body){

        let result= {
            item: [
            {
              productId: body.productId,
              quantityRequested:  body.quantityRequested,

            }]
        }
       
        return JSON.parse(JSON.stringify(result));
  },
 
  /*
   * JSON Mapper for mapping responses for the moving items from wishlist to cart in WCS
   */

  moveToCartMapperJSON: function(productId,quantity){

      let result = {
        orderItem: [
        {
          productId: productId,
          quantity: quantity
        }
        ]
      }
      return JSON.parse(JSON.stringify(result));
  }

};
  
