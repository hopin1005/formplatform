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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formdata = void 0;
var typeorm_1 = require("typeorm");
var Formdata = /** @class */ (function () {
    function Formdata() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Formdata.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            length: 60
        }),
        __metadata("design:type", String)
    ], Formdata.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            length: 1500
        }),
        __metadata("design:type", String)
    ], Formdata.prototype, "info", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            length: 400
        }),
        __metadata("design:type", String)
    ], Formdata.prototype, "link", void 0);
    __decorate([
        typeorm_1.Column("date"),
        __metadata("design:type", String)
    ], Formdata.prototype, "endTime", void 0);
    __decorate([
        typeorm_1.Column("date"),
        __metadata("design:type", String)
    ], Formdata.prototype, "startTime", void 0);
    Formdata = __decorate([
        typeorm_1.Entity()
    ], Formdata);
    return Formdata;
}());
exports.Formdata = Formdata;
