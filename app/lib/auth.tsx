import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(
  process.env.BETTER_AUTH_DATABASE_URL || "mongodb://localhost:27017",
);
const db = client.db("users");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
