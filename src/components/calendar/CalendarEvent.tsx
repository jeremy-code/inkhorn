import type { DateTime, WeekdayNumbers } from "luxon";
import tinycolor from "tinycolor2";

import { Text } from "@/components/ui";
import type { Event } from "@/interfaces/time";
import { Flex, GridItem } from "@/lib/styled/jsx";
import { getPercentage } from "@/utils/common";
import { getWeekdayOffset } from "@/utils/time";

type CalendarEventProps = {
  timeRange: DateTime[];
  weekday: WeekdayNumbers;
} & Omit<Event, "weekdays">;

export const CalendarEvent = ({
  name,
  interval,
  weekday,
  timeRange,
  color,
}: CalendarEventProps) => {
  const duration = Math.ceil(interval.length("hour"));
  if (!interval.start?.isValid) return;
  const startHour = timeRange[0].hour;

  // offset by the start of the week
  const col = getWeekdayOffset(weekday);
  const row = interval.start.hour - startHour + 2;
  const offset = interval.start.minute / 60;

  return (
    // weekday and gridArea are 1-indexed
    <GridItem style={{ gridArea: `${row} / ${col} / span ${duration}` }}>
      <Flex
        pos="relative"
        justify="center"
        rounded="l1"
        color={tinycolor.isReadable(color, "white") ? "white" : "black"}
        style={{
          height: getPercentage(interval.length("hour"), duration),
          top: getPercentage(offset, duration),
          backgroundColor: color,
        }}
      >
        <Text placeSelf="center">{name}</Text>
      </Flex>
    </GridItem>
  );
};
