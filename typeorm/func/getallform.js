"use strict";
exports.__esModule = true;
exports.getallform = void 0;
require("reflect-metadata");
//還有要過濾過期的問卷
function getallform(Repo, sort) {
    if (sort === 'normal') {
        return Repo.find();
    }
    if (sort === 'endTime') {
        return Repo.find({
            order: {
                endTime: "ASC"
            }
        });
    }
}
exports.getallform = getallform;
