import "dotenv/config";

import { migrate } from "drizzle-orm/node-postgres/migrator";

import { db } from "@/lib/db/drizzle";

async function main() {
  try {
    console.log("⏳ Migration started...");

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
