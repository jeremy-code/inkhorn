import type { Metadata } from "next";

import { Calendar } from "@/components/calendar";
import { Page } from "@/components/layout";
import { getInterval } from "@/utils/time";
import { getCourses } from "@/actions/course";

export const metadata: Metadata = { title: "schedule" };

const SchedulePage = async () => {
  const courses = await getCourses();
  const events = courses.map((c) => ({ ...c, interval: getInterval(c.startTime, c.endTime) }));

  return (
    <Page>
      <Page.Header heading="Schedule" />
      <Calendar m="4" events={events} />
    </Page>
  );
};

export default SchedulePage;
