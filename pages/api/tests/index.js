import dbConnect from "../../../db/connect";
import Users from "../../../db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { _id } = request.query;
  // console.log("QUERY", request.query);

  if (!_id) {
    return;
  }

  if (request.method === "GET") {
    const users = await Users.findById(_id); // lower case is the const or function, upper case is the model
    return response.status(200).json(users); // 200 is good to go!
  }
}
