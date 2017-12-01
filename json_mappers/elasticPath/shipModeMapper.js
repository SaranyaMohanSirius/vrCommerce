import constants from '../../constants/elasticPath/constants';
import JM from 'json-mapper';

module.exports = {

  /*json Mapper for mapping the shipModes in EP*/ 
  mapShipModeJSON: function(body){
		
		let converter = JM.makeConverter({
		
			usableShippingMode: ['_order.0._deliveries.0._element.0._shippingoptioninfo.0._selector', JM.map({
				
				choice: ['_choice', JM.map({
					carrier: '_description.0.carrier',
					displayName: '_description.0.display-name',
					name: '_description.0.name',
					shipModeId: '_selectaction.0.self.uri',
					cost: '_description.0.cost'
				})],

				chosen: ['_chosen', JM.map({
					carrier: '_description.0.carrier',
					displayName: '_description.0.display-name',
					name: '_description.0.name',
					shipModeId: '_selectaction.0.self.uri',
					cost: '_description.0.cost'
				})],

			})],
		});
	    
		let result = converter(body);
        return result;

  }          

};
