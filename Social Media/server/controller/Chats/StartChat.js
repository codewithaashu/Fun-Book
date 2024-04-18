import Chats from "../../models/Chats/Chats.js";

const StartChat = async (req, res) => {
  try {
    //get userId from request object
    const { userId } = req;
    //get recieverId from request body
    const { recieverId } = req.body;
    if (!userId || !recieverId) {
      return res
        .status(400)
        .json({ message: "Invalid request", success: false });
    }
    console.log(userId, recieverId);
    //check we already create a chat between these two users
    const query = { members: { $all: [userId, recieverId] } }; //get a data in which members id containns both userId and recieverId
    console.log(query);
    const chatExist = await Chats.findOne(query);
    console.log(chatExist);
    if (chatExist) {
      return res
        .status(409)
        .json({ message: "Chat already exist.", success: false });
    }

    //create chat
    const chat = await Chats.create({
      members: [userId, recieverId],
    });
    console.log(chat);
    //return chat
    return res
      .status(200)
      .json({ message: "Chat created successfully", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export default StartChat;
