import Students from "../Model/Students.js";

const StudentsList = async (req, res) => {
  try {
    const students = await Students.find({});
    return res.status(200).json({ data: students });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default StudentsList;
