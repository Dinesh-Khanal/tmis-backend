import express, { Request, Response } from "express";
import cors from "cors"; //cross origin resource sharing
import path from "path";
import errorHandler from "./middleware/errorHandler";
import teacher from "./routes/teacherRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/frontend/build/")));

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});
app.use("/api", teacher);
app.use(errorHandler);
export default app;
