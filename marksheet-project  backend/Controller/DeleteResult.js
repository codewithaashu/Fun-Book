import Results from "../Model/Results.js";

const DeleteResult = async (req, res) => {
  try {
    const resultID = req.params.id;
    const result = await Results.findByIdAndDelete(resultID);
    if (!result) {
      return res.status(401).json({ message: "No user with that ID" });
    } else {
      const data = await Results.find({});
      res.json({ message: "User Deleted", data });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default DeleteResult;
