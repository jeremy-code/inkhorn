import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";
import {
  char,
  integer,
  pgTable,
  primaryKey,
  serial,
  smallint,
  text,
  time,
  timestamp,
} from "drizzle-orm/pg-core";
import type { WeekdayNumbers } from "luxon";

export const users = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const usersRelations = relations(users, ({ many }) => ({ courses: many(courses) }));

export const courses = pgTable("course", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  weekdays: smallint("weekdays").array().$type<WeekdayNumbers[]>().notNull(),
  userId: text("userId").notNull(),
  courseCode: text("courseCode"),
  subject: text("subject"),
  startTime: time("startTime").notNull(),
  endTime: time("endTime").notNull(),
  instructorId: text("instructorId"),
  color: char("color", { length: 7 }).notNull(),
});

export const subjects = pgTable("subject", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull(),
});

export const instructors = pgTable("instructor", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const coursesRelations = relations(courses, ({ one }) => ({
  user: one(users, { fields: [courses.userId], references: [users.id] }),
  instructor: one(instructors, { fields: [courses.instructorId], references: [instructors.id] }),
}));

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (acc) => ({ compoundKey: primaryKey({ columns: [acc.provider, acc.providerAccountId] }) })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({ compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }) })
);
