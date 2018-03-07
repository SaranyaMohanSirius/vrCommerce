import express from 'express';
import register from '../../controllers/wcs9/registrationCtlr';

let router = express.Router();

/* 
 * router for registration
 */

router.post('/user', function(req, res){
    register.registration(req,res);
});


export default router;