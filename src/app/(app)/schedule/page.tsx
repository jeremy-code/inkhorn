import type { Metadata } from "next";

import { AsyncAutocomplete } from "@/components/form";
import { fetchSubjects } from "@/actions/subject";
import { encodeId } from "@/utils/sqid";

export const metadata: Metadata = { title: "schedule" };

const SchedulePage = () => {
  return <div>Schedule</div>;
};

export default SchedulePage;
