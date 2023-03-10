import { db } from "../middleware";

export async function getRecentProducts(limit) {
  return await db
    .collection("products")
    .aggregate([
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $lookup: {
          from: "productMedia",
          localField: "_id",
          foreignField: "productId",
          as: "media",
        },
      },
      {
        $unwind: "$media",
      },
      {
        $limit: limit,
      },
    ])
    .toArray();
}

export async function getRecentProductsByCategory(category, page, limit) {
  const products = await db
    .collection("products")
    .aggregate([
      {
        $match: {
          category,
        },
      },
      {
        $lookup: {
          from: "productMedia",
          localField: "_id",
          foreignField: "productId",
          as: "media",
        },
      },
      {
        $unwind: "$media",
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $facet: {
          paginatedResults: [{ $skip: page * limit }, { $limit: limit }],
          totalCount: [
            {
              $count: "count",
            },
          ],
        },
      },
    ])
    .toArray();

  return {
    paginatedResults: products[0].paginatedResults,
    count: products[0].totalCount[0].count,
  };
}

export async function getProduct(id) {
  const product = await db
    .collection("products")
    .aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "productMedia",
          localField: "_id",
          foreignField: "productId",
          as: "media",
        },
      },
      {
        $unwind: "$media",
      },
    ])
    .toArray();

  return product[0];
}

export async function getRelatedProducts(category, limit) {
  return await db
    .collection("products")
    .aggregate([
      {
        $match: {
          category,
        },
      },
      {
        $lookup: {
          from: "productMedia",
          localField: "_id",
          foreignField: "productId",
          as: "media",
        },
      },
      {
        $unwind: "$media",
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $limit: limit,
      },
    ])
    .toArray();
}

export async function searchProducts(query, page, limit) {
  const products = await db
    .collection("products")
    .aggregate([
      {
        $match: {
          $text: {
            $search: query,
          },
        },
      },
      {
        $lookup: {
          from: "productMedia",
          localField: "_id",
          foreignField: "productId",
          as: "media",
        },
      },
      {
        $unwind: "$media",
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $facet: {
          paginatedResults: [{ $skip: page * limit }, { $limit: limit }],
          totalCount: [
            {
              $count: "count",
            },
          ],
        },
      },
    ])
    .toArray();

  return {
    paginatedResults: products[0].paginatedResults,
    count: products[0].totalCount[0].count,
  };
}
