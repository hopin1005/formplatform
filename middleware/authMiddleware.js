"use strict";
exports.__esModule = true;
exports.authMiddleware = void 0;
var uuid_1 = require("uuid");
var storeuserdata_1 = require("../typeorm/func/storeuserdata");
function authMiddleware(req, res, next) {
    var cookieParser = require('cookie-parser');
    var cookies = uuid_1.v4();
    cookieParser();
    if (req.cookies.userid === undefined) {
        storeuserdata_1.stroreUserData(cookies);
        res.cookie('userid', cookies, { sameSite: 'none', secure: true });
    }
    next();
}
exports.authMiddleware = authMiddleware;
