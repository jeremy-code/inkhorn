import type { InferSelectModel } from "drizzle-orm";

import { courses, users } from "@/lib/db/schema";

export type User = InferSelectModel<typeof users>;
export type Course = InferSelectModel<typeof courses>;
