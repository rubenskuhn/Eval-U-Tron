import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const questionSchema = new Schema({
  test: { type: string, required: true },
  proposition: { type: String, required: true },
  image: { type: String, required: false },
  options: [
    {
      answer: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
      marked: {
        type: Number,
        required: true,
      },
    },
  ],
  takers: { type: Number, required: true },
});

const Question = models.Question || model("Question", questionSchema);

export default Question;
