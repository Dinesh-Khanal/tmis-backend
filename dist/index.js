"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Server is shutting down due to uncaught exception.");
    process.exit(1);
});
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv_1.default.config({
        path: "./config/config.env",
    });
}
(0, database_1.default)();
const PORT = Number(process.env.PORT) || 5000;
const server = app_1.default.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Server is shutting down due to unhandled promise rejection.");
    server.close(() => {
        process.exit(1);
    });
});
