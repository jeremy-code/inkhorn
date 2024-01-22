import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DateTime, Info } from "luxon";

import { Badge, Heading, Text } from "@/components/ui";
import { HStack } from "@/lib/styled/jsx";
import { decodeId } from "@/utils/sqid";
import { getInterval } from "@/utils/time";
import { getCourse } from "@/actions/course";
import { getUser } from "@/actions/user";

type CoursePageProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: CoursePageProps): Promise<Metadata> => ({
  title: (await getCourse(decodeId(params.id))).name,
});

const CoursePage = async ({ params }: CoursePageProps) => {
  const { name, weekdays, userId, subject, startTime, endTime } = await getCourse(
    decodeId(params.id)
  );
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
      <HStack mt={2}>
        {weekdays?.map((day) => <Badge key={day}>{Info.weekdays()[day - 1]}</Badge>)}
      </HStack>
      {startTime && endTime && (
        <Text fontSize="sm" color="fg.muted">
          {getInterval(startTime, endTime).toLocaleString(DateTime.TIME_SIMPLE)}
        </Text>
      )}
    </>
  );
};

export default CoursePage;
