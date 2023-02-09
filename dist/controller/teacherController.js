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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeacher = exports.updateTeacher = exports.createTeacher = exports.getTeacher = void 0;
const teacherModel_1 = __importDefault(require("../model/teacherModel"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const appError_1 = __importDefault(require("../utils/appError"));
exports.getTeacher = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teachers = yield teacherModel_1.default.find();
    if (teachers) {
        res.status(200).json({
            success: true,
            teachers,
        });
    }
    else {
        throw new appError_1.default("Could not foundt data", 500);
    }
}));
exports.createTeacher = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const photo = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const teacher = yield teacherModel_1.default.create(Object.assign(Object.assign({}, req.body), { photo }));
    if (teacher) {
        res.status(200).json({
            success: true,
            teacher,
        });
    }
    else {
        throw new appError_1.default("Could not foundt data", 500);
    }
}));
exports.updateTeacher = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = req.params.id;
    const photo = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
    const teacher = yield teacherModel_1.default.findByIdAndUpdate(id, Object.assign(Object.assign({}, req.body), { photo }));
    if (teacher) {
        res.status(200).json({
            success: true,
            teacher: Object.assign(Object.assign({}, req.body), { photo }),
        });
    }
    else {
        throw new appError_1.default("Could not foundt data", 500);
    }
}));
exports.deleteTeacher = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const teacher = yield teacherModel_1.default.findById(id);
    if (teacher) {
        yield teacher.remove();
        res.status(200).json({
            success: true,
            teacher,
        });
    }
    else {
        throw new appError_1.default("Could not foundt data", 500);
    }
}));
