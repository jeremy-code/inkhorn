import type { Metadata } from "next";

import { AsyncAutocomplete } from "@/components/form";
import { encodeId } from "@/utils/sqid";
import { fetchSubjects } from "@/actions/subject";

export const metadata: Metadata = { title: "schedule" };

const SchedulePage = () => {
  return <div>Schedule</div>;
};

export default SchedulePage;
