"use client";

import { Checkbox, FormLabel } from "@/components/ui";
import { Flex, FlexProps, styled } from "@/lib/styled/jsx";
import { getWeekday, reorderWeekdaysByStart, WEEKDAY_NUMBERS } from "@/utils/time";

type WeekDaysInputProps = {
  label?: string;
} & FlexProps;

export const WeekDaysInput = ({ label, ...rest }: WeekDaysInputProps) => {
  return (
    <Flex flexDir="column" gap="1.5" {...rest}>
      <FormLabel>{label}</FormLabel>

      <Flex gap={1}>
        {reorderWeekdaysByStart(WEEKDAY_NUMBERS).map((isoIndex, i) => (
          <WeekDayCheckbox
            key={`${isoIndex}-${i}`}
            name="weekdays"
            label={getWeekday(isoIndex, "narrow")}
            value={`${isoIndex}`}
          />
        ))}
      </Flex>
    </Flex>
  );
};

const WeekDayCheckbox = ({ label, ...rest }: { label: string } & Checkbox.CheckboxProps) => {
  return (
    <Checkbox.Root {...rest}>
      {({ isChecked }) => (
        <Checkbox.Control>
          <styled.span color={isChecked ? "colorPalette.fg" : "fg.default"}>{label}</styled.span>
        </Checkbox.Control>
      )}
    </Checkbox.Root>
  );
};
