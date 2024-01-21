import type { Metadata } from "next";
import { Interval } from "luxon";

import { Calendar } from "@/components/calendar";
import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";
import { getCourses } from "@/actions/course";

export const metadata: Metadata = { title: "schedule" };

const SchedulePage = async () => {
  const courses = await getCourses();
  const events = courses.map(({ name, startTime, endTime, daysOfTheWeek }) => {
    const interval = Interval.fromISO(`${startTime}/${endTime}`);
    return { name, interval, weekdays: daysOfTheWeek };
  });

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
