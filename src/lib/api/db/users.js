import bcrypt from "bcryptjs";
import { db } from "../middleware";

export async function getUserByEmail(email) {
  return db
    .collection("users")
    .findOne({ email }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
}

export function dbProjectionUsers(prefix = "") {
  return {
    [`${prefix}password`]: 0,
    [`${prefix}emailVerified`]: 0,
  };
}

export async function addUser(user) {
  let password = await bcrypt.hash(user.password, 10);

  const user = {
    ...user,
    password,
    createdAt: new Date(),
    modifiedAt: new Date(),
  };

  const { insertedId } = await db.collection("users").insertOne(user);

  return insertedId;
}

export async function addSuperAdmin() {
  const password = await bcrypt.hash(process.env.SEED_ADMIN_PASS, 10);
  const user = {
    firstName: "Super",
    lastName: "Admin",
    email: process.env.SEED_ADMIN_EMAIL,
    password,
    role: "admin",
    emailVerified: true,
  };
  return await db.collection("users").insertOne(user);
}
