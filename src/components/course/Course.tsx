import { HStack } from "styled-system/jsx";

import { Badge, Card, Link } from "@/components/ui";
import type { Course as CourseProps } from "@/interfaces";

const Course = ({ id, name, daysOfTheWeek }: CourseProps) => {
  return (
    <Link href={`/courses/${encodeURIComponent(id)}`} linkDecor={false} w="full">
      <Card.Root w="full">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default Course;
