import React, { type CSSProperties } from "react";
import { DateTime, Info } from "luxon";

import { CalendarEvent } from "@/components/calendar";
import { Text } from "@/components/ui";
import { Grid, GridItem, type GridProps } from "@/lib/styled/jsx";
import { getTimeRange, TIME_NARROW } from "@/utils/time";
import type { Event } from "@/interfaces";

type CalendarProps = {
  events: Event[];
} & GridProps;

export const Calendar = ({ events, ...rest }: CalendarProps) => {
  const timeRange = getTimeRange(events.map((event) => event.interval));

  return (
    <Grid grid="'. header' 'time calendar' / max-content auto" gap="0" {...rest}>
      <Grid gridArea="header" columns={7} gap="1px">
        {Info.weekdays("short").map((day) => (
          <GridItem key={day} textAlign="center">
            {day}
          </GridItem>
        ))}
      </Grid>

      <Grid gridArea="time" gap="1px">
        {timeRange.map((time) => (
          <Grid
            key={time}
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
              {time}
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
        <Grid grid="subgrid/subgrid" gridArea="1/1/-1/-1" gap="1px" zIndex="1">
          {events.map((event) =>
            event.weekdays.map((day) => (
              <CalendarEvent
                key={`${day}-${event.interval.toISO()}`}
                weekday={day}
                startHour={DateTime.fromFormat(timeRange[0], TIME_NARROW).hour}
                {...event}
              />
            ))
          )}
        </Grid>

        {/* Decorative elements, creates borders between cells */}
        {/* Using subgrid here to allow grid to auto place elements while overlapping */}
        <Grid grid="subgrid/subgrid" gridArea="1/1/-1/-1" gap="1px">
          {Info.weekdays().map((day) =>
            timeRange.map((time) => <GridItem key={`${day}-${time}`} bg="bg.default" />)
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
