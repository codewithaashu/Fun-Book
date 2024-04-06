//to create a router, we have to import  the express module
import express from "express";
import RegisterUser from "../controller/RegisterUser.js";
import LoginUser from "../controller/LoginUser.js";
import VerifyMail from "../controller/VerifyMail.js";
import VerifiedAccount from "../controller/VerifiedAccount.js";
import ForgotPassword from "../controller/ForgotPassword.js";
import ResetPassword from "../controller/ResetPassword.js";

//create an instance of AuthRouter
const AuthRouter = express.Router();

//create the Routes

//you can create sub route as below also
// AuthRouter.route("/register").post(RegisterUser);

//or you can also create sub-route as below
AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);
AuthRouter.get("/verify/:id/:token", VerifyMail);
AuthRouter.get("/verified", VerifiedAccount);
AuthRouter.get("/forgot-password/:email", ForgotPassword);
AuthRouter.put("/reset-password", ResetPassword);
export default AuthRouter;
