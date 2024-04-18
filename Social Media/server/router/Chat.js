import express from "express";
import GetAllChats from "../controller/Chats/GetAllChats.js";
import StartChat from "../controller/Chats/StartChat.js";
import Authentication from "../middleware/Authentication.js";
import SendMessage from "../controller/Chats/SendMessage.js";
import GetAllMessages from "../controller/Chats/GetAllMessages.js";

const ChatRouter = express.Router();

ChatRouter.post("/", Authentication, StartChat);
ChatRouter.get("/", Authentication, GetAllChats);
ChatRouter.post("/message", Authentication, SendMessage);
ChatRouter.get("/message/:id", Authentication, GetAllMessages);

export default ChatRouter;
