const CreatePost = async (req, res) => {
  try {
    console.log("testing");
    return res.status(201).json({ message: "Post Created Successfully." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default CreatePost;
