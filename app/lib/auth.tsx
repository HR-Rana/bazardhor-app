import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectionString = process.env.BETTER_AUTH_DATABASE_URL;

if (!connectionString) {
  throw new Error("BETTER_AUTH_DATABASE_URL is missing from .env");
}

const client = new MongoClient(connectionString);
const db = client.db("users");

console.log("Starting MongoDB connection...");

try {
  await client.connect();
  await db.command({ ping: 1 });

  console.log("✅ MongoDB connected successfully!");
} catch (error) {
  console.error("❌ MongoDB connection failed:", error);
  throw error;
}

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, { client }),
});
