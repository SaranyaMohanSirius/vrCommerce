import express from 'express';
import vr from '../../controllers/wcs/vrCtlr';

let router = express.Router();

//	"userId" : "14477"
/*
 *  Route for Get product details
 */

router.get('/getProductDetails', function(req, res){
    vr.getProductDetails(req,res);
});

/*
 *  Route for Get cart details
 */

router.get('/getcartDetails', function(req, res){
    vr.getCartDetails(req,res);
});

/*
 *  Route for add to cart
*/

router.post('/addToCart', function(req, res){
    vr.addToCart(req,res);
});

/*
 *  Route for checkout
*/

router.post('/checkout', function(req, res){
    vr.submitOrder(req,res, true);
});

router.get('/buy', function(req, res){
    vr.buyItem(req, res);
});
router.get('/getIntent', function(req, res){
    console.log('Inside');
    vr.getIntent(req, res);
});
export default router;
