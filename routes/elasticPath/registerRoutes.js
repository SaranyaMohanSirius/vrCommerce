
import express from 'express';
import bodyParser from 'body-parser';
let router = express.Router();
import register from '../../controllers/elasticPath/registerCtlr';

router.use(bodyParser.json());

/**
* router for registering a user
*/
router.post('/register',function(req,res){
	register.register(req,res);
});

export default router;





