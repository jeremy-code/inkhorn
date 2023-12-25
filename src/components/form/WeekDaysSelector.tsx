"use client";

import { HStack, HstackProps } from "styled-system/jsx";

import * as Checkbox from "@/components/ui/Checkbox";
import type { CheckboxProps } from "@/components/ui/Checkbox";
import { daysOfTheWeek } from "./constants";

export const WeekDaysSelector = (props: HstackProps) => {
  return (
    <HStack gap={1} {...props}>
      {daysOfTheWeek.map((day, i) => (
        <WeekDayCheckbox
          label={day.abbr}
          name={`day-of-the-week-${day.value}`}
          key={`${i}-${day.value}`}
        />
      ))}
    </HStack>
  );
};

type WeekDayCheckbox = {
  label: string;
} & CheckboxProps;

const WeekDayCheckbox = ({ label, ...rest }: WeekDayCheckbox) => {
  return (
    <Checkbox.Root {...rest}>
      {({ isChecked }) => (
        <Checkbox.Control>
          <span style={{ color: isChecked ? "white" : "black" }}>{label}</span>
        </Checkbox.Control>
      )}
    </Checkbox.Root>
  );
};
