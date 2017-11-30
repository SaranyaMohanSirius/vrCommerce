import constants from '../../constants/wcs/constants';
import JM from 'json-mapper';

module.exports = {

  addToCartJSON: function(body,req){

  			let converter = JM.makeConverter({

  					orderItem: ['orderItem', JM.map({
						  orderItemId: "orderItemId"
						  })],
            		
                    orderId: "orderId",

                    addToCartMsg: constants.WCS_PRODUCT_ADDED
  			})

            let result = converter(body);
          	return result;
  }
};
