import "dotenv/config";

import { createInsertSchema } from "drizzle-valibot";
import { JSDOM } from "jsdom";
import { parse } from "valibot";

import { db } from "@/lib/db/drizzle";
import { subjects } from "@/lib/db/schema";

const UCSD_SUBJECTS_URL =
  "https://blink.ucsd.edu/instructors/courses/schedule-of-classes/subject-codes.html";

const parseSubjects = (document: Document) =>
  Array.from(document.querySelectorAll("table tbody tr"))
    .slice(1) // Skip the first/header row
    .map((row) => {
      const cells = row.querySelectorAll("td");
      const code = cells[0].textContent?.trim();
      const name = cells[1].textContent?.trim();
      return parse(createInsertSchema(subjects), { name, code });
    });

async function main() {
  console.log("⏳ Started fetching UCSD subjects...");

  try {
    const dom = await JSDOM.fromURL(UCSD_SUBJECTS_URL);
    const document = dom.window.document;

    const data = parseSubjects(document);
    console.log(`🔎 Found ${data.length} subjects. Inserting into database...`);
    await db.insert(subjects).values(data);
    console.log("✅ Finished inserting subjects into database.");
  } catch (e) {
    console.error("❌ An error occurred:", e);
  }
}

main();
