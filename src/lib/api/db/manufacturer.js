import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { db } from "../middleware";
import { dbProjectionUsers } from "./users";

export async function getManufacturers(email) {
  return await db
    .collection("users")
    .find(
      {
        role: "manufacturer",
      },
      { projection: dbProjectionUsers() }
    )
    .toArray();
}
