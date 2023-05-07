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
          from: "productMedias",
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

export async function getAdminProducts() {
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
          from: "inventories",
          localField: "_id",
          foreignField: "productId",
          as: "inventory",
        },
      },
      {
        $unwind: "$inventory",
      },
      {
        $lookup: {
          from: "productMedias",
          localField: "_id",
          foreignField: "productId",
          as: "media",
        },
      },
      {
        $unwind: "$media",
      },
      // {
      //   $lookup: {
      //     from: "feedbacks",
      //     localField: "_id",
      //     foreignField: "productId",
      //     as: "feedback",
      //   },
      // },
      // {
      //   $unwind: "$feedback",
      // },
      // {
      //   $lookup: {
      //     from: "questions",
      //     localField: "_id",
      //     foreignField: "productId",
      //     as: "question",
      //   },
      // },
      // {
      //   $unwind: "$question",
      // },
    ])
    .toArray();
}

export async function getProductsByManufacturer(manufacturerId) {
  return await db
    .collection("products")
    .find({
      manufacturerId,
    })
    .aggregate([
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $lookup: {
          from: "inventories",
          localField: "_id",
          foreignField: "productId",
          as: "inventory",
        },
      },
      {
        $unwind: "$inventory",
      },
      {
        $lookup: {
          from: "productMedias",
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
          from: "productMedias",
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
          from: "productMedias",
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
          from: "productMedias",
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
          from: "productMedias",
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
