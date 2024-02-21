import dbConnect from "../../../db/connect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  await dbConnect();

  // if (request.method === "GET") {
  //   const question = await Question.findById(id);
  //   if (!question) {
  //     return response.status(404).json({ status: "Not found" });
  //   }
  //   return response.status(200).json(question);
  // } else if (request.method === "PUT") {
  //   await Question.findByIdAndUpdate(id, {
  //     $set: request.body,
  //   });
  // }

  //   if (request.method === "DELETE") {
  //     const deleteEntryQuestion = await Question.findByIdAndDelete(id);
  //     await Comment.deleteOne({ _id: { $in: deleteEntryQuestion.data } });
  //     response.status(201).json("Entry Deleted");
  //   }

  // if (request.method === "POST") {
  //   try {
  //     const newQuestionData = request.body;

  //     const newQuestion = new Question(newQuestionData); // takes the form data and connects it to the model "Question" usign the questionData received from the "Form"
  //     await newQuestion.save();
  //     response.status(201).json({ status: "Question created" });
  //     console.log("====== RESPONSE: ", response);
  //   } catch (e) {
  //     console.log("No Question Found --->: ", e);
  //   }
  // }
}
