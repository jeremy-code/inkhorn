"use client";

import { HStack, styled, type HstackProps } from "styled-system/jsx";

import * as Checkbox from "@/components/ui/Checkbox";
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

type WeekDayCheckboxProps = {
  label: string;
} & Checkbox.CheckboxProps;

const WeekDayCheckbox = ({ label, ...rest }: WeekDayCheckboxProps) => {
  return (
    <Checkbox.Root {...rest}>
      {({ isChecked }) => (
        <Checkbox.Control>
          <styled.span color={isChecked ? "white" : "black"}>{label}</styled.span>
        </Checkbox.Control>
      )}
    </Checkbox.Root>
  );
};
