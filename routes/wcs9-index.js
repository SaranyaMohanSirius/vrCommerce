import express from "express";
import wcsPDPRoute from './wcs9/pdpRoutes';
import wcsCategoryRoute from './wcs9/categoryRoutes';
import wcsSearchRoute from './wcs9/searchRoutes';
import wcsPromotionsRoute from './wcs9/promotionsRoutes';

let app = express();

app.use('/wcs9/PDP',wcsPDPRoute);
app.use('/wcs9/search',wcsSearchRoute);
app.use('/wcs9/category',wcsCategoryRoute);
app.use('/wcs9/promotions',wcsPromotionsRoute);

export default app;
