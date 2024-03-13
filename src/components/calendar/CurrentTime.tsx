"use client";

import React, { useState } from "react";
import { useLocale } from "@react-aria/i18n";
import { DateTime, Info, type HourNumbers } from "luxon";

import { Box, GridItem } from "@/lib/styled/jsx";
import { getPercentage } from "@/utils/common";
import { useInterval } from "@/hooks";

type CurrentTimeProps = {
  startHour: HourNumbers;
  endHour: HourNumbers;
};

export const CurrentTime = ({ startHour, endHour }: CurrentTimeProps) => {
  const { locale } = useLocale();
  const [curr, setCurr] = useState(DateTime.now().setLocale(locale));

  // update every minute
  useInterval(() => setCurr(DateTime.local({ locale })), 60 * 1000);

  if (!Info.features().localeWeek) return null;

  // time indicator would not be visible since it is outside of the calendar
  if (startHour > curr.hour || endHour < curr.hour) return null;

  return (
    <GridItem
      // visibility is hidden to prevent empty space overlapping with events
      visibility="hidden"
      // z-index is set to prevent the indicator from being covered by events
      zIndex="docked"
      style={{
        gridRow: curr.hour - startHour + 2,
        gridColumn: curr.localWeekday,
      }}
    >
      <Box
        pos="relative"
        css={{
          "&::before, &::after": {
            content: '""',
            visibility: "visible",
            pos: "absolute",
            // left, right, bottom are set to 0, or full width, bottom aligned
            inset: "auto 0 0",
            bg: "red.500",
          },
        }}
        _before={{
          h: "3",
          w: "3",
          rounded: "full",
          // move left and down to be centered at left bottom corner
          translate: "-50% 50%",
        }}
        _after={{ h: "1px" }}
        style={{ top: getPercentage(curr.minute / 60) }}
      />
    </GridItem>
  );
};
