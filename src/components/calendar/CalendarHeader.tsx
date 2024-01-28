import { Info } from "luxon";

import { Grid, GridItem, type GridProps } from "@/lib/styled/jsx";
import { reorderWeekdaysByStart } from "@/utils/time";

export const CalendarHeader = (props: GridProps) => {
  return (
    <Grid columns={7} gap="1px" {...props}>
      {reorderWeekdaysByStart(Info.weekdays("short")).map((day) => (
        <GridItem key={`${day}`} textAlign="center">
          {day}
        </GridItem>
      ))}
    </Grid>
  );
};
