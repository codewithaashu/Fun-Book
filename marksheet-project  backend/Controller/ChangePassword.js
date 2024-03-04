import { Admins } from "../Model/Admins.js";
import bcrypt from "bcrypt";
const ChangePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    console.log(req.body);
    const admin = await Admins.findOne({ _id: id });
    console.log(admin);
    if (!admin) {
      return res.status(202).json({ message: "Invalid User", success: false });
    }
    const comparePassword = await bcrypt.compare(
      currentPassword,
      admin.password
    );
    console.log(comparePassword);
    if (!comparePassword) {
      return res
        .status(202)
        .json({ message: "Current password is invalid.", success: false });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);
    await Admins.findByIdAndUpdate(id, { password: hashedNewPassword });
    res
      .status(200)
      .json({ message: "Password changed successfully!", success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};
export default ChangePassword;
