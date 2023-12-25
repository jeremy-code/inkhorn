import Link from "next/link";

import { Card } from "@/components/ui";
import type { Course as CourseProps } from "@/interfaces";

const Course = ({ id, name, daysOfTheWeek }: CourseProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <Card.Root w="md">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Body>{daysOfTheWeek}</Card.Body>
      </Card.Root>
    </Link>
  );
};

export default Course;
