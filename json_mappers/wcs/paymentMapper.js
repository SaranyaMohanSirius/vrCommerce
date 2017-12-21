import JM from 'json-mapper';

export default {
    mapPaymentInstrutionJSON: function(body,payment){
        let paymentsData = payment.totalPaymentDataArray;
        let converter = JM.makeConverter({
            orderId: 'orderId',
            paymentInstruction:['paymentInstruction',JM.map({
                firstName: 'firstName',
                lastName: 'lastName',
                middleName: 'middleName',
                email1: 'email1',
                addressId: 'billing_address_id',
                addressLine: 'addressLine',
                city: 'city',
                state: 'state',
                country: 'country',
                postalCode: 'postalCode',
                payMethodId: 'payMethodId',      
                piAmount: 'piAmount',
                piCurrency: 'piCurrency',
                piDescription: 'piDescription', 
                piId:'piId'
          })], 
        });
        let result = converter(body);
        let jsonObj = result;
        for(let i = 0 ; i < paymentsData.length ; i++){
            let paymentInst = paymentsData[i];
            jsonObj.paymentInstruction[i].paymentData = paymentInst;
        }
        return jsonObj;
    }
}