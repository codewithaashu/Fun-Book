import { Admins } from "../Model/Admins.js";

const DeleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    await Admins.findByIdAndDelete(adminId);
    const data = await Admins.find({});
    return res.status(200).send({ message: "Deleted Successfully", data });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
export default DeleteAdmin;
