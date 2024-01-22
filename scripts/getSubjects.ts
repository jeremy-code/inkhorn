import "dotenv/config";

import { load, type CheerioAPI } from "cheerio";
import { drizzle } from "drizzle-orm/node-postgres";
import { createInsertSchema } from "drizzle-valibot";
import { Pool } from "pg";
import { parse } from "valibot";

import { subjects } from "@/lib/db/schema";

const UCSD_SUBJECTS_URL =
  "https://blink.ucsd.edu/instructors/courses/schedule-of-classes/subject-codes.html";

const db = drizzle(new Pool({ connectionString: process.env.DB_URL! }));

function parseSubjects($: CheerioAPI) {
  return $("table tbody tr")
    .slice(1) // Skip the first/header row
    .map((_, el) => {
      const cells = $(el).find("td");
      const code = cells.eq(0).text().trim();
      const name = cells.eq(1).text().trim();
      return parse(createInsertSchema(subjects), { name, code });
    })
    .toArray();
}

async function main() {
  console.log("Started fetching UCSD subjects...");

  try {
    const $ = load(await (await fetch(UCSD_SUBJECTS_URL)).text());
    const data = parseSubjects($);

    console.log(`Found ${data.length} subjects. Inserting into database...`);
    await db.insert(subjects).values(data);
    console.log("Finished inserting subjects into database.");
  } catch (e) {
    console.error("An error occurred:", e);
  }
}

main();
