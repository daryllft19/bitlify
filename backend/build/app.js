"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var cors = require('cors');
var bitly_1 = __importDefault(require("./controllers/bitly"));
var middlewares_1 = __importDefault(require("./middlewares"));
var port = 3000;
var express = require("express");
// Create a new express application instance
var app = express();
app.use(cors());
app.options('*', cors());
routing_controllers_1.useExpressServer(app, {
    // register created express server in routing-controllers
    controllers: [bitly_1.default],
    middlewares: [middlewares_1.default],
    defaultErrorHandler: false
});
app.listen(port, function () {
    console.log("Personal Bitly on port " + port + "!");
});
