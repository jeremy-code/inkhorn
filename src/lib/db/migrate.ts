import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const DB_URL = process.env.DB_URL as string;

const db = drizzle(new Pool({ connectionString: DB_URL }), { logger: true });

async function main() {
  console.log("migration started...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("migration finished");
  process.exit(0);
}

main();
