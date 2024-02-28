import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { _id } = request.query;
  console.log("=== Receiving Test Data?", request.query);

  if (!_id) {
    return response.status(400).json({ message: "Missing _id parameter" });
  }

  if (request.method === "GET") {
    const user = await User.findById(_id); // lower case is the const or function, upper case is the model
    return response.status(200).json(user); // 200 is good to go!
  }

  if (request.method === "PUT") {
    try {
      const updateData = request.body;
      console.log("==== New Test Data?", updateData);
      // Update the user document with the specified _id using the data in updateData
      await User.findByIdAndUpdate(_id, updateData);
      return response.status(200).json({ status: "User data updated" });
    } catch (error) {
      console.error("Error updating user data:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}
