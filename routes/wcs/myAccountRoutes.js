import express from 'express';
import myAccount from '../../controllers/wcs/myAccountCtlr';

let router = express.Router();
/**
 * router for login
 */
router.put('/resetPassword', function(req, res){
    myAccount.resetPassword(req,res);
});

export default router;