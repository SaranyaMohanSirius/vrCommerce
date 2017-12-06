import express from 'express';
import promotions from '../../controllers/elasticPath/promotionsCtlr';
import constants from '../../constants/elasticPath/constants';

let router = express.Router();


/*
 *  Route for Apply promotion
 */
 
router.post('/apply', function(req, res){
    promotions.apply(constants.EP_ACCESS_TOKEN,req,res);
});


export default router;