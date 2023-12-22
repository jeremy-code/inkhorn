import React from "react";

import { Card } from "@/components/ui";

type CourseProps = {
  name: string;
  daysOfTheWeek: string[] | null;
};

const Course = ({ name, daysOfTheWeek }: CourseProps) => {
  return (
    <Card.Root maxW="md">
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>
      <Card.Body>{daysOfTheWeek}</Card.Body>
    </Card.Root>
  );
};

export default Course;
