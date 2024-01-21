import { Text } from "@/components/ui";
import type { Event } from "@/interfaces/time";
import { Flex, GridItem } from "@/lib/styled/jsx";
import { getPercentage } from "@/utils/common";
import { days } from "@/utils/constants";

type CalendarEventProps = {
  startHour: number;
  weekday: (typeof days)[number];
} & Omit<Event, "weekdays">;

export const CalendarEvent = ({ name, interval, weekday, startHour }: CalendarEventProps) => {
  const duration = Math.ceil(interval.length("hour"));

  const row = interval.start?.hour! - startHour + 2;
  const column = days.indexOf(weekday) + 1;

  return (
    <GridItem style={{ gridArea: `${row} / ${column} / span ${duration}` }}>
      <Flex
        justify="center"
        bg="fg.subtle"
        color="bg.muted"
        rounded="l1"
        style={{ height: getPercentage(interval.length("hour"), duration) }}
      >
        <Text placeSelf="center">{name}</Text>
      </Flex>
    </GridItem>
  );
};
