import express from "express";
import CreatePost from "../controller/CreatePost.js";
import DeletePost from "../controller/DeletePost.js";
import LikePost from "../controller/LikePost.js";
import CommentOnPost from "../controller/CommentOnPost.js";

const PostRouter = express.Router();

PostRouter.post("/create", CreatePost);
PostRouter.delete("/delete/:pid", DeletePost);
PostRouter.put("/like/:pid", LikePost);
PostRouter.put("/comment/:pid", CommentOnPost);

export default PostRouter;
