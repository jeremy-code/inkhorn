"use client";

import React, { useRef, type InputHTMLAttributes } from "react";
import { useTimeField, type TimeValue } from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { useTimeFieldState, type TimeFieldStateOptions } from "@react-stately/datepicker";

import { DateSegment } from "@/components/form";
import { Label } from "@/components/ui";
import { cx, sva } from "@/lib/styled/css";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";

const timeField = sva({
  slots: ["root", "field", "input"],
  base: {
    root: { display: "flex", flexDir: "column", gap: "1.5" },
    field: {
      display: "flex",
      px: 3,
      py: 2,
      h: 10,
      border: "default",
      rounded: "l2",
      transition: "common",
      _focusWithin: {
        borderColor: "colorPalette.default",
        shadow: "0 0 0 1px var(--shadow-color)",
        shadowColor: "colorPalette.default",
      },
    },
    input: {
      srOnly: true,
    },
  },
});

type UnstyledTimeFieldProps = {
  options: Omit<TimeFieldStateOptions<TimeValue>, "locale">;
  // className is passed to root to allow for custom styling
  className?: string;
  // rest is passed to input for form submission
} & InputHTMLAttributes<HTMLInputElement>;

export const TimeField = styled(({ options, className, ...rest }: UnstyledTimeFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { locale } = useLocale();
  const state = useTimeFieldState({ ...options, locale });
  const { labelProps, fieldProps } = useTimeField({ ...options, inputRef }, state, ref);

  const classes = timeField();

  return (
    <>
      <div className={cx(classes.root, className)}>
        <Label {...labelProps}>{options.label}</Label>
        <div {...fieldProps} ref={ref} className={classes.field}>
          {state.segments.map((segment, i) => (
            <DateSegment key={`${i}-segment`} segment={segment} state={state} />
          ))}
        </div>
      </div>
      <input
        className={classes.input}
        readOnly
        type="text"
        value={state.timeValue?.toString() ?? ""}
        ref={inputRef}
        {...rest}
      />
    </>
  );
});

export type TimeFieldProps = HTMLStyledProps<typeof TimeField>;
