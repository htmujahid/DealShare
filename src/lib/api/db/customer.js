import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { db } from "../middleware";
import { dbProjectionUsers } from "./users";

export async function getCustomers(email) {
  return await db
    .collection("users")
    .find(
      {
        role: "customer",
      },
      { projection: dbProjectionUsers() }
    )
    .toArray();
}
