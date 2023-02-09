import { db } from "../middleware";

export async function getProductFeedbacks(productId) {
  return await db
    .collection("feedbacks")
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
