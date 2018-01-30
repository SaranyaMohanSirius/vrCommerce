import express from 'express';
import address from '../../controllers/wcs/addressCtlr';

let router = express.Router();

/*
 *	Gets all the addresses associated with the user
 */

router.get('/getShippingAddresses', function(req, res){
    address.getShippingAddresses(res,req);
});

/*
 *  Add an address to an user in WCS
 */

router.post('/addShippingAddress', function(req, res){
    address.addShippingAddress(res,req);
});

/*
 *	Updtes an address in WCS
 */

router.put('/updateShippingAddress', function(req, res){
    address.updateShippingAddress(res,req);
});

/*
 *	Deletes an address in WCS
 */

router.delete('/deleteShippingAddress', function(req, res){
    address.deleteShippingAddress(res,req);
});

/*
 *	Associates an address to the order
 */

router.put('/selectShippingAddress', function(req, res){
    address.selectShippingAddress(res,req);
});

export default router;
