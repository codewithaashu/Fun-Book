import { Admins } from "../Model/Admins.js";

const CreateAdmin = async (req, res) => {
  try {
    const admin = await Admins.create(req.body);
    if (!admin)
      return res.status(400).json({ error: "Error creating new admin" });

    return res.status(200).json({ message: "Admin created successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default CreateAdmin;
