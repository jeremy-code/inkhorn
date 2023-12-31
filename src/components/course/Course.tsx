import { Badge, Card, Link, Text } from "@/components/ui";
import type { Course as CourseProps } from "@/interfaces/database";
import { HStack } from "@/lib/styled/jsx";
import { encodeId } from "@/utils/sqid";

export const Course = async ({ id, name, daysOfTheWeek, subject }: CourseProps) => {
  return (
    <Link href={`/courses/${encodeId(id)}`} linkDecor={false} w="full">
      <Card.Root
        w="full"
        minW="xs"
        transitionTimingFunction="ease-in-out"
        transitionDuration="fast"
        // On hover, scale up and make the shadow more pronounced
        _hover={{
          transform: "translate3D(0,-1px,0) scale(1.03)",
          boxShadow: "xl",
        }}
      >
        <Card.Header flexDir="row" alignItems="center" gap={3}>
          <Card.Title>{name}</Card.Title>
          <Text fontSize="sm" color="fg.muted">
            {subject}
          </Text>
        </Card.Header>
        <Card.Body>
          <HStack>{daysOfTheWeek?.map((day) => <Badge key={day}>{day}</Badge>)}</HStack>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};
