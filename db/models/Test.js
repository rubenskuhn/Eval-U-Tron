import mongoose from "mongoose";
import questionSchema from "./Question";

const { Schema, models, model } = mongoose;

const answerSchema = new Schema({
  question: questionSchema,
  markedCorrect: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
});

const testSchema = new Schema({
  test: { type: String, required: true },
  question: [answerSchema],
  testTaker: { type: String, default: 0 },
  finalScore: { type: Number, default: 0 },
});

const Test = models.Test || model("Test", testSchema);

export default Test;
