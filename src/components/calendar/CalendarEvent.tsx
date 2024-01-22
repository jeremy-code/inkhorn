import { WeekdayNumbers } from "luxon";

import { Text } from "@/components/ui";
import type { Event } from "@/interfaces/time";
import { Flex, GridItem } from "@/lib/styled/jsx";
import { getPercentage } from "@/utils/common";

type CalendarEventProps = {
  startHour: number;
  weekday: WeekdayNumbers;
} & Omit<Event, "weekdays">;

export const CalendarEvent = ({ name, interval, weekday, startHour }: CalendarEventProps) => {
  const duration = Math.ceil(interval.length("hour"));
  const row = interval.start?.hour! - startHour + 2;

  return (
    <GridItem style={{ gridArea: `${row} / ${weekday} / span ${duration}` }}>
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
