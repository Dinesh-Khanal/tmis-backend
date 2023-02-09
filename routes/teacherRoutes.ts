import express, { Router } from "express";
import {
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controller/teacherController";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.route("/teachers").get(getTeacher);
router.route("/teacher/new").post(upload.none(), createTeacher);
router.route("/teacher/:id").put(upload.none(), updateTeacher);
router.route("/teacher/:id").delete(deleteTeacher);
export default router;
