"use strict";
exports.__esModule = true;
exports.setcookie = void 0;
var uuid_1 = require("uuid");
require("reflect-metadata");
var User_1 = require("../entity/User");
function setcookie(request, response, repo) {
    if (request.cookies.userid === undefined) {
        var cookies = uuid_1.v4();
        var session = new User_1.User();
        session.userSession = cookies;
        repo.save(session);
        response.cookie('userid', cookies, { sameSite: 'none', secure: true });
    }
}
exports.setcookie = setcookie;
