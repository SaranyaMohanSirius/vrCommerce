import express from 'express';
let router = express.Router();
import wishList from '../../controllers/elasticPath/wishListCtlr';

/**
 *  Add a Product to WishList
 */
router.post('/addToWishList', function(req, res) {
	wishList.addToWishList(req,res);
});

/**
 *   Get Wishlist
 */
router.get('/getWishList', function(req, res) {
	wishList.getWishList(req,res);
});

export default router;