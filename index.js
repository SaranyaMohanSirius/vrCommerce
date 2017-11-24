
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cron = require('node-cron');

var app = express();

app.use(express.static('WebContent'));
app.set('port', (process.env.PORT || 5000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Process application/json
app.use(bodyParser.json());

//Define Routes Here  
var epLoginRoute = require('./routes/elasticPath/loginRoutes');
var epSearchRoute = require('./routes/elasticPath/searchRoutes');
var epCategoryRoute = require('./routes/elasticPath/categoryRoutes');
var epPDPRoute = require('./routes/elasticPath/pdpRoutes');
var epCartRoute = require('./routes/elasticPath/cartRoutes');
var wcsPDPRoute = require('./routes/wcs/pdpRoutes');
var wcsCategoryRoute = require('./routes/wcs/categoryRoutes');


//This needs to be  refined based on the discussion with UI Team
app.use('/ep/login',epLoginRoute);
app.use('/ep/search',epSearchRoute);
app.use('/ep/category',epCategoryRoute);
app.use('/ep/PDP',epPDPRoute);
app.use('/ep/cart',epCartRoute);
app.use('/wcs/PDP',wcsPDPRoute);
app.use('/wcs/category',wcsCategoryRoute);


// Spin up the server
app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})


