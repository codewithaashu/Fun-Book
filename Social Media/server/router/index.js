//combine all router in  one file

import express from "express";
import AuthRouter from "./Auth.js";
import PostRouter from "./Post.js";

//create an instance of router
const router = express.Router();

//use the router in a file
router.use("/auth", AuthRouter);
router.use("/post", PostRouter);

export default router;
