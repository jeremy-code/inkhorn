import React from "react";
import Link from "next/link";

import { Card } from "@/components/ui";

type CourseProps = {
  id: string;
  name: string;
  daysOfTheWeek: string[] | null;
};

const Course = ({ id, name, daysOfTheWeek }: CourseProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <Card.Root maxW="md">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Body>{daysOfTheWeek}</Card.Body>
      </Card.Root>
    </Link>
  );
};

export default Course;
