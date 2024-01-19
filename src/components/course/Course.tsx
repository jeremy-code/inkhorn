import { DateTime, Interval } from "luxon";

import { Badge, Card, HorizontalList, Link } from "@/components/ui";
import type { Course as CourseProps } from "@/interfaces/database";
import { encodeId } from "@/utils/sqid";

export const Course = async ({
  id,
  name,
  daysOfTheWeek,
  subject,
  startTime,
  endTime,
}: CourseProps) => {
  const interval = Interval.fromISO(`${startTime}/${endTime}`);

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
              {interval.toLocaleString(DateTime.TIME_SIMPLE)}
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
