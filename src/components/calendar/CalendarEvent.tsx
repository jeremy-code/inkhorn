import type { WeekdayNumbers } from "luxon";

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
  if (!interval.start?.isValid) return;

  const row = interval.start.hour - startHour + 2;
  const offset = interval.start.minute / 60;

  return (
    // weekday and gridArea are 1-indexed
    <GridItem pos="relative" style={{ gridArea: `${row} / ${weekday} / span ${duration}` }}>
      <Flex
        pos="absolute"
        justify="center"
        bg="fg.subtle"
        color="bg.muted"
        rounded="l1"
        inset="0"
        style={{
          height: getPercentage(interval.length("hour"), duration),
          top: getPercentage(offset, duration),
        }}
      >
        <Text placeSelf="center">{name}</Text>
      </Flex>
    </GridItem>
  );
};
