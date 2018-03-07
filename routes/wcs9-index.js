import express from "express";
import wcsPDPRoute from './wcs9/pdpRoutes';
import wcsCategoryRoute from './wcs9/categoryRoutes';
import wcsSearchRoute from './wcs9/searchRoutes';
import wcsPromotionsRoute from './wcs9/promotionsRoutes';
import wcsAddressRoute from './wcs9/addressRoutes';
import wcsLoginRoute from './wcs9/loginRoute';
import wcsRegistrationRoute from './wcs9/registrationRoutes';

let app = express();

app.use('/wcs9/PDP',wcsPDPRoute);
app.use('/wcs9/search',wcsSearchRoute);
app.use('/wcs9/category',wcsCategoryRoute);
app.use('/wcs9/promotions',wcsPromotionsRoute);
app.use('/wcs9/address',wcsAddressRoute);
app.use('/wcs9/login',wcsLoginRoute);
app.use('/wcs9/register',wcsRegistrationRoute);

export default app;
