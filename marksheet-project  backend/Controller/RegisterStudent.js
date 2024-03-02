import Students from "../Model/Students.js";

const RegisterStudent = async (req, res) => {
  try {
    const { year, course } = req.body;
    const totalStudents = await Students.countDocuments();
    const rollNo = 5001 + totalStudents;
    const random4Digits = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const regNo = `${
      course === "SR. Secondary Examination(12th Class)" ? "HS" : "SE"
    }${year}${random4Digits}`;
    const data = await Students.create({ ...req.body, rollNo, regNo });
    return res.status(200).json({ message: "Registered Successfully", data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
export default RegisterStudent;
