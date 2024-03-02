import { Admins } from "../Model/Admins.js";
import bcrypt from "bcrypt";
const Login = async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const user = await Admins.findOne({ username, userType });
    if (!user) {
      return res.status(400).json({
        message: "Invalid crediantial details.",
      });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({
        message: "Invalid crediantial details.",
      });
    }
    return res.status(200).json({ message: "Login sucessful", data: user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default Login;
