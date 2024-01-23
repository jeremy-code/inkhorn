import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FormButton } from "@/components/form";
import { Page } from "@/components/layout";
import { BackButton, Icon } from "@/components/misc";
import { Badge, Card, Heading, Text } from "@/components/ui";
import { HStack, VStack } from "@/lib/styled/jsx";
import { decodeId } from "@/utils/sqid";
import { getInterval, getWeekday, TIME_SIMPLE } from "@/utils/time";
import { deleteCourse, getCourse } from "@/actions/course";
import { getUser } from "@/actions/user";

type CoursePageProps = { params: { id: string } };

export const generateMetadata = async ({ params }: CoursePageProps): Promise<Metadata> => ({
  title: (await getCourse(decodeId(params.id))).name,
});

const CoursePage = async ({ params }: CoursePageProps) => {
  const { id, userId, name, weekdays, subject, startTime, endTime } = await getCourse(
    decodeId(params.id)
  );
  const { id: currentUserId } = await getUser();

  if (userId !== currentUserId) notFound();

  return (
    <Page minW="lg">
      <Page.Heading>
        <HStack>
          <BackButton />
          <Heading>{name}</Heading>
        </HStack>
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
      </Page.Heading>
      <VStack p={4} alignItems="normal">
        <Card.Title>{name}</Card.Title>
        <Text fontSize="sm" color="fg.muted">
          {subject}
        </Text>
        <HStack>{weekdays?.map((day) => <Badge key={day}>{getWeekday(day)}</Badge>)}</HStack>
        <Text fontSize="sm" color="fg.muted">
          {getInterval(startTime, endTime).toLocaleString(TIME_SIMPLE)}
        </Text>
      </VStack>
    </Page>
  );
};

export default CoursePage;
