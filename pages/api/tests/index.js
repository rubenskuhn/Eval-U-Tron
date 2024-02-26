import dbConnect from "../../../../db/connect";
import Test from "../../../../db/models/Test";

export default async function handler(request, response) {
  await dbConnect();
  const { _id } = request.query;
  // console.log("QUERY", request.query);

  if (!_id) {
    return;
  }

  if (request.method === "GET") {
    const tests = await Test.findById(_id); // lower case is the const or function, upper case is the model
    return response.status(200).json(tests); // 200 is good to go!
  }

  if (request.method === "PUT") {
    try {
      const addQuestionData = request.body;
      console.log("==== Edit Data:", addQuestionData);
      const newTestScore = new Test(addQuestionData);
      await Test.findByIdAndUpdate(_id, addQuestionData);

      return response.status(201).json({ status: "Score Added" });
    } catch (e) {
      console.log("No Score Found --->: ", e);
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
