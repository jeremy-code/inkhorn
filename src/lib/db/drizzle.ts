import "server-only";

import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

const DB_URL = process.env.DB_URL as string;

const drizzleSingleton = () => drizzle(new Pool({ connectionString: DB_URL }), { schema });

declare let global: typeof globalThis & {
  db: NodePgDatabase<typeof schema> | undefined;
};

export const db = global.db ?? drizzleSingleton();

if (process.env.NODE_ENV !== "production") global.db = db;
