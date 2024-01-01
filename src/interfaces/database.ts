import { InferInsertModel } from "drizzle-orm";

import { courses, users } from "@/lib/db/schema";

export type User = InferInsertModel<typeof users>;
export type Course = Required<InferInsertModel<typeof courses>>;
