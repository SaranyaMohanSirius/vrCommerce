import JM from 'json-mapper';

export default {

    /**
    *   JSON Mapper for mapping responses for applied promotions
    */
    // mapPromotionsResultJSON: function(body){
    //     let converter = JM.makeConverter({
    //         promotions: ['_appliedpromotions.0._element',JM.map({
    //             name: 'name',
    //             description: {
    //                 longDescription: 'display-description',
    //                 shortDescription: 'display-name'
    //             }
    //         })],
    //         orderId: JM.helpers.def('')
    //     });
        
    //     let result = converter(body);
    //     return result;
    // },


	/*JSON mapper for getting promotion details of an order*/
	mapPromoCodePromotionsResultJSON: function(body){

		let converter = JM.makeConverter({
            promotions: ['_order.0._couponinfo.0._coupon',JM.map({

                name: '_appliedpromotions.0._element.0.name',
                description: {
                    longDescription: '_appliedpromotions.0._element.0.display-description',
                    shortDescription: '_appliedpromotions.0._element.0.display-name',
                },
                code: 'code',
                promotionId: 'self.uri'
            })],
            orderId: JM.helpers.def('')

        });
        
        let result = converter(body);
        return result;

	}

}