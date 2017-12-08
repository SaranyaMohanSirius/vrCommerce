import JM from 'json-mapper';

export default {

    /* 
     * JSON Mapper for mapping responses for promotions
     */

    mapPromotionsResultJSON: function(body){
        let converter = JM.makeConverter({
            promotions: ['adjustment',JM.map({
                name: 'code',
                description: {
                    longDescription: '',
                    shortDescription: ''
                }
            })],
            orderId: 'orderId'
        });
        
        let result = converter(body);
        return result;
    },
    mapPromoCodesResultJSON: function(body){
        let converter = JM.makeConverter({
            promotions: ['promotionCode',JM.map({
                name: '',
                description: {
                    longDescription: 'associatedPromotion.0.description',
                    shortDescription: 'associatedPromotion.0.description'
                },
                code: 'code',
                promotionId: 'associatedPromotion.0.promotionId'
            })],
            orderId: 'orderId'
        });
        let result = converter(body);
        return result;
    }
}