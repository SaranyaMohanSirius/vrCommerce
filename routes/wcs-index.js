import express from "express";
import wcsPDPRoute from './wcs/pdpRoutes';
import wcsCategoryRoute from './wcs/categoryRoutes';
import wcsShipModeRoutes from './wcs/shipModeRoutes';
import wcsSearchRoute from './wcs/searchRoutes';
import wcsAddressRoute from './wcs/addressRoutes';
import wcsCartRoute from './wcs/cartRoutes';
import wcsPromotionsRoute from './wcs/promotionsRoutes';
import wcsWishListRoute from './wcs/wishListRoutes';
import wcsProductByIdsRoute from './wcs/productByIdsRoutes';
import wcsLoginRoute from './wcs/loginRoute';


let app = express();

app.use('/wcs/PDP',wcsPDPRoute);
app.use('/wcs/category',wcsCategoryRoute);
app.use('/wcs/shipModes',wcsShipModeRoutes);
app.use('/wcs/search',wcsSearchRoute);
app.use('/wcs/address',wcsAddressRoute);
app.use('/wcs/cart',wcsCartRoute);
app.use('/wcs/promotions',wcsPromotionsRoute);
app.use('/wcs/wishlist',wcsWishListRoute);
app.use('/wcs/product',wcsProductByIdsRoute);
app.use('/wcs/login',wcsLoginRoute);

export default app;
