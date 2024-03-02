import express from "express";
import { connectDB } from "./Config/Database.js";
import dotenv from "dotenv";
import StudentRouter from "./Routes/StudentRouter.js";
import ResultRouter from "./Routes/ResultRouter.js";
import AdminRouter from "./Routes/AdminRouter.js";
import LoginRouter from "./Routes/LoginRouter.js";
const app = express();
dotenv.configDotenv();
app.get("/", (req, res) => {
  res.send("Hello I am Server");
});
app.use(express.json());
connectDB();
app.use("/api/student", StudentRouter);
app.use("/api/result", ResultRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/login", LoginRouter);
app.listen("8000", () => {
  console.log("I am listening at port 8000");
});
