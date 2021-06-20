"use strict";
exports.__esModule = true;
exports.createForm = void 0;
var getTime_1 = require("../../other/func/getTime");
require("reflect-metadata");
function createForm(repo, form) {
    //待補: 使用者次數驗證
    console.log(form);
    var time = getTime_1.getTime();
    form.startTime = time;
    return repo.save(form);
}
exports.createForm = createForm;
