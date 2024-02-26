import dbConnect from "../../../../db/connect";
import Test from "../../../../db/models/Test";

export default async function handler(request, response) {
  await dbConnect();
  const { _id } = request.query;
  console.log("=== Receiving Test Data?", request.query);

  if (!_id) {
    return;
  }

  if (request.method === "PUT") {
    try {
      const addQuestionData = request.body;
      console.log("==== New Test Data?", addQuestionData);
      const newTestScore = new Test(addQuestionData);
      await Test.findByIdAndUpdate(_id, addQuestionData);

      return response.status(201).json({ status: "Score Added" });
    } catch (e) {
      console.log("No Score Found --->: ", e);
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
