import { notFound } from "next/navigation";

import { Badge, Heading, Text } from "@/components/ui";
import { HStack } from "@/lib/styled/jsx";
import { formatTime } from "@/utils/common";
import { decodeId } from "@/utils/sqid";
import { getCourse } from "@/actions/course";
import { getUser } from "@/actions/user";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { name, daysOfTheWeek, userId, subject, startTime, endTime } = await getCourse(
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
      <HStack mt={2}>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
      {startTime && endTime && (
        <Text fontSize="sm" color="fg.muted">
          {formatTime(startTime)} - {formatTime(endTime)}
        </Text>
      )}
    </>
  );
};

export default CoursePage;
