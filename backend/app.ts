require('dotenv').config();
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
const cors = require('cors')


import BitlyController from './controllers/bitly';
import DefaultErrorHandler from './middlewares';

const port = 3000;

import express = require('express');

// Create a new express application instance
const app: express.Application = express();
app.use(cors())
app.options('*', cors());

useExpressServer(app, {
  // register created express server in routing-controllers
  controllers: [BitlyController], // and configure it the way you need (controllers, validation, etc.)
  middlewares: [DefaultErrorHandler],
  defaultErrorHandler: false
});

app.listen(port, function () {
  console.log(`Personal Bitly on port ${port}!`);
});
