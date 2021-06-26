"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getoneform = void 0;
require("reflect-metadata");
var Formdatarepo_1 = require("../../typeorm/EntityRepo/Formdatarepo");
function getoneform(id) {
    var repo = Formdatarepo_1.createFormRepo();
    return repo.find({
        where: {
            id: id
        }
    });
}
exports.getoneform = getoneform;
