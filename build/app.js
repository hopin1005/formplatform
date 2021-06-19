"use strict";
exports.__esModule = true;
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("../router/UserController");
var app = routing_controllers_1.createExpressServer({
    routePrefix: '/api',
    controllers: [UserController_1.UserController]
});
// run express application on port 4000
app.listen(4000);
