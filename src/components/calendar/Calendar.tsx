import React, { type CSSProperties } from "react";
import { Info } from "luxon";

import { CalendarEvent } from "@/components/calendar";
import { Text } from "@/components/ui";
import { Grid, GridItem } from "@/lib/styled/jsx";
import { getTimeFromTimeRange, getTimeRange } from "@/utils/time";
import type { Event } from "@/interfaces";

type CalendarProps = {
  events: Event[];
};

export const Calendar = ({ events }: CalendarProps) => {
  const intervals = events.map((event) => event.interval);
  const timeRange = getTimeRange(...intervals);

  return (
    <Grid m={4} grid="'. header' 'time calendar' / max-content auto" gap="0">
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
                startHour={getTimeFromTimeRange(timeRange[0]).hour}
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
