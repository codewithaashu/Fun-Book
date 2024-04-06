import Users from "../models/Users.js";
import VerifyOTPs from "../models/VerifyOTPs.js";

const ResetPassword = async (req, res) => {
  try {
    //accept data from frontend
    const { email, password, OTP } = req.body;
    //check OTP is valid or not
    const isOTPValid = await VerifyOTPs.findOne({ userEmail: email, OTP });
    if (!isOTPValid) {
      return res.status(401).json({ message: "Invalid OTP", success: false });
    }
    //update the password
    const updateUser = await Users.updateOne({ email }, { $set: { password } });
    return res
      .status(201)
      .json({ message: "Password reset successfully", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default ResetPassword;
