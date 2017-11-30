import express from 'express';
import bodyParser from 'body-parser';
import {getLogger} from './util/elasticPath/util';
import epRoute from './routes/ep-index';
import wcsRoute from './routes/wcs-index';
let logger=getLogger();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let app = express();

app.use(express.static('WebContent'));
app.set('port', (process.env.PORT || 5000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Process application/json
app.use(bodyParser.json());

/**
 * App includes all the Routes
 */
app.all('/ep/*',epRoute);
app.all('/wcs/*',wcsRoute);

// Spin up the server
app.listen(app.get('port'), function() {
  logger.info('running on port', app.get('port'))
})


