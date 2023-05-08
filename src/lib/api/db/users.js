import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
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

export async function getUsers() {
  return await db
    .collection("users")
    .find({}, { projection: dbProjectionUsers() })
    .toArray();
}

export async function getUsersByRole(role) {
  return await db
    .collection("users")
    .find({ role }, { projection: dbProjectionUsers() })
    .toArray();
}

export async function getUser(id) {
  return await db.collection("users").findOne({
    _id: new ObjectId(id),
  });
}

export async function getCurrentUser(id) {
  return await db.collection("users").findOne(
    {
      _id: new ObjectId(id),
    },
    { projection: dbProjectionUsers() }
  );
}

export async function updatePassword(id, password) {
  const newPassword = await bcrypt.hash(password, 10);

  const { matchedCount } = await db.collection("users").updateOne(
    {
      _id: new ObjectId(id),
    },
    { $set: { password: newPassword } }
  );

  return matchedCount;
}

export async function addUser(user) {
  let password = await bcrypt.hash(user.password, 10);

  const newUser = {
    ...user,
    password,
    createdAt: new Date(),
    modifiedAt: new Date(),
  };

  const { insertedId } = await db.collection("users").insertOne(newUser);

  return insertedId;
}

export async function editUser(id, updatedData) {
  const updatedUser = { ...updatedData, modifiedAt: new Date() };

  const { matchedCount } = await db
    .collection("users")
    .updateOne({ _id: new ObjectId(id) }, { $set: updatedUser });

  return matchedCount;
}

export async function verifyUser(id) {
  const { matchedCount } = await db.collection("users").updateOne(
    {
      _id: new ObjectId(id),
    },
    { $set: { verified: true } }
  );
  return matchedCount;
}

export async function unverifyUser(id) {
  const { matchedCount } = await db.collection("users").updateOne(
    {
      _id: new ObjectId(id),
    },
    { $set: { verified: false } }
  );
  return matchedCount;
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

export async function deleteUser(id) {
  return await db.collection("users").deleteOne({
    _id: new ObjectId(id),
  });
}
