"use strict";
exports.__esModule = true;
exports.setcookie = void 0;
var uuid_1 = require("uuid");
require("reflect-metadata");
var Session_1 = require("../entity/Session");
function setcookie(request, response, repo) {
    if (request.cookies.userid === undefined) {
        var cookies = uuid_1.v4();
        var session = new Session_1.Session();
        session.userSession = cookies;
        session.writeCount = 0;
        repo.save(session);
        response.cookie('userid', cookies, { sameSite: 'none', secure: true });
    }
}
exports.setcookie = setcookie;
