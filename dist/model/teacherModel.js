"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teacherSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("teacher", teacherSchema);
