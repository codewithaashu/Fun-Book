import Requests from "../models/Requests.js";

const SendRequest = async (req, res) => {
  try {
    //accept the requestTo user from req.body
    const { requestTo } = req.body;
    //get the user's id from request
    const { userId } = req;
    //create the friend request
    const request = await Requests.create({
      requestFrom: userId,
      requestTo,
    });
    await request.save();
    return res.status(200).json({
      message: "Friend request has been sent successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default SendRequest;
