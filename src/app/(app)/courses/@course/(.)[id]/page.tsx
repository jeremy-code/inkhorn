import { notFound, redirect } from "next/navigation";

import { FormButton } from "@/components/form";
import { Icon } from "@/components/misc";
import { Badge, Card, Heading, IconButton, Text } from "@/components/ui";
import { Flex, HStack, VStack } from "@/lib/styled/jsx";
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
    <Flex w="full" h="full" flexDir="column">
      <HStack h="16" p="4" borderBottom="muted" justify="space-between">
        <Heading>{name}</Heading>

        <HStack>
          <FormButton
            colorPalette="red"
            variant="outline"
            action={async () => {
              "use server";
              await deleteCourse(id);
            }}
          >
            <Icon name="Trash" />
            Delete
          </FormButton>

          <form
            action={async () => {
              "use server";
              redirect("/courses");
            }}
          >
            <IconButton variant="ghost" type="submit">
              <Icon name="X" />
            </IconButton>
          </form>
        </HStack>
      </HStack>

      <VStack p={4} alignItems="normal">
        <Card.Title>{name}</Card.Title>
        <Text fontSize="sm" color="fg.muted">
          {subject}
        </Text>
        <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
        <Text fontSize="sm" color="fg.muted">
          {formatTime(startTime)} - {formatTime(endTime)}
        </Text>
      </VStack>
    </Flex>
  );
};

export default CoursePage;
