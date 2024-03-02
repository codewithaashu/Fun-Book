import Results from "../Model/Results.js";

const ResultsList = async (req, res) => {
  try {
    const results = await Results.find({});
    if (!results || results.length === 0) throw new Error("No results found");
    else return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default ResultsList;
