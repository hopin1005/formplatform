"use strict";
exports.__esModule = true;
exports.getoneform = void 0;
require("reflect-metadata");
function getoneform(repo, id) {
    return repo.find({
        where: {
            id: id
        }
    });
}
exports.getoneform = getoneform;
