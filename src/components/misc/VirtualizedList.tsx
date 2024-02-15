import React, { useCallback, useRef, type HTMLAttributes } from "react";
import { useVirtualizer, type VirtualItem } from "@tanstack/react-virtual";

import { css, cx } from "@/lib/styled/css";
import { styled } from "@/lib/styled/jsx";

type VirtualizedListProps = {
  listItems: React.FC<VirtualItem>;
} & Omit<Parameters<typeof useVirtualizer>[0], "getScrollElement" | "getItemKey"> &
  HTMLAttributes<HTMLDivElement>;

export const VirtualizedList = styled(({ listItems, className, ...rest }: VirtualizedListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { getTotalSize, getVirtualItems } = useVirtualizer({
    getItemKey: useCallback((index: number) => `list-item-${index}`, []),
    getScrollElement: () => ref.current,
    ...rest,
  });

  return (
    <div ref={ref} className={cx(css({ h: "xs", overflow: "auto" }), className)}>
      <styled.div h={`${getTotalSize()}px`} w="full" pos="relative">
        {getVirtualItems().map((item) => (
          <styled.div
            key={item.key}
            pos="absolute"
            inset="0"
            h={`${item.size}px`}
            translate="auto"
            // Panda CSS won't know the the number of pixels during runtime, so we need to use CSS variables
            style={{ "--translate-y": `${item.start}px` }}
          >
            {listItems(item)}
          </styled.div>
        ))}
      </styled.div>
    </div>
  );
});
