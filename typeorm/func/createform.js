"use strict";
exports.__esModule = true;
exports.createForm = void 0;
var getTime_1 = require("../../other/func/getTime");
require("reflect-metadata");
var Formdatarepo_1 = require("../../typeorm/EntityRepo/Formdatarepo");
// {
//         "name": "formname5",
//               "info": "forminfo5",
//               "link": "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfxyTqWFQ-JYSqupN6hOWLbs9H3uQg3Ohb0ziMpe1whx3jwWw/viewform?embedded=true' width='640' height='377' frameborder='0' marginheight='0' marginwidth='0'>載入中…</iframe>",
//               "endTime": "2021-06-20"
// }
function createForm(form) {
    //待補: 使用者次數驗證
    //return success true
    var repo = Formdatarepo_1.createFormRepo();
    var time = getTime_1.getTime();
    form.startTime = time;
    return repo.save(form);
}
exports.createForm = createForm;
