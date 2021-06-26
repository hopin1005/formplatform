"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var createform_1 = require("../typeorm/func/createform");
var getallform_1 = require("../typeorm/func/getallform");
var getoneform_1 = require("../typeorm/func/getoneform");
var typeorm_1 = require("typeorm");
var authMiddleware_1 = require("../middleware/authMiddleware");
var Formdata_1 = require("../typeorm/entity/Formdata");
var cancreateform_1 = require("../typeorm/func/cancreateform");
var successaddform_1 = require("../typeorm/func/successaddform");
var userwrittenform_1 = require("../typeorm/func/userwrittenform");
typeorm_1.createConnection();
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (sort, userid) {
        return getallform_1.getallform(sort);
    };
    UserController.prototype.getOne = function (id) {
        return getoneform_1.getoneform(id);
    };
    UserController.prototype.auth = function (userid) {
        return cancreateform_1.cancreateform(userid);
    };
    UserController.prototype.userWriteFormAdd = function (url, referer, userid) {
        return successaddform_1.successAddForm(url, referer, userid);
    };
    UserController.prototype.writtenForm = function (userid) {
        return userwrittenform_1.getUserWrittenForm(userid);
    };
    UserController.prototype.pathnotfound = function () {
        return "404 not found!!!";
    };
    UserController.prototype.create = function (form, userid) {
        return createform_1.createForm(form, userid);
    };
    __decorate([
        routing_controllers_1.Get('/getallform'),
        __param(0, routing_controllers_1.QueryParam("sort")), __param(1, routing_controllers_1.CookieParam("userid")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get('/getoneform/:id'),
        __param(0, routing_controllers_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getOne", null);
    __decorate([
        routing_controllers_1.Get('/cancreateform'),
        __param(0, routing_controllers_1.CookieParam("userid")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "auth", null);
    __decorate([
        routing_controllers_1.Get('/success'),
        __param(0, routing_controllers_1.QueryParam("url")), __param(1, routing_controllers_1.HeaderParam("Referer")), __param(2, routing_controllers_1.CookieParam("userid")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "userWriteFormAdd", null);
    __decorate([
        routing_controllers_1.Get('/writtenform'),
        __param(0, routing_controllers_1.CookieParam("userid")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "writtenForm", null);
    __decorate([
        routing_controllers_1.Get('/*'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "pathnotfound", null);
    __decorate([
        routing_controllers_1.Post('/createform'),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.CookieParam("userid")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Formdata_1.Formdata, String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "create", null);
    UserController = __decorate([
        routing_controllers_1.JsonController(),
        routing_controllers_1.UseBefore(authMiddleware_1.authMiddleware)
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
