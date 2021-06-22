"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.cancreateform = void 0;
var UserWrittenFormdatarepo_1 = require("../../typeorm/EntityRepo/UserWrittenFormdatarepo");
var UserRepo_1 = require("../EntityRepo/UserRepo");
function cancreateform(userid) {
    //userid = "a9ef3d81-081e-4939-b711-097bd8eea5f6"
    var createRepo = UserWrittenFormdatarepo_1.createUserWrittenFormdataRepo();
    var userRepo = UserRepo_1.createUserRepo();
    var resTrue = {
        "success": "true"
    };
    var resFalse = {
        "success": "false"
    };
    return userWrittenCount();
    function userWrittenCount() {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, userWrittenForm, userWrittenCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, userRepo.findOne({
                            select: ["id"],
                            where: {
                                userSession: userid
                            }
                        })];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, createRepo.findAndCount({
                                where: {
                                    userId: user === null || user === void 0 ? void 0 : user.id
                                }
                            })];
                    case 2:
                        _a = _b.sent(), userWrittenForm = _a[0], userWrittenCount = _a[1];
                        if (userWrittenCount >= 3) {
                            return [2 /*return*/, resTrue];
                        }
                        else {
                            return [2 /*return*/, resFalse];
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
}
exports.cancreateform = cancreateform;
