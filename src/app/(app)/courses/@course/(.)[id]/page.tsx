import { notFound } from "next/navigation";

import { FormButton } from "@/components/form";
import { Badge, Card, Text } from "@/components/ui";
import { Divider, HStack } from "@/lib/styled/jsx";
import { formatTime } from "@/utils/common";
import { decodeId } from "@/utils/sqid";
import { deleteCourse, getCourse } from "@/actions/course";
import { getUser } from "@/actions/user";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { id, userId, name, daysOfTheWeek, subject, startTime, endTime } = await getCourse(
    decodeId(params.id)
  );
  const { id: currentUserId } = await getUser();

  if (userId !== currentUserId) notFound();

  return (
    <Card.Root h="full" w="full" minW="lg" m={2}>
      <Card.Header>
        <HStack>
          <Card.Title>{name} </Card.Title>
          <Text fontSize="sm" color="fg.muted">
            {subject}
          </Text>
        </HStack>
        <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
      </Card.Header>
      <Card.Body>
        {startTime && endTime && (
          <Text fontSize="sm" color="fg.muted">
            {formatTime(startTime)} - {formatTime(endTime)}
          </Text>
        )}
      </Card.Body>
      <Divider my={3} />
      <Card.Footer>
        <FormButton
          colorPalette="red"
          action={async () => {
            "use server";
            await deleteCourse(id);
          }}
        >
          Delete
        </FormButton>
      </Card.Footer>
    </Card.Root>
  );
};

export default CoursePage;
