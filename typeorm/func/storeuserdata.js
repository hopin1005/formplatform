"use strict";
exports.__esModule = true;
exports.stroreUserData = void 0;
require("reflect-metadata");
var User_1 = require("../entity/User");
var UserRepo_1 = require("../EntityRepo/UserRepo");
function stroreUserData(userid) {
    //createConnection();
    var repo = UserRepo_1.createUserRepo();
    var session = new User_1.User();
    session.userSession = userid;
    repo.save(session);
}
exports.stroreUserData = stroreUserData;
