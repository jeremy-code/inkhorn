import React, { type CSSProperties } from "react";
import { Info } from "luxon";

import { CalendarEvent, CurrentTime } from "@/components/calendar";
import { Text } from "@/components/ui";
import { Grid, GridItem, type GridProps } from "@/lib/styled/jsx";
import { getTimeRange, getWeekdaysIndex, sortWeekdays, TIME_NARROW } from "@/utils/time";
import type { Event } from "@/interfaces";

type CalendarProps = {
  events: Event[];
} & GridProps;

export const Calendar = ({ events, ...rest }: CalendarProps) => {
  const timeRange = getTimeRange(events.map((event) => event.interval));
  const [start, end] = [timeRange[0], timeRange.at(-1)];

  // end is undefined, or start or end times are invalid
  if (!end || !start.isValid || !end.isValid) return null;

  return (
    <Grid grid="'. header' 'time calendar' / max-content auto" gap="0" {...rest}>
      <Grid gridArea="header" columns={7} gap="1px">
        {sortWeekdays(Info.weekdays("short")).map((day) => (
          <GridItem key={day} textAlign="center">
            {day}
          </GridItem>
        ))}
      </Grid>

      <Grid gridArea="time" gap="1px">
        {timeRange.map((time) => (
          <Grid
            key={time.toString()}
            pos="relative"
            placeContent="end"
            _before={{
              content: "''",
              w: "3",
              pos: "absolute",
              // inset bottom -1px to account for border, right 0 to right-align
              inset: "auto 0 -1px auto",
              borderBottom: "muted",
            }}
          >
            <Text translate="auto" y="50%" mr="4" fontWeight="normal" fontSize="sm">
              {time.toFormat(TIME_NARROW)}
            </Text>
          </Grid>
        ))}
      </Grid>

      <Grid
        gridArea="calendar"
        gap="1px"
        bg="border.muted"
        // using outline here since border would misalign the grid
        outline="muted"
        grid="repeat(var(--rows), token(sizes.12)) / repeat(7, 1fr)"
        style={{ "--rows": timeRange.length } as CSSProperties}
      >
        {/* Current time indicator */}
        <CurrentTime startHour={start.hour} endHour={end.hour} />

        {/* Events */}
        <Grid grid="subgrid/subgrid" gridArea="1/1/-1/-1" gap="1px" zIndex="1">
          {events.map((event) =>
            event.weekdays.map((day) => (
              <CalendarEvent
                key={`${day}-${event.interval}`}
                weekday={day}
                startHour={start.hour}
                {...event}
              />
            ))
          )}
        </Grid>

        {/* Decorative elements, creates borders between cells */}
        {/* Using subgrid here to allow grid to auto place elements while overlapping */}
        <Grid grid="subgrid/subgrid" gridArea="1/1/-1/-1" gap="1px" gridAutoFlow="column">
          {sortWeekdays(getWeekdaysIndex()).map((day) =>
            timeRange.map((time) => (
              <GridItem
                key={`${day}-${time}`}
                // weekends have muted background
                bgColor={Info.getWeekendWeekdays().includes(day) ? "bg.muted" : "bg.default"}
              />
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
