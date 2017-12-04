import express from 'express';
let router = express.Router();
import wishList from '../../controllers/wcs/wishListCtlr';

/* router for addToWishList */
router.post('/addToWishList', function(req, res){
    wishList.addToWishList(req,res);
});

/* router for deleteFromWishList */
router.post('/deleteFromWishList', function(req, res){
    wishList.deleteFromWishList(req,res);
}); 

/* router for getWishList */
router.get('/getWishList', function(req, res){
    wishList.getWishList(req,res);
}); 

/* router for addItemToShoppingCartFromWishList */
router.get('/moveWishListItemToCart', function(req, res){
    wishList.moveWishListItemToCart(req,res);
}); 

export default router;