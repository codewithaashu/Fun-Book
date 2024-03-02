import mongoose from "mongoose";
import bcrypt from "bcrypt";
const AdminSchema = new mongoose.Schema({
  userType: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
AdminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});
AdminSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, "mynameisashishranjan");
  this.tokens = [...this.tokens, { token }];
  this.save();
  return token;
};

export const Admins = mongoose.model("Admins", AdminSchema);
