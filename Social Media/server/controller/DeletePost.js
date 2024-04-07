import Posts from "../models/Posts.js";

const DeletePost = async (req, res) => {
  try {
    //get the post id from params
    const { postId } = req.params;
    //delete the post
    const deletedPost = await Posts.findByIdAndDelete(postId, { new: true });
    console.log(deletedPost);
    return res
      .status(201)
      .json({ message: "Post deleted successfully.", data: deletedPost });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default DeletePost;
