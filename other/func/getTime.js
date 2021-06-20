"use strict";
exports.__esModule = true;
exports.getTime = void 0;
var moment = require("moment");
function getTime() {
    var format = "YYYY-MM-DD";
    var date = new Date();
    var dateTime = moment(date).format(format);
    return dateTime;
}
exports.getTime = getTime;
