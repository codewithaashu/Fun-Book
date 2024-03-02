import Results from "../Model/Results.js";

const DeclareResult = async (req, res) => {
  try {
    const { studentID } = req.body;
    const result = await Results.find({ studentID });
    if (result.length > 0) {
      return res
        .status(409)
        .json({ message: "Student has already declared the results" });
    }
    await Results.create(req.body);
    return res.status(200).json({
      messgae: "Result is successfully created",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};
export default DeclareResult;
