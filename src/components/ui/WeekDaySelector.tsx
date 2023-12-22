"use client";

import { hstack, HstackStyles } from "styled-system/patterns";

import type { CheckboxProps } from "@/components/ui/Checkbox";
import * as Checkbox from "@/components/ui/Checkbox";

const daysOfTheWeek = [
  {
    abbr: "S",
    value: "sunday",
  },
  {
    abbr: "T",
    value: "tuesday",
  },
  {
    abbr: "W",
    value: "wednesday",
  },
  {
    abbr: "T",
    value: "thursday",
  },
  {
    abbr: "F",
    value: "friday",
  },
  {
    abbr: "S",
    value: "saturday",
  },
];

export const WeekDaySelector = (props: HstackStyles) => {
  return (
    <div className={hstack({ gap: 1, ...props })}>
      {daysOfTheWeek.map((day, index) => (
        <WeekDayCheckbox key={index} label={day.abbr} name={`day-of-the-week-${day.value}`} />
      ))}
    </div>
  );
};

type WeekDayCheckbox = {
  label: string;
} & CheckboxProps;

const WeekDayCheckbox = ({ label, ...rest }: WeekDayCheckbox) => {
  return (
    <Checkbox.Root {...rest}>
      {(state) => (
        <Checkbox.Control>
          <span style={{ color: state.isChecked ? "white" : "black" }}>{label}</span>
        </Checkbox.Control>
      )}
    </Checkbox.Root>
  );
};
