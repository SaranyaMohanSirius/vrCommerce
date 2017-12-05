import JM from 'json-mapper';

export default {

  /*
   * JSON Mapper for mapping the Shipmodes in WCS
   */

  mapShipModeJSON: function(body){
		
		let converter = JM.makeConverter({
		
			usableShippingMode: [{
				choice:['usableShippingMode', JM.map({
					carrier: 'field2',
					shipModeId: 'shipModeId',
					displayName: 'shipModeDescription',
					name: 'shipModeCode',
				})],
				
			}],
		});
	    
		let result = converter(body);
        return result;

  }          

};
