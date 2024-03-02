import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number },
  password: { type: String, required: true },
});

export const Users = mongoose.model("Users", UserSchema);
