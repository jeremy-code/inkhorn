import { defineConfig } from "drizzle-kit";

const { DB_URL } = process.env;

if (!DB_URL) throw new Error("DB_URL environment variable is not set");

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  driver: "pg",
  dbCredentials: { connectionString: DB_URL },
  out: "./drizzle",
});
