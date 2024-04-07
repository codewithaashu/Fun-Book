//combine all router in  one file

import express from "express";
import AuthRouter from "./Auth.js";
import PostRouter from "./Post.js";
import CommentRouter from "./Comment.js";
import FriendRouter from "./Friend.js";

//create an instance of router
const router = express.Router();

//use the router in a file
router.use("/auth", AuthRouter);
router.use("/post", PostRouter);
router.use("/comment", CommentRouter);
router.use("/friend", FriendRouter);
export default router;
