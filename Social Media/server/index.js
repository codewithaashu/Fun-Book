//create server

//import express for creating server
import express from "express";
import dotenv from "dotenv"; //to use dotenv file
import connectDB from "./config/dbConfig.js";
import router from "./router/index.js";

//create an instance of express function
const app = express();

//to use dotenv file, we have to config it
dotenv.config();
const Port = process.env.PORT || 9000;

//create a server root route
app.get("/", (req, res) => {
  res.send("Welcome my dear users in FunBook Server");
});

//connnect mongoDB with server
connectDB();

//to accept data in json format
app.use(express.json());

//register router
app.use(router);

//declare the Port at wic server create or request will be listen
app.listen(Port, () => {
  console.log(`Server is listening at port ${Port}`);
});