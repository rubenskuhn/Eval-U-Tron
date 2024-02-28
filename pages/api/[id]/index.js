import dbConnect from "../../../db/connect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  await dbConnect();
}
