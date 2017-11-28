var express = require('express');
var app = express();

//Elastic Path Routes
var epLoginRoute = require('./elasticPath/loginRoutes');
var epSearchRoute = require('./elasticPath/searchRoutes');
var epCategoryRoute = require('./elasticPath/categoryRoutes');
var epPDPRoute = require('./elasticPath/pdpRoutes');
var epCartRoute = require('./elasticPath/cartRoutes');
var epShipModeRoute = require('./elasticPath/shipModeRoutes');
var epAddressRoute = require('./elasticPath/addressRoutes');

//Websphere Commerce Routes
var wcsPDPRoute = require('./wcs/pdpRoutes');
var wcsCategoryRoute = require('./wcs/categoryRoutes');
var wcsShipModeRoutes = require('./wcs/shipModeRoutes');
var wcsSearchRoute = require('./wcs/searchRoutes');


module.exports = function (app) {
    app.use('/ep/login',epLoginRoute);
    app.use('/ep/search',epSearchRoute);
    app.use('/ep/category',epCategoryRoute);
    app.use('/ep/PDP',epPDPRoute);
    app.use('/ep/cart',epCartRoute);
    app.use('/ep/shipModes',epShipModeRoute);
    app.use('/ep/address',epAddressRoute);

    app.use('/wcs/PDP',wcsPDPRoute);
    app.use('/wcs/category',wcsCategoryRoute);
    app.use('/wcs/shipModes',wcsShipModeRoutes);
    app.use('/wcs/search',wcsSearchRoute);
};

//This needs to be  refined based on the discussion with UI Team


