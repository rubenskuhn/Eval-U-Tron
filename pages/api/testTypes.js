import dbConnect from "../../db/connect";
import Question from "../../db/models/Question";

export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      const testTypes = await Question.distinct("test");
      console.log(testTypes);
      return response.status(200).json(testTypes);
    } catch (error) {
      console.error("Error fetching test types:", error);
      return response.status(500).json({ error: "Failed to fetch test types" });
    }
  } else {
    return response.status(405).json({ error: "Method Not Allowed" });
  }
}
