import dbConnect from "../../../db/connect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  await dbConnect();

  if (request.method === "GET") {
    const question = await Question.findById(id);
    if (!question) {
      return response.status(404).json({ status: "Not found" });
    }
    return response.status(200).json(question);
  } else if (request.method === "PUT") {
    await Question.findByIdAndUpdate(id, {
      $set: request.body,
    });
  }
}
//   if (request.method === "DELETE") {
//     const deleteEntryPlace = await Place.findByIdAndDelete(id);
//     await Comment.deleteOne({ _id: { $in: deleteEntryPlace.comments } });
//     response.status(201).json("Entry Deleted");
//   }
