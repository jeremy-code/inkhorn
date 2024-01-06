import { notFound } from "next/navigation";
import { HStack } from "styled-system/jsx";

import { Badge, Heading, Text } from "@/components/ui";
import { getCourse } from "@/actions/course";
import { getUser } from "@/actions/user";
import { decodeId } from "@/utils/sqid";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { name, daysOfTheWeek, userId, subject } = await getCourse(decodeId(params.id));
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
    </>
  );
};

export default CoursePage;
