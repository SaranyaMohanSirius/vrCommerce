import JM from 'json-mapper';

export default {

	/*JSON mapper for getting promotion details of an order*/
	mapPromotionsResultJSON: function(body,orderId){

		let converter = JM.makeConverter({
            promotions: ['_coupon',JM.map({

                name: '_appliedpromotions.0._element.0.name',
                description: {
                    longDescription: '_appliedpromotions.0._element.0.display-description',
                    shortDescription: '_appliedpromotions.0._element.0.display-name'
                }
                
            })],
            orderId: JM.helpers.def(orderId)

        });
        
        let result = converter(body);
        return result;

	}

}