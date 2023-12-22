import React from "react";

import { Card } from "@/components/ui";

type CourseProps = {
  name: string;
};

const Course = ({ name }: CourseProps) => {
  return (
    <Card.Root maxW="md">
      <Card.CardHeader>
        <Card.CardTitle>{name}</Card.CardTitle>
      </Card.CardHeader>
    </Card.Root>
  );
};

export default Course;
