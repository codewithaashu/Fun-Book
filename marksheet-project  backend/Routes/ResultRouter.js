import express from "express";
import DeclareResult from "../Controller/DeclareResult.js";
import ResultsList from "../Controller/ResultsList.js";
import UpdateResult from "../Controller/UpdateResult.js";
import DeleteResult from "../Controller/DeleteResult.js";
const ResultRouter = express.Router();
ResultRouter.route("/").post(DeclareResult).get(ResultsList);
ResultRouter.route("/:id").put(UpdateResult).delete(DeleteResult);
export default ResultRouter;
