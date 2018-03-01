import express from 'express';
import userProfile from '../../controllers/wcs/userProfileCtlr';

let router = express.Router();

/* 
 * router for getting Order History 
 */

router.get('/getOrderHistory', function(req, res){
    userProfile.getOrderHistory(req,res);
});

/* 
 * router for getting Order Detail 
 */

router.get('/getOrderDetails', function(req, res){
    userProfile.getOrderDetails(req,res);
});


/* 
 * router for getting Personal Information
 */
 
router.get('/getPersonalInformation', function(req, res){
    userProfile.getPersonalInformation(req,res);
});

/* 
 * router for getting Address Book
 */
 
router.get('/getAddressBook', function(req, res){
    userProfile.getAddressBook(req,res);
});

export default router;