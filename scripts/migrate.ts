import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres/driver";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const { DB_URL } = process.env;
if (!DB_URL) throw new Error("DB_URL environment variable is not set");

const db = drizzle(new Pool({ connectionString: DB_URL }));

async function main() {
  try {
    console.log("⏳ Migration started...");

    /** per {@link https://neon.tech/docs/serverless/serverless-driver}
     *  drizzle-kit is not compatible with neon serverless driver
     */
    await migrate(db, { migrationsFolder: "drizzle" });

    console.log("✅ Migration finished");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

main();
