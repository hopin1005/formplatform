"use strict";
exports.__esModule = true;
exports.getallform = void 0;
require("reflect-metadata");
function getallform(Repo) {
    return Repo.find();
    //return getConnection().getRepository(Formdata).find();
}
exports.getallform = getallform;
