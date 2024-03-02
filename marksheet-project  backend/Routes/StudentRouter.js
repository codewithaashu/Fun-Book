import express from "express";
import RegisterStudent from "../Controller/RegisterStudent.js";
import DeleteStudent from "../Controller/DeleteStudent.js";
import UpdateStudent from "../Controller/UpdateStudent.js";
import StudentsList from "../Controller/StudentsList.js";
const StudentRouter = express.Router();
StudentRouter.route("/").post(RegisterStudent).get(StudentsList);
StudentRouter.route("/:id").put(UpdateStudent).delete(DeleteStudent);
export default StudentRouter;
