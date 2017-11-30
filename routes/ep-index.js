
import express from "express";
import epLoginRoute from './elasticPath/loginRoutes';
import epSearchRoute from './elasticPath/searchRoutes';
import epCategoryRoute from './elasticPath/categoryRoutes';
import epPDPRoute from './elasticPath/pdpRoutes';
import epCartRoute from './elasticPath/cartRoutes';
import epShipModeRoute from './elasticPath/shipModeRoutes';
import epAddressRoute from './elasticPath/addressRoutes';

let app = express();

    app.use('/ep/login',epLoginRoute);
    app.use('/ep/search',epSearchRoute);
    app.use('/ep/category',epCategoryRoute);
    app.use('/ep/PDP',epPDPRoute);
    app.use('/ep/cart',epCartRoute);
    app.use('/ep/shipModes',epShipModeRoute);
    app.use('/ep/address',epAddressRoute);
    
export default app;


