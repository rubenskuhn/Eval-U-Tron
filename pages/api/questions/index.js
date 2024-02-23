import dbConnect from "../../../db/connect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const questions = await Question.find(); // lower case is the const or function, upper case is the model
    return response.status(200).json(questions); // 200 is good to go!
  }

  if (request.method === "POST") {
    try {
      const newQuestionData = request.body;
      console.log("imput new Data:", newQuestionData);
      const newQuestion = new Question(newQuestionData); // takes the form data and connects it to the model "Question" usign the questionData received from the "Form"
      await newQuestion.save();
      response.status(201).json({ status: "Question created" });
    } catch (e) {
      console.log("No Question Found --->: ", e);
    }
  }
  if (request.method === "PUT") {
    try {
      const editQuestionData = request.body;
      console.log("==== Edit Data:", editQuestionData);
      // const editQuestion = new Question(editQuestionData);
      // await editQuestion.save();
      response.status(201).json({ status: "Question edited" });
    } catch (e) {
      console.log("No Question Found --->: ", e);
    }
  }

  if (request.method === "DELETE") {
    const deleteEntryQuestion = await Question.findByIdAndDelete(id);
    await Comment.deleteOne({ _id: { $in: deleteEntryQuestion.data } });
    response.status(201).json("Entry Deleted");
  }
}
