import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  driver: "pg",
  dbCredentials: { connectionString: process.env.DB_URL as string },
  out: "./drizzle",
});
