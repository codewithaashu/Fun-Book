const DeletePost = async (req, res) => {
  try {
    console.log("testing");
    return res.status(201).json({ message: "Post deleted successfully." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default DeletePost;
