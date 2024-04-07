import Comments from "../models/Comments.js";

const CommentOnPost = async (req, res) => {
  try {
    //get the postId comment from req.body
    const { postId, comment } = req.body;
    //get the user's id from request object
    const { userId } = req;

    //create the comment
    const Comment = await Comments.create({
      comment,
      postId,
      userId,
    });
    return res.status(201).json({
      message: "Post comment successfully.",
      success: true,
      data: Comment,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default CommentOnPost;
