import dbConnect from "../../../../db/connect";
import question from "../../../../db/model/question";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  await dbConnect();

  if (request.method === "GET") {
    const question = await question.findById(id);
    return response.status(200).json(question);
  } else if (request.method === "PUT") {
    await question.findByIdAndUpdate(id, {
      $set: request.body,
    });
  }

  //   if (request.method === "DELETE") {
  //     const deleteEntryPlace = await Place.findByIdAndDelete(id);
  //     await Comment.deleteOne({ _id: { $in: deleteEntryPlace.comments } });
  //     response.status(201).json("Entry Deleted");
  //   }

  if (!question) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json({ question: question });
}
