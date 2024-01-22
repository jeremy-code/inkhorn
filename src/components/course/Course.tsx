import { Badge, Card, HorizontalList, Link } from "@/components/ui";
import type { Course as CourseProps } from "@/interfaces/database";
import { encodeId } from "@/utils/sqid";
import { getInterval, getWeekday, TIME_SIMPLE } from "@/utils/time";

export const Course = async ({ id, name, weekdays, subject, startTime, endTime }: CourseProps) => {
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
              {getInterval(startTime, endTime).toLocaleString(TIME_SIMPLE)}
            </HorizontalList.Item>
            <HorizontalList.Item>
              {weekdays?.map((day) => getWeekday(day, "narrow"))}
            </HorizontalList.Item>
          </HorizontalList.Root>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};
