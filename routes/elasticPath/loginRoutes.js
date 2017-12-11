
import express from 'express';
import bodyParser from 'body-parser';
let router = express.Router();
import login from '../../controllers/elasticPath/loginCtlr';

router.use(bodyParser.json());

/**
 * router for login
 */
router.post('/loginIdentityHandler', function(req, res){
    login.loginIdentityHandler(req,res);
});

export default router;





