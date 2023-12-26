import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const drizzleSingleton = () => {
  return drizzle(postgres(process.env.DB_URL!), { schema });
};

declare global {
  var db: undefined | PostgresJsDatabase<typeof schema>;
}

export const db = globalThis.db ?? drizzleSingleton();

if (process.env.NODE_ENV !== "production") globalThis.db = db;
