"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Formdata = void 0;
var typeorm_1 = require("typeorm");
var Formdata = /** @class */ (function () {
    function Formdata() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Formdata.prototype, "id");
    __decorate([
        typeorm_1.Column("varchar", {
            length: 60
        })
    ], Formdata.prototype, "name");
    __decorate([
        typeorm_1.Column("varchar", {
            length: 1500
        })
    ], Formdata.prototype, "info");
    __decorate([
        typeorm_1.Column("varchar", {
            length: 400
        })
    ], Formdata.prototype, "link");
    __decorate([
        typeorm_1.Column("date")
    ], Formdata.prototype, "endTime");
    __decorate([
        typeorm_1.Column("date")
    ], Formdata.prototype, "startTime");
    Formdata = __decorate([
        typeorm_1.Entity()
    ], Formdata);
    return Formdata;
}());
exports.Formdata = Formdata;
