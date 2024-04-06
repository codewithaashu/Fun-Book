import mongoose, { Schema } from "mongoose";

//create the schema for post
const PostSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    mediaSrc: { type: String, required: false },
    likes: [{ type: Schema.Types.ObjectId, ref: "Users" }], //array of user ids  who liked this post
    comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }], // array of comment id's
    userId: { type: Schema.Types.ObjectId, ref: "Users" }, //user's id that created this post
  },
  { timestamps: true }
);
export default mongoose.model("Posts", PostSchema);
