import { Admins } from "../Model/Admins.js";

const UpdateAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    await Admins.updateOne({ _id: adminId }, { $set: { ...req.body } });
    const data = await Admins.find({});
    return res.status(200).json({ message: "Update Successfully", data });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default UpdateAdmin;
