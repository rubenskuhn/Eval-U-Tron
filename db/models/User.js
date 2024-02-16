import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const userSchema = new Schema({
  userName: { type: string, required: true },
  email: { type: String, required: true },
  results: [
    {
      test: {
        type: String,
        required: true,
      },
      markedCorret: {
        type: Boolean,
        required: true,
      },
      questionID: {
        type: Number,
        required: true,
      },
    },
  ],
});

const User = models.User || model("User", userSchema);

export default User;
