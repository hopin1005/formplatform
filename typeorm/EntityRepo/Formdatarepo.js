"use strict";
exports.__esModule = true;
exports.createFormRepo = void 0;
var Formdata_1 = require("../entity/Formdata");
var typeorm_1 = require("typeorm");
function createFormRepo() {
    return typeorm_1.getConnection().getRepository(Formdata_1.Formdata);
}
exports.createFormRepo = createFormRepo;
