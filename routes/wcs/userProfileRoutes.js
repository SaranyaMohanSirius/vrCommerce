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
 * router for getting Personal Information
 */
 
router.get('/getPersonalInformation', function(req, res){
    userProfile.getPersonalInformation(req,res);
});

export default router;