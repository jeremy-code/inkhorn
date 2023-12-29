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
  const { id, name, daysOfTheWeek } = await getCourse(params.id);

  return (
    <Card.Root animation="drawer-in-right" h="full" w="full" minW="lg" mx={2}>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
      </Card.Header>
      <Card.Footer>
        <FormButton
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
