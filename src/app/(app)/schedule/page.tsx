import type { Metadata } from "next";
import { Info } from "luxon";

import { Calendar } from "@/components/calendar";
import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";
import { getInterval } from "@/utils/time";
import { getCourses } from "@/actions/course";

export const metadata: Metadata = { title: "schedule" };

const SchedulePage = async () => {
  const courses = await getCourses();
  const events = courses.map(({ startTime, endTime, ...rest }) => ({
    ...rest,
    interval: getInterval(startTime, endTime),
  }));

  return (
    <Page>
      <Page.Heading>
        <Heading fontWeight="normal">Schedule</Heading>
      </Page.Heading>
      <Calendar events={events} />
    </Page>
  );
};

export default SchedulePage;
