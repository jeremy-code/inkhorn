import { Pool } from "@neondatabase/serverless";
import { drizzle, type NeonDatabase } from "drizzle-orm/neon-serverless";

import * as schema from "./schema";

declare global {
  /**
   * `let` and `const` will not work with globalThis, `var` is required.
   * {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#type-checking-for-globalthis}
   */
  // eslint-disable-next-line no-var
  var db: NeonDatabase<typeof schema> | undefined;
}

const { DB_URL, NODE_ENV } = process.env;
if (!DB_URL) throw new Error("DB_URL environment variable is not set");

const drizzleSingleton = () => drizzle(new Pool({ connectionString: DB_URL }), { schema });

export const db = globalThis.db ?? drizzleSingleton();

if (NODE_ENV !== "production") globalThis.db = db;
