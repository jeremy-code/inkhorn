import { HStack } from "styled-system/jsx";

import { Badge, Heading } from "@/components/ui";
import { getCourse } from "@/actions/course";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { name, daysOfTheWeek } = await getCourse(params.id);

  return (
    <>
      <Heading>{name}</Heading>
      <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
    </>
  );
};

export default CoursePage;
