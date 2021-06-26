"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stroreUserData = void 0;
require("reflect-metadata");
var User_1 = require("../entity/User");
var Userrepo_1 = require("../EntityRepo/Userrepo");
function stroreUserData(userid) {
    var repo = Userrepo_1.createUserRepo();
    var session = new User_1.User();
    session.userSession = userid;
    repo.save(session);
}
exports.stroreUserData = stroreUserData;
