import { Divider, HStack } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { Badge, Card } from "@/components/ui";
import { deleteCourse, getCourse } from "@/actions/course";
import { decode } from "@/utils/sqid";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { id, name, daysOfTheWeek } = await getCourse(decode(params.id));

  return (
    <Card.Root h="full" w="full" minW="lg" m={2}>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
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
