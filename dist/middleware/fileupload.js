"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageUpload = void 0;
const multer_1 = __importDefault(require("multer"));
exports.imageUpload = (0, multer_1.default)({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|JPG)$/)) {
            // upload only png and jpg format
            return cb(new Error("Please upload a Image"));
        }
        cb(null, true);
    },
});
