import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { db } from "../middleware";

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
      // {
      //   $lookup: {
      //     from: "invoices",
      //     localField: "_id",
      //     foreignField: "orderId",
      //     as: "invoice",
      //   },
      // },
      // {
      //   $unwind: "$invoice",
      // },
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
