import type { DateTimeMaybeValid } from "luxon";

import { Text } from "@/components/ui";
import { Grid, type GridProps } from "@/lib/styled/jsx";
import { TIME_NARROW } from "@/utils/time";

type CalendarTimesProps = {
  timeRange: DateTimeMaybeValid[];
} & GridProps;

export const CalendarTimes = ({ timeRange, ...rest }: CalendarTimesProps) => {
  return (
    <Grid gap="1px" {...rest}>
      {timeRange.map((time) => (
        <Grid
          key={`${time}`}
          pos="relative"
          placeContent="end"
          // padding-right to account for pseudo-element
          pr={4}
          _before={{
            content: "''",
            pos: "absolute",
            w: "3",
            // inset bottom -1px to account for border, right 0 to right-align
            inset: "auto 0 -1px auto",
            borderBottom: "muted",
          }}
        >
          <Text translate="auto" y="50%" fontWeight="normal" fontSize="sm">
            {time.toFormat(TIME_NARROW)}
          </Text>
        </Grid>
      ))}
    </Grid>
  );
};
