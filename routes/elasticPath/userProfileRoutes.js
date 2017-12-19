import express from 'express';
let router = express.Router();
import userProfile from '../../controllers/elasticPath/userProfileCtlr';
import constants from '../../constants/elasticPath/constants';

/**
*	Gets the address associated with an user
*/
router.get('/getAddressBook', function(req, res) {
	userProfile.getAddressBook(req,res);
});

/* 
 * router for getting Order History
 */

router.get('/getOrderHistory', function(req, res){
    userProfile.getOrderHistory(req,res);
});


export default router;
