"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./router/UserController");
require("reflect-metadata");
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
routing_controllers_1.useExpressServer(app, {
    routePrefix: '/api',
    controllers: [UserController_1.UserController]
});
// run express application on port 4000
app.listen(4000);
