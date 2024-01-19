import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DateTime, Interval } from "luxon";

import { Badge, Heading, Text } from "@/components/ui";
import { HStack } from "@/lib/styled/jsx";
import { decodeId } from "@/utils/sqid";
import { getCourse } from "@/actions/course";
import { getUser } from "@/actions/user";

type CoursePageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { name } = await getCourse(decodeId(params.id));
  return {
    title: name,
  };
}

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { name, daysOfTheWeek, userId, subject, startTime, endTime } = await getCourse(
    decodeId(params.id)
  );
  const interval = Interval.fromISO(`${startTime}/${endTime}`);
  const { id: currentUserId } = await getUser();

  if (userId !== currentUserId) notFound();

  return (
    <>
      <HStack>
        <Heading>{name}</Heading>
        <Text fontSize="sm" color="fg.muted">
          {subject}
        </Text>
      </HStack>
      <HStack mt={2}>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
      {startTime && endTime && (
        <Text fontSize="sm" color="fg.muted">
          {interval.toLocaleString(DateTime.TIME_SIMPLE)}
        </Text>
      )}
    </>
  );
};

export default CoursePage;
