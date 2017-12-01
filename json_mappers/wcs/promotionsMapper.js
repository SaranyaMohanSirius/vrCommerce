var JM = require('json-mapper');

export default  {
    mapPromotionsResultJSON: function(body){
        var converter = JM.makeConverter({
            promotions: ['adjustment',JM.map({
                name: 'code',
                description: {
                    longDescription: '',
                    shortDescription: ''
                }
            })],
            orderId: 'orderId'
        });
        
        var result = converter(body);
        return result;
    }
}