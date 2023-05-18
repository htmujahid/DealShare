import { ObjectId } from "mongodb";
import { db } from "../middleware";
import {dbProjectionUsers} from "@/lib/api/db/users";

export async function addOrder(order) {
  const { insertedId } = await db.collection("orders").insertOne(order);
  return insertedId;
}

export async function updateOrder(id, updatedData) {
  const updatedOrder = { ...updatedData, modifiedAt: new Date() };

  const { matchedCount } = await db
    .collection("orders")
    .updateOne({ _id: new ObjectId(id) }, { $set: updatedOrder });

  return matchedCount;
}

export async function getOrders(limit) {
  return await db
    .collection("orders")
    .aggregate([
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

export async function getOrdersByManufacturer(manufacturerId) {
  return await db
    .collection("orders")
    .aggregate([
      {
        $match: {
          userId: new ObjectId(manufacturerId),
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ])
    .toArray();
}

export async function getAdminOrders() {
  return await db
    .collection("orders")
    .aggregate([
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "orderId",
          as: "invoice",
        },
      },
      {
        $unwind: "$invoice"
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

export async function getOrderByManufacturer(manufacturerId) {
  return await db
    .collection("orders")
    .aggregate([
      {
        $match: {
          manufacturerId: ObjectId(manufacturerId),
        },
      },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "orderId",
          as: "invoice",
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ])
    .toArray();
}

export async function getOrder(id) {
  return await db
    .collection("orders")
    .findOne({
      _id: ObjectId(id),
    })
    .aggregate([
      {
        $match: {
          manufacturerId: ObjectId(manufacturerId),
        },
      },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "orderId",
          as: "invoice",
        },
      },
    ]);
}

export async function getOrderDetails(id) {
  const order = await db
    .collection("orders")
    .aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "orderId",
          as: "invoice",
        },
      },
      {
        $unwind: "$invoice",
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "customer",
        },
      },
      {
        $unwind: "$customer",
      },
      {
        $lookup: {
          from: "products",
          localField: "products.productId",
          foreignField: "_id",
          as: "orderProducts",
        }
      },
      {
        $project: {
          "customer.password": 0,
          "customer.emailVerified": 0,
        }
      }
    ]).toArray();

  return Promise.all(order.map(async (order) => {
    return {
      ...order,
      products: await Promise.all(order.orderProducts.map(async (product) => {
        const manufacturer = await db.collection("users").findOne({
          _id: new ObjectId(product.manufacturerId),
        },{ projection: dbProjectionUsers() });
        return {
          ...product,
          manufacturer,
          quantity: order.products.find((p) => p.productId.toString() === product._id.toString()).quantity,
          price: order.products.find((p) => p.productId.toString() === product._id.toString()).price,
        }
      }))
    }
  }))

}

export async function getManufacturerOrderDetails(id, manufacturerId) {
  const order = await db
    .collection("orders")
    .aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "orderId",
          as: "invoice",
        },
      },
      {
        $unwind: "$invoice",
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "customer",
        },
      },
      {
        $unwind: "$customer",
      },
      {
        $lookup: {
          from: "products",
          localField: "products.productId",
          foreignField: "_id",
          as: "orderProducts",
        }
      },
      {
        $project: {
          "customer.password": 0,
          "customer.emailVerified": 0,
        }
      }
    ]).toArray();

  return Promise.all(order.map(async (order) => {
    return {
      ...order,
      products: await Promise.all(order.orderProducts.map(async (product) => {
        const manufacturer = await db.collection("users").findOne({
          _id: new ObjectId(product.manufacturerId),
        },{ projection: dbProjectionUsers() })
        if (manufacturerId.toString() !== manufacturer._id.toString()) {
          return null;
        }
        return {
          ...product,
          manufacturer,
          quantity: order.products.find((p) => p.productId.toString() === product._id.toString()).quantity,
          price: order.products.find((p) => p.productId.toString() === product._id.toString()).price,
        }
      }))
    }
  }))

}
