import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DateTime, Info, Interval } from "luxon";

import { FormButton } from "@/components/form";
import { Page } from "@/components/layout";
import { BackButton, Icon } from "@/components/misc";
import { Badge, Card, Heading, Text } from "@/components/ui";
import { HStack, VStack } from "@/lib/styled/jsx";
import { decodeId } from "@/utils/sqid";
import { deleteCourse, getCourse } from "@/actions/course";
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

const CoursePage = async ({ params }: CoursePageProps) => {
  const { id, userId, name, weekdays, subject, startTime, endTime } = await getCourse(
    decodeId(params.id)
  );
  const interval = Interval.fromISO(`${startTime}/${endTime}`);
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
        <HStack>
          {weekdays?.map((day) => <Badge key={day}>{Info.weekdays()[day - 1]}</Badge>)}
        </HStack>
        <Text fontSize="sm" color="fg.muted">
          {interval.toLocaleString(DateTime.TIME_SIMPLE)}
        </Text>
      </VStack>
    </Page>
  );
};

export default CoursePage;
