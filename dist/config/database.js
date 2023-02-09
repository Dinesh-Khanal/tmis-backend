"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = () => {
    mongoose_1.default.connect(process.env.DB_URI).then((data) => {
        console.log(`MongoDb is connected to the host ${data.connection.host}.`);
    });
};
exports.default = dbConnect;
