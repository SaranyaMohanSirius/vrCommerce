import express from "express";
import wcsPDPRoute from './wcs9/pdpRoutes';
import wcsPromotionsRoute from './wcs9/promotionsRoutes';

let app = express();

app.use('/wcs9/PDP',wcsPDPRoute);
app.use('/wcs9/promotions',wcsPromotionsRoute);

export default app;
