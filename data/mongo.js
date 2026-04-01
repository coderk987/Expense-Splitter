import {MongoClient} from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();

const db = client.db("app");

export const users = db.collection("users");
export const groups = db.collection("groups");
export const payments = db.collection("payments");