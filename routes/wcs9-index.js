import express from "express";
import wcsPDPRoute from './wcs9/pdpRoutes';

let app = express();

app.use('/wcs9/PDP',wcsPDPRoute);

export default app;
