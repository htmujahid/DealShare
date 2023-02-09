import { db } from "../middleware";

export async function getProductQuestions(productId) {
  return await db
    .collection("questions")
    .aggregate([
      {
        $match: {
          productId: productId,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
    ])
    .toArray();
}
