import { HStack } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { Badge, Card } from "@/components/ui";
import { deleteCourse, getCourse } from "@/actions/course";

type CoursePageProps = {
  params: {
    id: string;
  };
};

const CoursePage = async ({ params }: CoursePageProps) => {
  const course = await getCourse(params.id);
  if (!course) return;

  const { name, daysOfTheWeek } = course;

  return (
    <Card.Root m="4" animation="drawer-in-right">
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
      </Card.Header>
      <Card.Footer>
        <FormButton
          action={async () => {
            "use server";
            await deleteCourse(course.id);
          }}
        >
          Delete
        </FormButton>
      </Card.Footer>
    </Card.Root>
  );
};

export default CoursePage;
