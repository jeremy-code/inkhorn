import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const db = drizzle(new Pool({ connectionString: process.env.DB_URL as string }), { logger: true });

async function main() {
  try {
    console.log("Migration started...");

    await migrate(db, { migrationsFolder: "drizzle" });

    console.log("✓ Migration finished");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

main();
