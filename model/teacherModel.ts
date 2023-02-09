import mongoose, { Schema, model } from "mongoose";

interface ITeacher {
  name: string;
  email: string;
  address: string;
  fatherName: string;
  dob: Date;
  subject: string;
  photo: string;
}
const teacherSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
  address: String,
  fatherName: String,
  dob: Date,
  subject: String,
  photo: String,
});
export default model<ITeacher>("teacher", teacherSchema);
