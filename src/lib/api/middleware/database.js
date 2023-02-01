import { MongoClient } from "mongodb";

global.mongo = global.mongo || {};
export let db;

export async function getMongoClient() {
    if (!global.mongo.client) {
        global.mongo.client = new MongoClient(process.env.MONGODB_URI);
    }

    await global.mongo.client.connect();

    return global.mongo.client;
}

export default async function database(req, res, next) {
    const dbClient = await getMongoClient();

    if (!db) db = dbClient.db(process.env.MONGODB_DB);

    return await next();
}
