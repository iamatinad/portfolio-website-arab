import { MongoClient } from "mongodb";

// const uri = process.env.MONGO_URI || "";
const client = new MongoClient(process.env.MONGO_URI);
const DATABASE_NAME = "portofolio_arab_db";

try {
  await client.connect();

  await client.db("admin").command({ ping: 1 });
  console.log("You've successfully connected to Mongodb!");
} catch (error) {
  console.error(error);
}

let db = client.db(DATABASE_NAME);

export default db;
