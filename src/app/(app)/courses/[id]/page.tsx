import { HStack } from "styled-system/jsx";

import { Badge, Heading } from "@/components/ui";
import { getCourse } from "@/actions/course";
import { decode } from "@/utils/sqid";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const { name, daysOfTheWeek } = await getCourse(decode(params.id));

  return (
    <>
      <Heading>{name}</Heading>
      <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
    </>
  );
};

export default CoursePage;
