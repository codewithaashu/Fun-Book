import Students from "../Model/Students.js";

const RegisterStudent = async (req, res) => {
  try {
    const {
      imgSrc,
      name,
      dob,
      fatherName,
      motherName,
      year,
      course,
      stream,
      firstLanguage,
      secondLanguage,
      option1,
      option2,
      option3,
      option4,
      option5,
      adminUsername,
      lang1TheoryMarks,
      lang2TheoryMarks,
      opt1TheoryMarks,
      opt2TheoryMarks,
      opt3TheoryMarks,
      opt4TheoryMarks,
      opt5TheoryMarks,
      lang1OralMarks,
      lang2OralMarks,
      opt1OralMarks,
      opt2OralMarks,
      opt3OralMarks,
      opt4OralMarks,
      opt5OralMarks,
    } = req.body;
    const totalStudents = await Students.countDocuments();
    const rollNo = 5001 + totalStudents;
    const random4Digits = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const regNo = `${
      course === "SR. Secondary Examination(12th Class)" ? "HS" : "SE"
    }${year}${random4Digits}`;
    const result = {
      lang1TheoryMarks,
      lang2TheoryMarks,
      opt1TheoryMarks,
      opt2TheoryMarks,
      opt3TheoryMarks,
      opt4TheoryMarks,
      opt5TheoryMarks,
      lang1OralMarks: lang1OralMarks ?? 0,
      lang2OralMarks: lang2OralMarks ?? 0,
      opt1OralMarks: opt1OralMarks ?? 0,
      opt2OralMarks: opt2OralMarks ?? 0,
      opt3OralMarks: opt3OralMarks ?? 0,
      opt4OralMarks: opt4OralMarks ?? 0,
      opt5OralMarks: opt5OralMarks ?? 0,
    };
    const student = new Students({
      imgSrc,
      name,
      course,
      dob,
      fatherName,
      motherName,
      rollNo,
      regNo,
      adminUsername,
      firstLanguage,
      option1,
      option2,
      option3,
      option4,
      option5,
      year,
      secondLanguage,
      stream,
      result,
    });
    const data = await student.save();
    return res
      .status(200)
      .json({ success: true, message: "Registered Successfully", data });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default RegisterStudent;
