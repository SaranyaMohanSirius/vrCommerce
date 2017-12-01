import express from 'express';
let router = express.Router();
import wishList from '../../controllers/elasticPath/wishListCtlr';

/**
 *  Add a Product to a Cart
 */
router.post('/addToWishList', function(req, res) {
	wishList.addToWishList(req,res);
});

export default router;