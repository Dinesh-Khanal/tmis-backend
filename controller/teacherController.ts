import { Request, Response } from "express";
import Teacher from "../model/teacherModel";
import asyncHandler from "express-async-handler";
import AppError from "../utils/appError";

export const getTeacher = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const teachers = await Teacher.find();
    if (teachers) {
      res.status(200).json({
        success: true,
        teachers,
      });
    } else {
      throw new AppError("Could not foundt data", 500);
    }
  }
);
export const createTeacher = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const photo = req.file?.filename;
    const teacher = await Teacher.create({ ...req.body, photo });
    if (teacher) {
      res.status(200).json({
        success: true,
        teacher,
      });
    } else {
      throw new AppError("Could not foundt data", 500);
    }
  }
);
export const updateTeacher = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const photo = req.file?.filename;
    const teacher = await Teacher.findByIdAndUpdate(id, { ...req.body, photo });
    if (teacher) {
      res.status(200).json({
        success: true,
        teacher: { ...req.body, photo },
      });
    } else {
      throw new AppError("Could not foundt data", 500);
    }
  }
);
export const deleteTeacher = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const teacher = await Teacher.findById(id);
    if (teacher) {
      await teacher.remove();
      res.status(200).json({
        success: true,
        teacher,
      });
    } else {
      throw new AppError("Could not foundt data", 500);
    }
  }
);
