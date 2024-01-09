"use client";

import { Checkbox } from "@/components/ui";
import { HStack, styled, type HstackProps } from "@/lib/styled/jsx";
import { DAY_PREFIX, daysOfTheWeek } from "@/utils/constants";

export const WeekDaysSelector = (props: HstackProps) => {
  return (
    <HStack gap={1} {...props}>
      {daysOfTheWeek.map((day, i) => (
        <WeekDayCheckbox
          label={day.abbr}
          name={`${DAY_PREFIX}-${day.value}`}
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
