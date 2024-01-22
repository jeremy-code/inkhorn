"use client";

import { Info } from "luxon";

import { Checkbox } from "@/components/ui";
import { HStack, styled, type HstackProps } from "@/lib/styled/jsx";

export const WeekDaysSelector = (props: HstackProps) => {
  return (
    <HStack gap={1} {...props}>
      {Info.weekdays("narrow").map((day, i) => (
        <WeekDayCheckbox
          key={`${i}-${day}`}
          label={day}
          name="weekdays"
          // value is 1-indexed to match ISO week date (values 1-7)
          value={(i + 1).toString()}
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
