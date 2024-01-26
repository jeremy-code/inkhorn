"use client";

import React, { useEffect, useState, type CSSProperties } from "react";
import { DateTime, type HourNumbers } from "luxon";

import { Box, GridItem } from "@/lib/styled/jsx";
import { getPercentage } from "@/utils/common";
import { getWeekdayOffset } from "@/utils/time";

type CurrentTimeProps = {
  startHour: HourNumbers;
  endHour: HourNumbers;
};

export const CurrentTime = ({ startHour, endHour }: CurrentTimeProps) => {
  const [curr, setCurr] = useState(DateTime.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr(DateTime.now());
      // update every minute
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // time indicator would not be visible since it is outside of the calendar
  if (startHour > curr.hour || endHour < curr.hour) return null;

  const offset = curr.minute / 60;

  // z-index so above any events
  // visibility hidden so user can interact with events
  return (
    <GridItem
      visibility="hidden"
      zIndex="2"
      gridArea="var(--row) / var(--col)"
      style={
        {
          "--row": curr.hour - startHour + 2,
          "--col": getWeekdayOffset(curr.weekday),
        } as CSSProperties
      }
    >
      <Box
        pos="relative"
        css={{
          "&:before, &:after": {
            content: '""',
            visibility: "visible",
            pos: "absolute",
            bg: "red",
            inset: "auto 0 0",
          },
        }}
        _before={{
          h: "3",
          w: "3",
          rounded: "full",
          translate: "-50% 50%",
        }}
        _after={{ h: "1px" }}
        will-change="top"
        style={{ top: getPercentage(offset) }}
      />
    </GridItem>
  );
};
