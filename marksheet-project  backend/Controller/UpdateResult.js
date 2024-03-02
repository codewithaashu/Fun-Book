import Results from "../Model/Results.js";

const UpdateResult = async (req, res) => {
  try {
    const resultId = req.params.id;
    await Results.updateOne({ _id: resultId }, { $set: { ...req.body } });
    return res.status(200).json({ message: "Update Successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default UpdateResult;
