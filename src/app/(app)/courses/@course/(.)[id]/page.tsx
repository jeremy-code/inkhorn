import { HStack } from "styled-system/jsx";

import { ShallowPage } from "@/components/misc";
import { Badge, Card } from "@/components/ui";
import { db } from "@/lib";

type CoursePageProps = {
  params: {
    id: string;
  };
};

const CoursePage = async ({ params }: CoursePageProps) => {
  const course = await db.query.courses.findFirst({
    where: (c, { eq }) => eq(c.id, params.id),
  });

  if (!course) return;

  const { name, daysOfTheWeek } = course;

  return (
    <ShallowPage>
      <Card.Root m="4" animation="drawer-in-right">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
          <Card.Description>
            <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
          </Card.Description>
        </Card.Header>
      </Card.Root>
    </ShallowPage>
  );
};

export default CoursePage;
