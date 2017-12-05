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
    }
}