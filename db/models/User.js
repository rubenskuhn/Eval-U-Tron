import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  image: { type: String },
  tests: { type: [String] },
  score: { type: Number, default: 0 },
});

const User = models.User || model("User", userSchema);

export default User;
