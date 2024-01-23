import { Info, type WeekdayNumbers } from "luxon";

import { Text } from "@/components/ui";
import type { Event } from "@/interfaces/time";
import { Flex, GridItem } from "@/lib/styled/jsx";
import { hexToRgb, rgbToYIQ } from "@/utils/colors";
import { getPercentage } from "@/utils/common";

type CalendarEventProps = {
  startHour: number;
  weekday: WeekdayNumbers;
} & Omit<Event, "weekdays">;

export const CalendarEvent = ({
  name,
  interval,
  weekday,
  startHour,
  color,
}: CalendarEventProps) => {
  const duration = Math.ceil(interval.length("hour"));
  if (!interval.start?.isValid) return;
  const startOfWeek = Info.getStartOfWeek();

  // offset by the start of the week
  const col = ((weekday - startOfWeek + 7) % 7) + 1;
  const row = interval.start.hour - startHour + 2;
  const offset = interval.start.minute / 60;

  return (
    // weekday and gridArea are 1-indexed
    <GridItem style={{ gridArea: `${row} / ${col} / span ${duration}` }}>
      <Flex
        pos="relative"
        justify="center"
        rounded="l1"
        color={rgbToYIQ(hexToRgb(color)) >= 128 ? "black" : "white"}
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
