import express from 'express';
import login from '../../controllers/wcs9/loginCtlr';

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

/**
 * router for logout
 */
router.delete('/logoutUser', function(req, res){
    console.log("logout handler");
    login.logoutUser(req,res);
});

export default router;