import mongoose from "mongoose";
import User from './userSchema.js'

const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: {
      public_id: { type: String },
      url: {type: String}
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

export default model("Post", postSchema);
