import { MongoClient } from "mongodb";

import { addSuperAdmin, getUserByEmail } from "../db";

global.mongo = global.mongo || {};
export let db;

let superAdminCreated = false;

export async function getMongoClient() {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGODB_URI);
  }

  await global.mongo.client.connect();

  return global.mongo.client;
}

async function createSuperAdmin() {
  const user = await getUserByEmail(process.env.SEED_ADMIN_EMAIL);
  if (!user) {
    await addSuperAdmin();
  }
  superAdminCreated = true;
}

export default async function database(req, res, next) {
  const dbClient = await getMongoClient();

  if (!db) db = dbClient.db(process.env.MONGODB_DB);
  if (!superAdminCreated) await createSuperAdmin();
  return await next();
}
