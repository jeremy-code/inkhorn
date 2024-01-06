import { notFound } from "next/navigation";
import { Divider, HStack } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { Badge, Card, Text } from "@/components/ui";
import { deleteCourse, getCourse } from "@/actions/course";
import { getUser } from "@/actions/user";
import { decodeId } from "@/utils/sqid";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { id, userId, name, daysOfTheWeek, subject } = await getCourse(decodeId(params.id));
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
      <Card.Body></Card.Body>
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
