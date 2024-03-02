import Students from "../Model/Students.js";

const UpdateStudent = async (req, res) => {
  try {
    // const studentId = req.params.id;
    // const  updatedStudent = await StudentModel.updateOne({_id:studentId},{$set:{...req.body} });

    const studentID = req.params.id;
    await Students.updateOne({ _id: studentID }, { $set: req.body });
    const data = await Students.find({});
    return res.status(200).json({ message: "Updated Successfully", data });
  } catch (err) {
    return res.status(500).send({
      error: err.message || "Error updating student",
    });
  }
};
export default UpdateStudent;
