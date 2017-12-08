import express from 'express';
import login from '../../controllers/wcs/loginCtlr';

let router = express.Router();
/**
 * router for login
 */
router.post('/loginIdentityHandler', function(req, res){
    login.loginIdentityHandler(req,res);
});
/**
 * router for guest login
 */
router.post('/guestIdentityHandler', function(req, res){
    console.log("guest handler");
    login.guestIdentityHandler(req,res);
});

export default router;