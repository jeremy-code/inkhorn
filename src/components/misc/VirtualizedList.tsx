import React, { useRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import { css, cx } from "@/lib/styled/css";
import { styled } from "@/lib/styled/jsx";

type VirtualizedListProps = {
  listItems: (key: number | string, index: number, start: number, size: number) => ReactNode;
} & Omit<Parameters<typeof useVirtualizer>[0], "getScrollElement" | "getItemKey"> &
  HTMLAttributes<HTMLDivElement>;

export const VirtualizedList = styled(({ listItems, className, ...rest }: VirtualizedListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { getTotalSize, getVirtualItems } = useVirtualizer({
    getScrollElement: () => ref.current,
    getItemKey: (index) => `list-item-${index}`,
    ...rest,
  });

  return (
    <div ref={ref} className={cx(css({ h: "xs", overflow: "auto" }), className)}>
      <styled.div h={`${getTotalSize()}px`} w="full" pos="relative">
        {getVirtualItems().map(({ key, index, start, size }) => (
          <styled.div
            key={key}
            pos="absolute"
            inset="0"
            h={`${size}px`}
            translate="auto"
            // Panda CSS won't know the the number of pixels during runtime, so we need to use CSS variables
            style={{ "--translate-y": `${start}px` } as CSSProperties}
          >
            {listItems(key, index, start, size)}
          </styled.div>
        ))}
      </styled.div>
    </div>
  );
});
