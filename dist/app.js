"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //cross origin resource sharing
const path_1 = __importDefault(require("path"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const teacherRoutes_1 = __importDefault(require("./routes/teacherRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "/frontend/build/")));
app.get("/ping", (req, res) => {
    res.send("pong");
});
app.use("/api", teacherRoutes_1.default);
app.use(errorHandler_1.default);
exports.default = app;
