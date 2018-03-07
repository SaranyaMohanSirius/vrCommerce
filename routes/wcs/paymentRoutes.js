import express from 'express';
import payment from '../../controllers/wcs/paymentCtlr';

let router = express.Router();
/**
 *  Route for getting payment instruction
 */
router.get('/getPaymentInstruction', function(req,res){
    payment.getPaymentInstruction(req,res);
});
/**
 *  Route for creating payment instruction
 */
router.post('/createPaymentInstruction', function(req,res){
    payment.createPaymentInstruction(req,res);
});
/**
 *  Route for updating payment instruction
 */
router.put('/putPaymentInstruction', function(req,res){
    payment.putPaymentInstruction(req,res);
});
/**
 *  Route for deleting payment instruction
 */
router.post('/deletePaymentInstruction', function(req,res){
    payment.deletePaymentInstruction(req,res);
});

export default router;
