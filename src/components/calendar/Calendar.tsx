import { Info } from "luxon";

import { CalendarEvent, CalendarHeader, CalendarTimes, CurrentTime } from "@/components/calendar";
import { Grid, GridItem, type GridProps } from "@/lib/styled/jsx";
import { hoursFromIntervals, reorderWeekdaysByStart, WEEKDAY_NUMBERS } from "@/utils/time";
import type { Event } from "@/interfaces";

type CalendarProps = {
  events: Event[];
} & GridProps;

export const Calendar = ({ events, ...rest }: CalendarProps) => {
  const timeRange = hoursFromIntervals(events.map((event) => event.interval));

  return (
    <Grid grid="'. header' 'time calendar' / max-content auto" gap="0" {...rest}>
      <CalendarHeader gridArea="header" />
      <CalendarTimes gridArea="time" timeRange={timeRange} />

      <Grid
        gridArea="calendar"
        gap="1px"
        bg="border.muted"
        // using outline here since border would misalign the grid
        outline="muted"
        grid="[main-start] repeat(var(--rows), token(sizes.12)) [main-end] / [main-start] repeat(7, 1fr) [main-end]"
        style={{ "--rows": timeRange.length }}
      >
        {/* Indicates current time */}
        <CurrentTime startHour={timeRange[0].hour} endHour={timeRange[timeRange.length - 1].hour} />

        {/* Events */}
        {events.map((event) =>
          event.weekdays.map((day) => (
            <CalendarEvent
              key={`${day}-${event.interval}`}
              weekday={day}
              timeRange={timeRange}
              {...event}
            />
          ))
        )}

        {/* Decorative elements, creates borders between cells */}
        {/* Using subgrid here to allow subgrid to auto place elements while above elements
         /* can overlap, which is impossible on an implicit grid */}
        <Grid grid="subgrid/auto-flow" gridArea="main" gap="1px">
          {reorderWeekdaysByStart(WEEKDAY_NUMBERS).map((day) =>
            timeRange.map((time) => (
              <GridItem
                key={`${day}-${time}`}
                aria-hidden
                // weekends have muted background
                bg={Info.getWeekendWeekdays().includes(day) ? "bg.muted" : "bg.default"}
              />
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
