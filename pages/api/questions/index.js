import dbConnect from "../../../db/connect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  await dbConnect();

  //============= Filter Question by Test =======

  console.log("==========", request.query.testtype);
  const test = request.query.testtype;

  if (request.method === "GET") {
    const questions = await Question.find({ test: test }); // lower case is the const or function, upper case is the model
    return response.status(200).json(questions); // 200 is good to go!
  }

  //========================

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
}
