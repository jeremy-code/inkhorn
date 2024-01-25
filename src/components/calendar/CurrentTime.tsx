import { DateTime, Info } from "luxon";

import { Box, GridItem } from "@/lib/styled/jsx";
import { getPercentage } from "@/utils/common";

// in the future, would like to convert to client component so top can be calculated on the client
// and updated every minute

type CurrentTimeProps = {
  startHour: number;
  endHour: number;
};

export const CurrentTime = ({ startHour, endHour }: CurrentTimeProps) => {
  const curr = DateTime.now();

  // time indicator would not be visible since it is outside of the calendar
  if (startHour > curr.hour || endHour < curr.hour) return null;

  const startOfWeek = Info.getStartOfWeek();

  const col = ((curr.weekday - startOfWeek + 7) % 7) + 1;
  const row = curr.hour - startHour + 2;
  const offset = curr.minute / 60;

  // z-index so above any events
  // visibility hidden so user can interact with events
  return (
    <GridItem visibility="hidden" zIndex="2" style={{ gridArea: `${row} / ${col}` }}>
      <Box
        pos="relative"
        css={{
          "&:before, &:after": {
            content: '""',
            visibility: "visible",
            pos: "absolute",
            bg: "red",
            inset: "auto 0 -1px",
          },
        }}
        _before={{
          h: "3",
          w: "3",
          rounded: "full",
          translate: "-50% 50%",
        }}
        _after={{ h: "1px" }}
        style={{ top: getPercentage(offset) }}
      />
    </GridItem>
  );
};
