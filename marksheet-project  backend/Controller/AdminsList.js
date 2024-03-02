import { Admins } from "../Model/Admins.js";

const AdminsList = async (req, res) => {
  try {
    const admins = await Admins.find({});
    if (!admins || admins.length == 0) throw new Error("No admin found");
    return res.status(200).json(admins);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
export default AdminsList;
