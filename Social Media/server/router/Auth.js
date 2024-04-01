//to create a router, we have to import  the express module
import express from "express";
import RegisterUser from "../controller/RegisterUser.js";
import LoginUser from "../controller/LoginUser.js";

//create an instance of AuthRouter
const AuthRouter = express.Router();

//create the Routes

//you can create sub route as below also
// AuthRouter.route("/register").post(RegisterUser);

//or you can also create sub-route as below
AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);
export default AuthRouter;
