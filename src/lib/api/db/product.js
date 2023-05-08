import { ObjectId } from "mongodb";
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
        $unwind: {
          path: "$media",
          preserveNullAndEmptyArrays: true,
        },
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
        $unwind: {
          path: "$media",
          preserveNullAndEmptyArrays: true,
        },
      },
    ])
    .toArray();
}

export async function getProductsByManufacturer(manufacturerId) {
  return await db
    .collection("products")
    .aggregate([
      {
        $match: {
          manufacturerId,
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
          _id: new ObjectId(id),
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
        $unwind: {
          path: "$media",
          preserveNullAndEmptyArrays: true,
        },
      },
    ])
    .toArray();

  return product[0];
}

export async function getManufacturerProduct(id) {
  const product = await db
    .collection("products")
    .aggregate([
      {
        $match: {
          _id: new ObjectId(id),
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

export async function getProductCategories() {
  return await db.collection("productCategories").find().toArray();
}

export async function addProduct(product, manufacturerId) {
  const productId = await db.collection("products").insertOne({
    name: product.name,
    description: product.description,
    category: product.category,
    sellingPrice: product.sellingPrice,
    costPrice: product.costPrice,
    poolThreshold: product.poolThreshold,
    status: product.status,
    manufacturerId,
    createdAt: new Date(),
    modifiedAt: new Date(),
  });
  return await db.collection("inventories").insertOne({
    productId: productId.insertedId,
    quantity: product.quantity,
    createdAt: new Date(),
    modifiedAt: new Date(),
  });
}

export async function editProduct(id, product) {
  return await db.collection("products").updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        name: product.name,
        description: product.description,
        category: product.category,
        sellingPrice: product.sellingPrice,
        costPrice: product.costPrice,
        poolThreshold: product.poolThreshold,
        status: product.status,
        modifiedAt: new Date(),
      },
    }
  );
}

export async function deleteProduct(id) {
  return await db.collection("products").deleteOne({
    _id: new ObjectId(id),
  });
}

export async function updateInventory(productId, inventory) {
  return await db.collection("inventories").updateOne(
    {
      productId: new ObjectId(productId),
    },
    {
      $set: {
        quantity: inventory.quantity,
        modifiedAt: new Date(),
      },
    }
  );
}
