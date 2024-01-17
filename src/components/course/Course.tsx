import { Badge, Card, HorizontalList, Link, Text } from "@/components/ui";
import type { Course as CourseProps } from "@/interfaces/database";
import { formatTime } from "@/utils/common";
import { encodeId } from "@/utils/sqid";

export const Course = async ({
  id,
  name,
  daysOfTheWeek,
  subject,
  startTime,
  endTime,
}: CourseProps) => {
  return (
    <Link href={`/courses/${encodeId(id)}`} linkDecor={false} w="full">
      <Card.Root w="full" minW="xs" boxShadow="none" _hover={{ bg: "bg.subtle" }}>
        <Card.Header display="block" pb={0}>
          <Badge mb="2">{subject}</Badge>
          <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Body display="block">
          <HorizontalList.Root fontSize="sm" color="fg.muted">
            <HorizontalList.Item>
              {formatTime(startTime)} - {formatTime(endTime)}
            </HorizontalList.Item>
            <HorizontalList.Item>
              {daysOfTheWeek?.map((day) => day[0].toUpperCase())}
            </HorizontalList.Item>
          </HorizontalList.Root>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};
