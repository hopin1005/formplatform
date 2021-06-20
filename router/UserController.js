"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserController = void 0;
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var createform_1 = require("../typeorm/func/createform");
var getallform_1 = require("../typeorm/func/getallform");
var getoneform_1 = require("../typeorm/func/getoneform");
var typeorm_1 = require("typeorm");
var Formdata_1 = require("../typeorm/entity/Formdata");
var setcookie_1 = require("../typeorm/func/setcookie");
var User_1 = require("../typeorm/entity/User");
typeorm_1.createConnection();
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.home = function (request, response) {
        var repo = typeorm_1.getConnection().getRepository(User_1.User);
        var res = setcookie_1.setcookie(request, response, repo);
        return response.send(res);
    };
    UserController.prototype.getAll = function (sort) {
        var repo = typeorm_1.getConnection().getRepository(Formdata_1.Formdata);
        return getallform_1.getallform(repo, sort);
    };
    UserController.prototype.getOne = function (id) {
        var repo = typeorm_1.getConnection().getRepository(Formdata_1.Formdata);
        return getoneform_1.getoneform(repo, id);
    };
    UserController.prototype.create = function (form) {
        var repo = typeorm_1.getConnection().getRepository(Formdata_1.Formdata);
        return createform_1.createForm(repo, form);
    };
    __decorate([
        routing_controllers_1.Get('/setcookie'),
        __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Res())
    ], UserController.prototype, "home");
    __decorate([
        routing_controllers_1.Get('/getallform'),
        __param(0, routing_controllers_1.QueryParam("sort"))
    ], UserController.prototype, "getAll");
    __decorate([
        routing_controllers_1.Get('/getoneform/:id'),
        __param(0, routing_controllers_1.Param("id"))
    ], UserController.prototype, "getOne");
    __decorate([
        routing_controllers_1.Post('/createform'),
        __param(0, routing_controllers_1.Body())
    ], UserController.prototype, "create");
    UserController = __decorate([
        routing_controllers_1.JsonController()
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
