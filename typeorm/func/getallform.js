"use strict";
exports.__esModule = true;
exports.getallform = void 0;
require("reflect-metadata");
var Formdatarepo_1 = require("../../typeorm/EntityRepo/Formdatarepo");
//還有要過濾過期的問卷
// select * from players
// where 
//     us_reg_date between '2000-07-05'
// and
//     DATE_ADD('2011-11-10',INTERVAL 1 DAY)
function getallform(sort) {
    var repo = Formdatarepo_1.createFormRepo();
    if (sort === 'normal') {
        return repo.find();
    }
    if (sort === 'endTime') {
        return repo.find({
            order: {
                endTime: "ASC"
            }
        });
    }
}
exports.getallform = getallform;
