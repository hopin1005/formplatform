"use strict";
exports.__esModule = true;
exports.formRepo = void 0;
var Formdata_1 = require("../entity/Formdata");
var typeorm_1 = require("typeorm");
exports.formRepo = typeorm_1.getConnection().getRepository(Formdata_1.Formdata).find();
