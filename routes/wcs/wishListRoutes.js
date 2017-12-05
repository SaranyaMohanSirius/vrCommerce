import express from 'express';
import wishList from '../../controllers/wcs/wishListCtlr';

let router = express.Router();

/* 
 * router for addToWishList 
 */

router.post('/addToWishList', function(req, res){
    wishList.addToWishList(req,res);
});

/* 
 * router for deleteFromWishList 
 */

router.post('/deleteFromWishList', function(req, res){
    wishList.deleteFromWishList(req,res);
}); 

/* 
 * router for getWishList 
 */

router.get('/getWishList', function(req, res){
    wishList.getWishList(req,res);
}); 

/* 
 * router for addItemToShoppingCartFromWishList 
 */

router.get('/moveWishListItemToCart', function(req, res){
    wishList.moveWishListItemToCart(req,res);
}); 

export default router;