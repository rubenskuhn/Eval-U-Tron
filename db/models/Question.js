import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const questionSchema = new Schema({
  test: { type: String, required: true },
  proposition: { type: String, required: true },
  image: { type: String },
  answers: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  testTakers: { type: Number },
});

const Question = models.Question || model("Question", questionSchema);

export default Question;
