"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserController = void 0;
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAllForm = function () {
        return 'This action returns all users';
    };
    __decorate([
        routing_controllers_1.Get('/getallform')
    ], UserController.prototype, "getAllForm");
    UserController = __decorate([
        routing_controllers_1.JsonController()
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
