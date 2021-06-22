"use strict";
exports.__esModule = true;
exports.createUserRepo = void 0;
var User_1 = require("../entity/User");
var typeorm_1 = require("typeorm");
function createUserRepo() {
    return typeorm_1.getConnection().getRepository(User_1.User);
}
exports.createUserRepo = createUserRepo;
