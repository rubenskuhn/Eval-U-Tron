import dbConnect from "../../../db/connect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const questions = await Question.find(); // lower case is the const or function, upper case is the model
    return response.status(200).json(questions); // 200 is good to go!
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
