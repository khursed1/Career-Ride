import { model, Schema } from "mongoose";

// User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model("User", userSchema);
