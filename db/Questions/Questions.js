import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const questionSchema = new Schema({
  id: { type: number, required: true },
  test: { type: string, required: true },
  proposition: { type: String, required: true },
  image: { type: String, required: false },
  options: { type: Array, required: true },
  answer: { type: string, required: true },
  ifcorrect: { type: Boolean, required: true },
  takers: { type: Number, required: true },
});

const Question = models.Product || model("Question", questionSchema);

export default Question;
