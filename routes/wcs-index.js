import express from "express";
import wcsPDPRoute from './wcs/pdpRoutes';
import wcsCategoryRoute from './wcs/categoryRoutes';
import wcsShipModeRoutes from './wcs/shipModeRoutes';
import wcsSearchRoute from './wcs/searchRoutes';
import wcsAddressRoute from './wcs/addressRoutes';

let app = express();

app.use('/wcs/PDP',wcsPDPRoute);
app.use('/wcs/category',wcsCategoryRoute);
app.use('/wcs/shipModes',wcsShipModeRoutes);
app.use('/wcs/search',wcsSearchRoute);
app.use('/wcs/address',wcsAddressRoute);

export default app;
