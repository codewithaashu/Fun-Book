import Posts from "../models/Posts.js";

const CreatePost = async (req, res) => {
  try {
    //get the data i.e. send from frontend
    const { description, mediaSrc } = req.body;
    //get the user id i.e. decode from jwt
    const { id } = req;
    //create the post
    const post = await Posts.create({
      description,
      mediaSrc,
      userId: id,
    });
    return res
      .status(201)
      .json({ message: "Post Created Successfully.", data: post });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default CreatePost;
