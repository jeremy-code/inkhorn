import { HStack } from "styled-system/jsx";

import { Badge, Card, Link } from "@/components/ui";
import type { Course as CourseProps } from "@/interfaces";

const Course = ({ id, name, daysOfTheWeek }: CourseProps) => {
  return (
    <Link href={`/courses/${encodeURIComponent(id)}`} linkDecor={false} w="full">
      <Card.Root
        w="full"
        transitionTimingFunction="ease-in-out"
        transitionDuration="fast"
        // On hover, scale up and make the shadow more pronounced
        _hover={{
          transform: "translate3D(0,-1px,0) scale(1.03)",
          boxShadow: "xl",
        }}
      >
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
