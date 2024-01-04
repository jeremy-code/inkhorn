import "server-only";

import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

const DB_URL = process.env.DB_URL as string;

const drizzleSingleton = () => drizzle(new Pool({ connectionString: DB_URL }), { schema });

declare global {
  var db: undefined | NodePgDatabase<typeof schema>;
}

export const db = globalThis.db ?? drizzleSingleton();

if (process.env.NODE_ENV !== "production") globalThis.db = db;
