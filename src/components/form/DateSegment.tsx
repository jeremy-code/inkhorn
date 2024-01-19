import React, { useRef } from "react";
import { useDateSegment } from "@react-aria/datepicker";
import { type DateFieldState, type DateSegment as Segment } from "@react-stately/datepicker";

import { cva } from "@/lib/styled/css";

const dateSegment = cva({
  base: { px: "0.5" },
  variants: {
    placeholder: {
      true: { color: "fg.subtle" },
      false: { color: "fg.default" },
    },
  },
});

export const DateSegment = ({ segment, state }: { segment: Segment; state: DateFieldState }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      suppressHydrationWarning
      className={dateSegment({ placeholder: segment.isPlaceholder })}
    >
      {segment.text}
    </div>
  );
};
