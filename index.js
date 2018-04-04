import express from 'express';
import bodyParser from 'body-parser';
import wcsRoute from './routes/wcs-index';
import cookieParser from 'cookie-parser';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let app = express();

app.use(express.static('WebContent'));
app.set('port', (process.env.PORT || 5000));
app.use(cookieParser());

//To Allow Cross Domain
var allowCrossDomain = function(req, res, next) {
	var allowedOrigins = ['http://localhost:4200', 'http://project-c-web-app.herokuapp.com', 'https://project-c-web-app.herokuapp.com', 'http://127.0.0.1:4200','http://34.216.254.83:4200','http://34.216.254.83:5000'];
 	var origin = req.headers.origin;
 	if(allowedOrigins.indexOf(origin) > -1){
      res.setHeader('Access-Control-Allow-Origin', origin);
 	}
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Cookie');
    res.header('Access-Control-Allow-Credentials', true);

    next();
}


app.use(allowCrossDomain);
    
// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Process application/json
app.use(bodyParser.json());


/**
 * App includes all the Routes
 */
app.all('/wcs/*',wcsRoute);
app.all('/vr/*',wcsRoute);

// Spin up the server
app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})


