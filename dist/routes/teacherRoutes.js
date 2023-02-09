"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacherController_1 = require("../controller/teacherController");
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)();
router.route("/teachers").get(teacherController_1.getTeacher);
router.route("/teacher/new").post(upload.none(), teacherController_1.createTeacher);
router.route("/teacher/:id").put(upload.none(), teacherController_1.updateTeacher);
router.route("/teacher/:id").delete(teacherController_1.deleteTeacher);
exports.default = router;
