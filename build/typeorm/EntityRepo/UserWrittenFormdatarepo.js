"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserWrittenFormdataRepo = void 0;
var User_written_Formdata_1 = require("../entity/User_written_Formdata");
var typeorm_1 = require("typeorm");
function createUserWrittenFormdataRepo() {
    return typeorm_1.getConnection().getRepository(User_written_Formdata_1.UserWrittenFormdata);
}
exports.createUserWrittenFormdataRepo = createUserWrittenFormdataRepo;
